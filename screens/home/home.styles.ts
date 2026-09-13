import { StyleSheet } from "react-native";

import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    scrollContent: {
        flexGrow: 1,
    },

    content: {
        width: '85%',
        alignSelf: 'center',
        flex: 1,
    },
});

export { styles };