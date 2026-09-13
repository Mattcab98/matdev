import { useEffect } from "react";

import {
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withTiming,
} from "react-native-reanimated";

type FadeInOptions = {
    duration?: number;
    delay?: number;
    translateX?: number;
    translateY?: number;
};

export const useFadeIn = ({
    duration = 1000,
    delay = 0,
    translateX = 0,
    translateY = 0,
}: FadeInOptions = {}) => {

    const opacity = useSharedValue(0);

    const translateXValue = useSharedValue(translateX);
    const translateYValue = useSharedValue(translateY);

    useEffect(() => {

        opacity.value = withDelay(
            delay,
            withTiming(1, {
                duration,
            })
        );

        translateXValue.value = withDelay(
            delay,
            withTiming(0, {
                duration,
            })
        );

        translateYValue.value = withDelay(
            delay,
            withTiming(0, {
                duration,
            })
        );

    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,

        transform: [
            {
                translateX: translateXValue.value,
            },
            {
                translateY: translateYValue.value,
            },
        ],
    }));

    return animatedStyle;
};