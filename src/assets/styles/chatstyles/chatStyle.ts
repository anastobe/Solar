import { FONT_FAMILY } from "@/constants/index";
import { Dimensions, Platform, StyleSheet } from "react-native";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        backgroundColor: '#F2F4F5',
        borderColor: '#F2F4F5',
        borderRadius: 10,
        marginHorizontal: 10,
        height: 58,
        position: "absolute",
        bottom: 10,
        width: "95%"
    },
    inputContainerBottom:{
        flexDirection: 'row',
        backgroundColor: '#F2F4F5',
        borderColor: '#F2F4F5',
        borderRadius: 10,
        alignSelf: "center",
        width: screenWidth - 32,
        position: "absolute",
        bottom: 10,
    },
    inputText: {
        marginLeft: 16,
        fontSize: 15,
        width: screenWidth - 110 - 64,
        // backgroundColor: "red",
        // alignSelf: "center"
        marginVertical: Platform.OS === 'ios' ? 15 : null
    },
    inputTextBottom:{
        marginLeft: 16,
        fontSize: 15,
        width: screenWidth - 110 - 64,
        // backgroundColor: "red",
        // alignSelf: "center"
        marginVertical: Platform.OS === 'ios' ? 15 : null
    },
    clipIcon: {
        marginLeft: -15,
    },
    sendIcon: {
        borderRadius: 16,
        backgroundColor: '#0760F0',
        width: 32,
        height: 32,
    },
    sendIconInner: {
        width: 13.33,
        height: 13.33,
        tintColor: 'white',
        alignSelf: 'center',
        marginVertical: 10
    },

    // Header
    headerMainContainer: { 
        marginTop: 10, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginHorizontal: 16
    },
    headerProfileIcon: { 
        width: 46, 
        height: 46, 
        borderRadius: 50, 
    },
    headerStarImage: { 
        width: 14, 
        height: 14, 
        marginHorizontal: 8 
    },
    snapChatIcon: {
        borderColor: 'yellow',
        marginRight: 8,
    },
    headerName: {
        fontFamily: FONT_FAMILY.InterMedium,
        fontSize: 14,
        color: '#090A0A',
        fontStyle: 'normal',
        marginTop: 7
    },
    headerFollowers: {
        fontFamily: FONT_FAMILY.InterMedium,
        fontSize: 11,
        color: 'rgba(114, 119, 122, 0.71)'
    },
    lineImage: { 
        width: 1, 
        height: 16, 
        tintColor: '#E3E5E6', 
        marginLeft: 7 
    },
    headerRank: {
        fontFamily: FONT_FAMILY.InterMedium,
        fontSize: 11,
        color: '#090A0A'
    },

    //BottomSheet
    View:{
        borderBottomWidth:1,
        width:"100%",
        height:"33%",
        borderColor:"rgba(0, 0, 0, 0.3);",
        flexDirection:"row",
        padding:10
    },
    Image:{
        width:18,
        height:18,
        resizeMode:"contain",
        marginHorizontal:10,
        alignSelf:"center"
        
    
    },
    text:{
        color:"#090A0A",
        fontSize:18,
        fontWeight:"bold",
        marginHorizontal:10,
        alignSelf:"center"
    },
    // Messages
    LmessageContainer: {
        marginBottom: 20,
        marginLeft: '2%',
        flexDirection: 'row',
        width: '65%',
    },
    RmessageContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginHorizontal: 10,
        marginBottom: 20,
        marginLeft: 125,
    },
    RmsgTimeView: {
        justifyContent: 'flex-end',
        marginRight: 10,
    },
    LmsgTimeView: {
        justifyContent: 'flex-end',
        marginRight: 10,
    },
    LmessageTextContainer: {
        width: 'auto',
        padding: 10,
        borderRadius: 8,
        borderBottomLeftRadius: 0,
        backgroundColor: '#2DAE18'
    },
    ReportTextContainer: {
        width: 'auto',
        padding: 10,
        borderRadius: 8,
        borderBottomLeftRadius: 0,
        backgroundColor: '#F2F4F5'
    },
    RmessageTextContainer: {
        backgroundColor: '#0760F0',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        textAlign: 'center',
    },
    delTextContainer: {
        backgroundColor: '#F2F4F5',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        textAlign: 'center',
        padding: 10
    },
    LmsgText: {
        fontFamily: FONT_FAMILY.InterRegular,
        fontSize: 14,
        lineHeight: 20,
        color: '#FFFFFF'
    },
    RmsgText: {
        fontFamily: FONT_FAMILY.InterRegular,
        fontSize: 14,
        lineHeight: 20,
        padding: 10,
        color: 'white',
    },
    LmsgTime: {
        marginTop: 20,
        marginLeft: 5,
        fontSize: 12,
        fontFamily: FONT_FAMILY.InterRegular,
        color: '#72777A'
    },
    RmsgTime: {
        fontSize: 12,
        fontFamily: FONT_FAMILY.InterRegular,
        color: '#72777A'
    },
    paymentChatText: {
        textDecorationLine: 'underline',
        textAlign: 'center',
        fontFamily: FONT_FAMILY.InterRegular,
        fontSize: 12,
        color: '#72777A'
    },
    paymentChatTextTwo: {
        textDecorationLine: 'underline',
        textAlign: 'center',
        marginTop: 22,
        fontFamily: FONT_FAMILY.InterRegular,
        fontSize: 12,
        color: '#72777A'
    },

    // Hidden View
    hiddenView: {
        borderColor: '#0760F0',
        borderRadius: 8,
        borderWidth: 1,
        width: '90%',
        marginBottom: 20,
        marginHorizontal: 16
    },
    heading: {
        marginLeft: 18,
        marginTop: 5,
        color: '#0760F0',
        fontFamily: FONT_FAMILY.InterSemiBold,
        fontSize: 12,
    },
    info: {
        marginLeft: 18,
        marginRight: 10,
        lineHeight: 24,
        fontSize: 12,
        fontFamily: FONT_FAMILY.InterRegular,
        color: '#090A0A'
    },
    bottomText: {
        marginLeft: 18,
        lineHeight: 24,
        fontFamily: FONT_FAMILY.InterBold,
        fontSize: 12,
        color: '#0760F0'
    },
    bottomTime: {
        marginLeft: 10,
        lineHeight: 24,
        fontFamily: FONT_FAMILY.InterBold,
        fontSize: 12,
        color: '#090A0A'
    },
    RefundMsgContainer: {
        flexDirection: 'row',
        marginLeft: '58%',
        marginTop: 20
    },
    RefundmessageTextContainer: {
        width: 'auto',
        height: 42,
        padding: 10,
        borderRadius: 8,
        borderBottomRightRadius: 0,
        backgroundColor: '#FF4A4A',
    },
    RefundmsgText: {
        textAlign: 'center',
        fontFamily: FONT_FAMILY.InterRegular,
        fontSize: 14,
        lineHeight: 20,
        color: '#FFFFFF',
        borderWidth: 1,
        borderColor: 'transparent',
        borderBottomColor: 'white',
    },

    // RbSheet
    rbSheetContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rbSheetInput: {
        width: '100%',
        height: 100,
        borderColor: '#E3E5E5',
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 15
    },
    textOne: {
        fontFamily: FONT_FAMILY.InterBold,
        fontSize: 16,
        lineHeight: 26,
        color: '#090A0A'
    },
    texttwo:{
        fontFamily: FONT_FAMILY.InterBold,
        fontSize: 16,
        lineHeight: 24,
        color: '#090A0A'
    },
    reasonHeading: {
        fontFamily: FONT_FAMILY.InterRegular,
        fontSize: 14,
        lineHeight: 24,
        color: 'black'
    },
    chatFloating : {
        marginTop: 45 
    }
})