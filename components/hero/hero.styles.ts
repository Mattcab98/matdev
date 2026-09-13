import { StyleSheet } from "react-native";

import { colors } from "../../constants/colors";
import { fonts } from "../../constants/typography";

const styles = StyleSheet.create({

    container__hero: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
    },

    // MOBILE

    hero: {
        width: '100%',
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

    container_txtMobile: {
        width: '100%',
        gap: 20,

        justifyContent: 'center',
        alignItems: 'center',

        flexDirection: 'column',
    },

    hero__h1Mobile: {
        width: '100%',
        maxWidth: 600,

        fontFamily: fonts.sora.bold,
        color: colors.white,

        fontSize: 40,

        textAlign: 'center',
    },

    hero__h2Mobile: {
        width: '100%',
        maxWidth: 500,

        fontFamily: fonts.sora.regular,
        color: colors.white,

        fontSize: 13,

        lineHeight: 20,

        textAlign: 'center',

        opacity: 0.65,
    },

    // DESKTOP

    hero__desktop: {
        width: '100%',
        maxWidth: 1200,

        flexDirection: 'row',

        alignItems: 'center',
        justifyContent: 'space-between',

        gap: 60,
    },

    container_txtDesktop: {
        flex: 1,

        maxWidth: 700,

        alignItems: 'flex-start',
        justifyContent: 'center',

        gap: 20,
    },

    hero__h1Desktop: {
        width: '100%',
        maxWidth: 650,

        fontFamily: fonts.sora.bold,
        color: colors.white,

        fontSize: 52,
        lineHeight: 62,

        textAlign: 'left',
    },

    hero__h2Desktop: {
        width: '100%',
        maxWidth: 600,

        fontFamily: fonts.sora.regular,
        color: colors.white,

        fontSize: 16,
        lineHeight: 26,

        textAlign: 'left',

        opacity: 0.65,
    },

    // BUTTONS

    container__button: {
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