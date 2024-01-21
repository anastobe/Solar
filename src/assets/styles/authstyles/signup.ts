import { FONT_FAMILY } from "@/constants/index";
import { StatusBar, StyleSheet } from "react-native";

export default StyleSheet.create({

    orButton: {
        textAlign: 'center',
        fontSize: 14,
        color: '#72777A',
        fontFamily: FONT_FAMILY.InterRegular,
    },
    optTxt:{
        textAlign: 'center',
        fontSize: 16,
        color: '#000',
        fontFamily: FONT_FAMILY.InterRegular,
    },
    signUpHeading: {
        color: 'black',
        fontFamily: FONT_FAMILY.InterBold,
        fontStyle: 'normal',
        fontSize: 24,
        marginTop: 60,
    },
    signUpSubHeading: {
        fontFamily: FONT_FAMILY.InterRegular,
        fontSize: 14,
        marginTop: 8,
        marginBottom: 30,
        color: '#72777A'
    },
    alreadyAccount: {
        flexDirection: "row",
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    checkBox: {
        flexDirection: "row",
    },
    checkBoxText: {
        width: 306,
        height: 48,
        fontSize: 12,
        fontFamily: FONT_FAMILY.InterRegular,
        color: '#090A0A',
        marginBottom: 12
    }, 
});