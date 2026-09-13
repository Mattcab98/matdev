import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";
import { fonts } from "../../../constants/typography";


const styles = StyleSheet.create({

    badge: {
        width: '45%',
        maxWidth: 150,
        height: 30,
        backgroundColor: '#15213cb4',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 4px 4px rgba(22, 23, 89, 0.21)',
    },

    skillsName: {
        color: colors.primary,
        fontFamily: fonts.jetbrains.bold,
        textAlign: 'center',
    },

})

export { styles };