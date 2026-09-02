import { useEffect, useRef } from "react";
import {
  GLView,
  ExpoWebGLRenderingContext,
} from "expo-gl";
import { View } from "react-native";

import { styles } from "./AnimatedBackground.styles";

const vertexShaderSource = `
  attribute vec2 a_position;

  varying vec2 v_texCoord;

  void main() {
    v_texCoord = a_position * 0.5 + 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const fragmentShaderSource = `
  precision highp float;

  varying vec2 v_texCoord;

  uniform float u_time;
  uniform vec2 u_resolution;

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);

    return fract(p.x * p.y);
  }

  void main() {

    vec2 uv = v_texCoord;

    vec2 centered_uv =
      (uv - 0.5) *
      (u_resolution.x / u_resolution.y);

    // -------------------------
    // BASE
    // -------------------------

    vec3 color =
      vec3(0.005, 0.008, 0.02);

    // -------------------------
    // STARS
    // -------------------------

    float stars =
      pow(
        hash(uv * 100.0),
        50.0
      ) * 0.5;

    color += stars;

    // -------------------------
    // NEBULA 1
    // -------------------------

    float nebula1 =
      smoothstep(
        0.8,
        0.0,
        length(
          centered_uv -
          vec2(0.3, 0.2) *
          sin(u_time * 0.1)
        )
      );

    color +=
      nebula1 *
      vec3(0.0, 0.4, 0.5) *
      0.15;

    // -------------------------
    // NEBULA 2
    // -------------------------

    float nebula2 =
      smoothstep(
        0.8,
        0.0,
        length(
          centered_uv +
          vec2(0.2, 0.3) *
          cos(u_time * 0.15)
        )
      );

    color +=
      nebula2 *
      vec3(0.3, 0.0, 0.5) *
      0.10;

    // -------------------------
    // FLOATING ENERGY POINTS
    // -------------------------

    for (int i = 0; i < 5; i++) {

      float fi = float(i);

      vec2 position =
        vec2(
          sin(u_time * 0.2 + fi),
          cos(u_time * 0.3 + fi)
        ) * 0.4;

      float distanceToPoint =
        length(
          centered_uv - position
        );

      float pulse =
        sin(
          u_time * 1.5 + fi
        ) * 0.5 + 0.5;

      color +=
        (
          0.002 /
          (distanceToPoint + 0.001)
        ) *
        vec3(0.0, 1.0, 1.0) *
        pulse;
    }

    // -------------------------
    // VIGNETTE
    // -------------------------

    float vignette =
      smoothstep(
        1.2,
        0.2,
        length(centered_uv)
      );

    color *=
      0.65 +
      vignette * 0.35;

    // -------------------------
    // FINAL
    // -------------------------

    gl_FragColor =
      vec4(color, 1.0);
  }
`;

const AnimatedBackground = () => {

  const animationFrame =
    useRef<number | null>(null);

  useEffect(() => {

    return () => {

      if (
        animationFrame.current !== null
      ) {
        cancelAnimationFrame(
          animationFrame.current
        );
      }

    };

  }, []);

  const handleContextCreate = (
    gl: ExpoWebGLRenderingContext
  ) => {

    // -------------------------
    // VERTEX SHADER
    // -------------------------

    const vertexShader =
      gl.createShader(
        gl.VERTEX_SHADER
      );

    if (!vertexShader) {
      return;
    }

    gl.shaderSource(
      vertexShader,
      vertexShaderSource
    );

    gl.compileShader(
      vertexShader
    );

    if (
      !gl.getShaderParameter(
        vertexShader,
        gl.COMPILE_STATUS
      )
    ) {

      console.error(
        "Vertex shader error:",
        gl.getShaderInfoLog(
          vertexShader
        )
      );

      return;
    }

    // -------------------------
    // FRAGMENT SHADER
    // -------------------------

    const fragmentShader =
      gl.createShader(
        gl.FRAGMENT_SHADER
      );

    if (!fragmentShader) {
      return;
    }

    gl.shaderSource(
      fragmentShader,
      fragmentShaderSource
    );

    gl.compileShader(
      fragmentShader
    );

    if (
      !gl.getShaderParameter(
        fragmentShader,
        gl.COMPILE_STATUS
      )
    ) {

      console.error(
        "Fragment shader error:",
        gl.getShaderInfoLog(
          fragmentShader
        )
      );

      return;
    }

    // -------------------------
    // PROGRAM
    // -------------------------

    const program =
      gl.createProgram();

    if (!program) {
      return;
    }

    gl.attachShader(
      program,
      vertexShader
    );

    gl.attachShader(
      program,
      fragmentShader
    );

    gl.linkProgram(
      program
    );

    if (
      !gl.getProgramParameter(
        program,
        gl.LINK_STATUS
      )
    ) {

      console.error(
        "Program link error:",
        gl.getProgramInfoLog(
          program
        )
      );

      return;
    }

    gl.useProgram(program);

    // -------------------------
    // FULLSCREEN QUAD
    // -------------------------

    const vertices =
      new Float32Array([
        -1, -1,
         1, -1,
        -1,  1,

        -1,  1,
         1, -1,
         1,  1,
      ]);

    const buffer =
      gl.createBuffer();

    gl.bindBuffer(
      gl.ARRAY_BUFFER,
      buffer
    );

    gl.bufferData(
      gl.ARRAY_BUFFER,
      vertices,
      gl.STATIC_DRAW
    );

    const positionLocation =
      gl.getAttribLocation(
        program,
        "a_position"
      );

    gl.enableVertexAttribArray(
      positionLocation
    );

    gl.vertexAttribPointer(
      positionLocation,
      2,
      gl.FLOAT,
      false,
      0,
      0
    );

    // -------------------------
    // UNIFORMS
    // -------------------------

    const timeLocation =
      gl.getUniformLocation(
        program,
        "u_time"
      );

    const resolutionLocation =
      gl.getUniformLocation(
        program,
        "u_resolution"
      );

    // -------------------------
    // ANIMATION
    // -------------------------

    const startTime =
      performance.now();

    const render = () => {

      const elapsed =
        (
          performance.now() -
          startTime
        ) / 1000;

      const width =
        gl.drawingBufferWidth;

      const height =
        gl.drawingBufferHeight;

      // -------------------------
      // VIEWPORT
      // -------------------------

      gl.viewport(
        0,
        0,
        width,
        height
      );

      gl.clearColor(
        0,
        0,
        0,
        1
      );

      gl.clear(
        gl.COLOR_BUFFER_BIT
      );

      gl.useProgram(
        program
      );

      // -------------------------
      // TIME
      // -------------------------

      gl.uniform1f(
        timeLocation,
        elapsed
      );

      // -------------------------
      // RESOLUTION
      // -------------------------

      gl.uniform2f(
        resolutionLocation,
        width,
        height
      );

      // -------------------------
      // DRAW
      // -------------------------

      gl.drawArrays(
        gl.TRIANGLES,
        0,
        6
      );

      gl.endFrameEXP();

      animationFrame.current =
        requestAnimationFrame(
          render
        );
    };

    render();
  };

  return (
    <View style={styles.container}>
      <GLView
        style={styles.gl}
        onContextCreate={
          handleContextCreate
        }
      />
    </View>
  );
};

export { AnimatedBackground };