import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";
import { fonts } from "../../../constants/typography";


const styles = StyleSheet.create({

    badge: {
        width: 150,
        height: 30,
        backgroundColor: '#1c2029b4',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 4px 4px rgba(9, 10, 87, 0.21)',

    },

    skillsName: {
        color: colors.primary,
        fontSize: 13,
        fontFamily: fonts.jetbrains.regular,
    },


})

export { styles };