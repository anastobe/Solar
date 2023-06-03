import { Metrics } from "@/assets/metrics/metrics";
import { FONT_FAMILY } from "@/constants";
import { Platform, StyleSheet } from "react-native";
import theme from "../theme";

export default StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: theme.white
    },
    bgImage: {
        width: Metrics.width,
        height: 170,
        backgroundColor: "red"
    },
    logo: {
        width: 152,
        height: 80,
        alignSelf: 'center',
        marginTop: 50
    },
    welcomeTextView: {
        alignSelf: 'center'
    },
    welcomeText: {
        fontFamily: FONT_FAMILY.MontserratRegular,
        fontSize: 20,
        color: theme.black,
        backgroundColor: theme.white
    },
    loginContinueTextView: {
        alignSelf: 'center',
        marginTop: 9.8
    },
    loginContinueText: {
        fontFamily: FONT_FAMILY.MontserratMedium,
        fontSize: 14,
        color: theme.black,
        backgroundColor: theme.white
    },
    inputView: {
        marginHorizontal: 20,
        // marginTop: 20.78,
    },
    text: {
        marginLeft: 10,
        marginBottom: 8,
        fontFamily: FONT_FAMILY.MontserratSemiBold,
        color: theme.black
    },
    pwdImageView: { 
        position: "absolute", 
        right: 0 ,
        alignItems: "center", 
        width: 50, 
        height: 50, 
        justifyContent: 'center',
    },
    pwdImage: {
        width: 14,
        height: 14,
        resizeMode: 'contain',
    },
    forgotView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        // backgroundColor: "red",
        width: Metrics.width - 20 - 20, 
    },
    forgotText: {
        marginTop: 15,
        // marginLeft: 22,
        fontFamily: FONT_FAMILY.MontserratMedium,
        fontSize: 12,
        color: theme.lightblue,
    },
    rememberView: {
        flexDirection: 'row',
        // marginRight: 10
    },
    checkBtn: {
        borderWidth: 1,
        height: 18,
        width: 18,
        right: 5,
        marginLeft: 5,
        borderRadius: 4,
        marginTop: 12
    },
    tickBtn: {
        width: 14,
        height: 11,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginVertical: 2,
    },
    rememberText: {
        marginTop: 15,
        color: theme.darkgrey,
        fontFamily: FONT_FAMILY.MontserratMedium,
        fontSize: 12
    },
    loginUsingView: {
        alignSelf: 'center',
        marginTop: 10,
    },
    loginUsingText: {
        fontFamily: FONT_FAMILY.MontserratMedium,
        fontSize: 12,
        color: theme.darkgrey
    },
    bottomText: {
        fontFamily: FONT_FAMILY.MontserratBold,
        color: theme.darkgrey,
        fontSize: 12,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 30
    },
    bottomTextTwo: {
        fontFamily: FONT_FAMILY.MontserratBold,
        color: theme.lightblue,
        fontSize: 12,
        textDecorationLine: 'underline'
    },
    bottomView: {
        marginTop: 10,
        marginBottom: 20,
        alignSelf: 'center'
    }
})