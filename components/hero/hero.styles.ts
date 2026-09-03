import { StyleSheet } from "react-native";

import { colors } from "../../constants/colors";
import { fonts } from "../../constants/typography";

const styles = StyleSheet.create({

    hero: {
        flexDirection: 'column',
        gap: 50,
        paddingHorizontal: 20,
        paddingVertical: 40,
    },

    container_skills: {
        flexDirection: 'row',
        gap: 20,
        flexWrap: 'wrap',
        justifyContent: 'center',
    },

    container_txt: {
        gap: 20,
        justifyContent: 'center',
    },

    hero__h1: {
        fontFamily: fonts.sora.bold,
        color: colors.white,
        fontSize: 40,
        textAlign: 'center',

    },

    hero__h2: {
        fontFamily: fonts.sora.regular,
        color: colors.white,
        textAlign: 'center',
        fontSize: 15,
    },

    container_button: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 15,
    },

    button__1: {
        width: 180,
        backgroundColor: colors.primary,
        padding: 10,
        textAlign: 'center',
        borderRadius: 8,
        fontFamily: fonts.jetbrains.regular,
     },

    button__2: {
        
        width: 180,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: colors.primary,
        fontFamily: fonts.jetbrains.regular,
        color: colors.primary,
        padding: 10,
        textAlign: 'center',
        borderRadius: 8,
    },

});

export { styles };