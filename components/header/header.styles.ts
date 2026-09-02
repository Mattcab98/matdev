import { StyleSheet } from "react-native";

import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.black,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
    },

    logo: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 10
    },

    user_icon: {
        color: colors.primary,
        fontSize: 13,
        borderWidth: 2,
        borderColor: colors.primary,
        borderRadius: 50,
        padding: 2,
    }
});

export { styles };