import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,

    zIndex: -1,

    overflow: "hidden",
  },

  gl: {
    flex: 1,
  },
});

export { styles };