import {
    useSharedValue,
    useAnimatedScrollHandler,
    runOnJS,
} from 'react-native-reanimated';

export const useScroll = () => {

    const scrollY = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollY.value = event.contentOffset.y;

            console.log('SCROLL:', event.contentOffset.y);
        },
    });

    return {
        scrollY,
        scrollHandler,
    };
};