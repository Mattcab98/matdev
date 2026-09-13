import {
    useAnimatedReaction,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    type SharedValue,
} from 'react-native-reanimated';

interface ScrollRevealProps {
    scrollY: SharedValue<number>;
    triggerAt?: number;
    distance?: number;
}

export const useScrollReveal = ({
    scrollY,
    triggerAt = 50,
    distance = 40,
}: ScrollRevealProps) => {

    const progress = useSharedValue(0);

    useAnimatedReaction(
        () => scrollY.value,
        (currentScroll) => {

            if (currentScroll >= triggerAt && progress.value === 0) {

                progress.value = withTiming(1, {
                    duration: 700,
                });

            }

        },
    );

    const animatedStyle = useAnimatedStyle(() => {

        return {
            opacity: progress.value,

            transform: [
                {
                    translateY:
                        distance - (distance * progress.value),
                },
            ],
        };

    });

    return animatedStyle;
};