import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        paddingBottom: 50,
        flex: 1,
    },

    container__header: {
        width: '100%',
    },

    scrollContent: {
        flexGrow: 1,
    },

    content: {
        alignSelf: 'center',
        flex: 1,
        width: '90%',
    },
});

export { styles };