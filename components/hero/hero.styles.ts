import { StyleSheet } from "react-native";

import { colors } from "../../constants/colors";
import { fonts } from "../../constants/typography";

const styles = StyleSheet.create({

    container__hero: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
    },

    hero: {
        alignItems: 'center',
        gap: 40,
    },

    container_skills: {
        width: '100%',
        maxWidth: 350,
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    container_txt: {
        gap: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    hero__h1: {
        fontFamily: fonts.sora.bold,
        color: colors.white,
        fontSize: 40,
        textAlign: 'center',
        width: '100%',
        maxWidth: 600,
    },

    hero__h2: {
        fontFamily: fonts.sora.regular,
        color: colors.white,
        opacity: 0.8,
        textAlign: 'center',
        fontSize: 13,
    },

    hero__name: {
        fontFamily: fonts.jetbrains.regular,
        color: colors.white,
        opacity: 0.5,
        fontSize: 12,
        textAlign: 'center',
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