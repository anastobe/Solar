
import { Platform, StatusBar, StyleSheet } from "react-native";
import { FONT_FAMILY } from "@/constants";
import theme from "../theme";

export default StyleSheet.create({

    //Guide-1
    bgImage: {
        flex: 1,
    },
    logoView: {
        marginTop: 40,
        alignSelf: 'center', 
        backgroundColor: theme.white
    },
    logoImage: {
        width: 200,
        height: 120,
    },
    continueAsView: {
        marginTop: 21
    },
    continueAsText: {
        textAlign: 'center',
        fontFamily: FONT_FAMILY.MontserratRegular,
        color: theme.black,
        fontSize: 20,
        marginBottom: 20
    },
    flatlistGuide1View: {
        width: 250,
        height: 186,
        borderRadius: 60,
        alignSelf: 'center',
        backgroundColor: theme.white,
        marginTop: 5,
        marginBottom: 11,


        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: Platform.OS == "ios" ? 0.29 : 0.24,
        shadowRadius: Platform.OS == "ios" ? 1.77 : 2.22,
        
        elevation: 3,

//         shadowColor: "#000",
// shadowOffset: {
// 	width: 0,
// 	height: 2,
// },
// shadowOpacity: 0.23,
// shadowRadius: 2.62,

// elevation: 4,

    },
    flatlistGuide1ImageView: {
        alignSelf: 'center',
        marginTop: 41
    },
    flatlistGuide1Image: {
        resizeMode: 'contain'
    },
    flatlistGuide1TextView: {
        marginTop: 20
    },
    flatlistGuide1Text: {
        textAlign: 'center',
        fontFamily: FONT_FAMILY.MontserratSemiBold,
        color: theme.black,
        fontSize: 22
    },
    flatlistGuide1TickView: { 
        alignSelf: 'flex-end', 
        position: 'absolute', 
        bottom: -5 
    },
    flatlistGuide1TickIcon: {
        width: 28,
        height: 28, 
        marginRight: 10,
        backgroundColor: theme.white,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: theme.black,
        borderWidth: 0.2
    },
    endTextView: {
        marginTop: 15,
        alignSelf: 'center',
        marginBottom: 20,
        backgroundColor: theme.white,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    influencerText: {
        fontFamily: FONT_FAMILY.MontserratBold,
        fontSize: 14,
        color: theme.darkgrey
    },
    loginText: {
        fontFamily: FONT_FAMILY.MontserratBold,
        fontSize: 14,
        color: theme.lightblue,
        textDecorationLine: 'underline'
    }
})