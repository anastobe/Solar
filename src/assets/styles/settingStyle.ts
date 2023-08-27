import { FONT_FAMILY } from "@/constants/index";
import { Dimensions, StyleSheet } from "react-native";
const screenwidth = Dimensions.get('window').width;

export default StyleSheet.create({
    //Setting
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: 'white'
    },
    topView: {
        flexDirection: 'row',
        marginTop: 18,
        justifyContent: 'space-between',
    },
    settingText: {
        fontFamily: FONT_FAMILY.InterBold,
        fontSize: 16,
        lineHeight: 26,
        color: '#090A0A',
    },


    imgMainContainer: {
        alignItems: 'center',
        marginTop: 24
    },
    imgContainer: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E3E5E6',
        width: 30,
        height: 30,
        borderRadius: 36,
        marginTop: -30,
        marginLeft: 65
    },
    camera: {
        width: 13,
        height: 13,
        alignSelf: 'center',
        marginVertical: 6,
        tintColor: '#0760F0'
    },
    personName: {
        fontFamily: FONT_FAMILY.InterBold,
        fontSize: 18,
        color: '#090A0A'
    },
    rating: {
        flexDirection: 'row',
        marginTop: 5,
    },
    rateText: {
        fontFamily: FONT_FAMILY.InterMedium,
        fontSize: 14,
        color: '#090A0A'
    },
    accText: {
        fontSize: 16,
        color: '#090A0A',
        fontFamily: FONT_FAMILY.InterBold,
        marginTop: 28,
        marginBottom: 8
    },
    flatlistData: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 56,
        // marginTop: 16,
        // marginBottom: 20,
        alignItems: "center"
    },
    flatlistText: {
        fontFamily: FONT_FAMILY.InterRegular,
        fontSize: 14,
        lineHeight: 20,
        // marginVertical: 15,
        marginLeft: 12,
        color: '#090A0A'
    },
    flatlistLngText: {
        position: 'absolute',
        left: 55,
        fontFamily: FONT_FAMILY.InterRegular,
        fontSize: 14,
        lineHeight: 24,
        color: '#090A0A'
    },
    lngSelection: {
        borderWidth: 1, 
        width: 25, 
        height: 25, 
        borderRadius: 15, 
        marginVertical: 5, 
        marginHorizontal: 10
    },
    innerCircle: { 
        width: 14, 
        height: 14, 
        alignSelf: 'center', 
        marginVertical: 4.5 
    },
    lngBar: {
        width: '100%',
        borderWidth: 0.5,
        borderColor: '#E5E5E5',
        marginTop: 2,
        marginBottom: 1
    },
    linkBtn: {
        // width: '100%',
        // padding: 20,
        height: 56,
        backgroundColor: '#0760F010',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        // marginVertical: 14
    },
    linkContainer: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    linkText: {
        color: '#0760F0',
        fontFamily: FONT_FAMILY.InterBold,
        fontSize: 14,
        marginHorizontal: 10,
        marginTop: 2,
        opacity: 1
    },
    logoutBtn: {
        // width: '100%',
        // padding: 20,
        height: 56,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 14,
        backgroundColor: '#FF4A4A10',
        borderRadius: 8,
        flexDirection: 'row',
    },
    logoutContainer: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    logoutText: {
        color: '#FF4A4A',
        fontFamily: FONT_FAMILY.InterBold,
        fontSize: 14,
        opacity: 1,
        marginHorizontal: 10,
        textAlign: 'center'
    },

    //Review
    reviewContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 18
    },
    reviewHeading: {
        fontFamily: FONT_FAMILY.InterBold,
        fontSize: 16,
        color: '#090A0A',
        marginLeft: 100
    },
    reviewRank: {
        fontFamily: FONT_FAMILY.InterMedium,
        fontSize: 14,
        color: '#090A0A',
    },
    barStyle: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#E5E5E5',
        marginTop: 10,
        marginBottom: 16
    },
    review: {
        flexDirection: 'row',
    },
    text: {
        fontFamily: FONT_FAMILY.InterRegular,
        fontSize: 14,
        color: '#72777A',
        marginTop: 10
    },
    headingName: {
        fontFamily: FONT_FAMILY.InterSemiBold,
        color: '#090A0A',
        fontSize: 14,
        marginLeft: 12,
        marginTop: 3
    },

    //Profile
    profileContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    profileText: {
        fontFamily: FONT_FAMILY.InterBold,
        fontSize: 16,
        color: 'black'
    },
    editContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    editButton: {
        flexDirection: 'row',
        borderWidth: 1,
        width: '100%',
        borderRadius: 8,
        height: 56,
        borderColor: '#0760F0',
        position: 'absolute',
        bottom: 30,
        alignItems: 'center'
    },
    editIcon: {
        width: 18,
        height: 18,
        // marginLeft: 120
    },
    editText: {
        fontFamily: FONT_FAMILY.InterBold,
        fontSize: 14,
        color: '#0760F0',
        textAlign: 'center',
        left: 10
    },
    edit: {
        fontFamily: FONT_FAMILY.InterBold,
        fontSize: 14,
        color: '#0760F0',
        marginLeft: 10
    },
    editProfileContainer: {
        flex: 1,
        // marginHorizontal: 10,
        backgroundColor: 'white'
    },
    saveButton: {
        flexDirection: 'row',
        width: '100%',
        padding: 20,
        borderRadius: 8,
        backgroundColor: '#0760F0',
        position: 'absolute',
        bottom: 10,
    },
    saveText: {
        fontWeight: '500',
        fontSize: 15,
        color: 'white',
        textAlign: 'center',
        left: 100
    },
    editPwdContainer: {
        flex: 1,
        marginHorizontal: 16
    },

    // Contract
    contractContainer: {
        flex: 1,
        // marginHorizontal: 10,
        backgroundColor: 'white'
    },
    total: {
        color: '#0760F0',
        fontFamily: FONT_FAMILY.InterBold,
        fontSize: 16,
        alignSelf: 'flex-end',
        marginTop: 16,
        marginBottom: 3
    },
    runningContractText: {
        fontFamily: FONT_FAMILY.InterBold,
        fontSize: 16,
        color: '#090A0A',
        marginBottom: 12
    },
    completedContractText: {
        fontFamily: FONT_FAMILY.InterBold,
        fontSize: 16,
        color: '#090A0A',
        marginTop: 15,
        marginBottom: 12
    },
    runningContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#0760F015',
        borderRadius: 8,
        height: 84
    },
    promotionText: {
        fontFamily: FONT_FAMILY.InterMedium,
        fontSize: 16,
        color: '#090A0A',
    },
    nameText: {
        fontFamily: FONT_FAMILY.InterRegular,
        fontSize: 14,
        color: '#090A0A',
        marginTop: 5
    },
    priceText: {
        fontFamily: FONT_FAMILY.InterMedium,
        fontSize: 16,
        color: '#090A0A',
    },
    dateText: {
        fontFamily: FONT_FAMILY.InterRegular,
        fontSize: 14,
        color: '#090A0A',
        marginTop: 5,
        marginRight: 10
    },
    runningContainerFlatList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F2F4F5',
        borderRadius: 8,
        height: 84,
        marginBottom: 20
    },
    promotionTextFlatList: {
        fontFamily: FONT_FAMILY.InterMedium,
        fontSize: 16,
        color: '#090A0A',
    },
    nameTextFlatList: {
        fontFamily: FONT_FAMILY.InterRegular,
        fontSize: 14,
        color: '#090A0A',
    },
    priceTextFlatList: {
        fontFamily: FONT_FAMILY.InterMedium,
        fontSize: 16,
        color: '#090A0A',
    },
    dateTextFlatList: {
        fontFamily: FONT_FAMILY.InterRegular,
        fontSize: 14,
        color: '#090A0A',
        marginTop: 5
    },

    //ShowContract
    ShowContractContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    msgImage: {
        width: 32,
        height: 32,
        borderRadius: 50,
        marginTop: 32,
        backgroundColor: 'white'
    },
    dotImage: {
        width: 32,
        height: 32,
        borderRadius: 50,
        backgroundColor: 'white',
        marginRight: 10,
        marginTop: 32,
        zIndex: 1
    },
    contractName: {
        fontFamily: FONT_FAMILY.InterSemiBold,
        fontSize: 14,
        color: 'white',
        marginTop: 24
    },
    contractNameModal: {
        fontFamily: FONT_FAMILY.InterSemiBold,
        fontSize: 14,
        color: '#090A0A',
    },
    contractFollowersModal: {
        fontFamily: FONT_FAMILY.InterSemiBold,
        fontSize: 14,
        color: '#090A0A'
    },
    contractFollowers: {
        fontFamily: FONT_FAMILY.InterRegular,
        fontSize: 14,
        color: 'white',
        marginVertical: 7
    },
    promotionVideoText: {
        color: 'white',
        fontFamily: FONT_FAMILY.InterSemiBold,
        fontSize: 18,
    },
    contractDate: {
        color: 'white',
        fontFamily: FONT_FAMILY.InterRegular,
        fontSize: 14,
        marginTop: 7,
        marginBottom: 13
    },
    contractAmount: {
        color: 'white',
        fontFamily: FONT_FAMILY.InterBold,
        fontSize: 20,
    },
    contractVisit: {
        color: 'white',
        fontFamily: FONT_FAMILY.InterBold,
        fontSize: 12,
        textAlign: 'center',
        marginVertical: 7
    },
    visitBtn: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        // padding: 10,
        width: 86,
        height: 32,
        borderRadius: 8,
    },
    refundedText: {
        alignItems: 'center',
        marginVertical: 5,
        padding: 4,
        backgroundColor: 'white',
        borderRadius: 20,
        height: 20,
        marginLeft: 20
    },
    refundedTxt: {
        fontFamily: FONT_FAMILY.InterMedium,  
        fontSize: 9, 
        justifyContent: 'center', 
        alignSelf: 'center', 
        color: '#090A0A'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    mainModalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
        backgroundColor: '#0760F020',
        padding: 15,
        borderRadius: 12,
    },
    topModal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        position: 'absolute'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 8,
        padding: 10,
        borderWidth: 2,
        borderColor: 'transparent',
    },
    modalText: {
        color: '#EA1D25',
    },
    textStyle: {
        lineHeight: 26,
        fontFamily: FONT_FAMILY.InterRegular,
        fontSize: 16,
        color: '#090A0A',
        textAlign: 'center'
    },
    amountModal: {
        textAlign: 'center',
        fontFamily: FONT_FAMILY.InterBold,
        fontSize: 20,
        color: '#090A0A',
        marginTop: 10,
        marginBottom: 22
    },
    declineButton: {
        backgroundColor: '#FF4A4A',
        borderWidth: 2,
        borderRadius: 8,
        padding: 15,
        fontFamily: FONT_FAMILY.InterBold,
        fontSize: 14,
        width: '45%',
        borderColor: 'transparent',
        marginHorizontal: 10
    },
    confirmButton: {
        backgroundColor: '#0760F0',
        borderWidth: 2,
        borderRadius: 8,
        padding: 15,
        width: '45%',
        fontFamily: FONT_FAMILY.InterBold,
        fontSize: 14,
        borderColor: 'transparent'
    },
    MainView: {
        backgroundColor: "#FFFFFF",
        // opacity: 1,
        width: 162,
        height: 114,
        borderRadius: 8,
        position: "absolute",
        top: 75,
        right: 6,
    },
    editIcons: {
        tintColor: "#FFFFFF",
        position: "absolute",
        zIndex: 5,
        width: 20,
        height: 20,
        right: 10,
        top: 2,
        marginTop: -10,
        borderColor: 'white'
    },
    opacityView: {
        borderBottomWidth: 1,
        paddingTop: 16,
        marginLeft: 17,
        height: 33,
        borderBottomColor: "#E3E5E6",
        backgroundColor: "red"
    },
    img: {
        width: 16,
        height: 16,
        alignSelf: "center"
    },
    txt: {
        color: "#090A0A",
        fontSize: 14,
        top: 4,
        fontFamily: FONT_FAMILY.InterMedium,
        marginHorizontal: 6,
    },
    paymentModal: {
        height: 100,
        width: 343,
        backgroundColor: 'white',
        borderRadius: 12,
        alignItems: 'center',
        // justifyContent: 'center'
    },
    paymentModalText: {
        fontFamily:  FONT_FAMILY.InterRegular,
        fontSize: 16,
        lineHeight: 26,
        marginTop: 5,
        color: '#090A0A',
        textAlign: 'center',
        width: 316
    },
    feedbackText: {
        fontFamily: FONT_FAMILY.InterBold,
        fontSize: 14,
        lineHeight: 24,
        color: '#090A0A',
    },
    feedbackTextTwo: {
        fontFamily: FONT_FAMILY.InterRegular,
        fontSize: 14,
        lineHeight: 24,
        color: '#72777A',
    },

    //Payment
    paymentContainer: {
        flex: 1,
        // marginHorizontal: 10
    },
    Paymentcard: {
        backgroundColor: '#0760F0',
        padding: 20,
        borderRadius: 8,
        height: 184,
        marginVertical: 24
    },
    masterCardIcon: {
        width: 38,
        height: 22,
        alignSelf: 'flex-end',
        resizeMode: 'contain',
    },
    cardText: {
        fontFamily: FONT_FAMILY.InterBold,
        fontSize: 16,
        color: '#090A0A',
        marginTop: 24,
        marginHorizontal: 16
    },
    cardNo: {
        color: 'white',
        fontFamily: FONT_FAMILY.InterBold,
        fontSize: 20,
        marginTop: 28
    },
    cardHolder: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontFamily: FONT_FAMILY.InterRegular,
        fontSize: 12,
        marginBottom: 4
    },
    cardExp: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontFamily: FONT_FAMILY.InterRegular,
        fontSize: 12,
        marginBottom: 4
    },
    cardName: {
        color: 'white',
        fontFamily: FONT_FAMILY.InterSemiBold,
        fontSize: 12,
    },
    cardExpDate: {
        color: 'white',
        fontFamily: FONT_FAMILY.InterSemiBold,
        fontSize: 12,
    },
    cardChip: {
        width: 32,
        height: 25
    },
    delIcon: {
        width: 20,
        height: 20,
        alignSelf: 'flex-end',
        tintColor: 'black',
        marginTop: -5,
    },
    delView: {
        flexDirection: 'row',
        marginTop: -13,
        justifyContent: 'space-between'
    },
    newCardHeading: {
        fontFamily: FONT_FAMILY.InterBold,
        fontSize: 16,
        color: 'black'
    },
    cardTypeHeading: {
        fontFamily: FONT_FAMILY.InterRegular,
        fontSize: 14,
        color: '#72777A',
        lineHeight: 24,
        marginTop: 16,
        // backgroundColor: "red"
    },
    toggleButton: {
        flexDirection: 'row',
        marginTop: 8,
        marginBottom: 24
    },
    visaButton: {
        textAlign: 'center',
        // padding: 10,
        marginVertical: 10,
        marginHorizontal: 7,
        fontFamily: FONT_FAMILY.InterBold,
        fontSize: 14,
    },
    visaIcon: {
        width: 20,
        height: 40,
        tintColor: 'white'
    },
    masterButton: {
        textAlign: 'center',
        // marginVertical: 15,
        // marginLeft: 14,
        lineHeight: 24,
        borderRadius: 8,
        fontFamily: FONT_FAMILY.InterRegular,
        fontSize: 14,
    },
    Button: {
        backgroundColor: '#0760F0',
        height: 56,
        marginVertical: 10,
        borderRadius: 8,
    },
    ButtonText: {
        color: 'white',
        fontSize: 15,
        marginVertical: 18,
        textAlign: 'center',
        fontFamily: FONT_FAMILY.InterBold,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 8,
        padding: 10,
        borderWidth: 2,
        borderColor: 'transparent',
    },
    deleteButton: {
        backgroundColor: '#FF4A4A',
        borderWidth: 2,
        borderRadius: 8,
        // padding: 10,
        height: 48,
        justifyContent: "center",
        width: screenwidth / 2 - 39,
        borderColor: 'transparent',
        marginHorizontal: 10
    },
    cancelButton: {
        backgroundColor: '#0760F0',
        borderWidth: 2,
        borderRadius: 8,
        // padding: 10,
        height: 48,
        justifyContent: "center",
        width: screenwidth / 2 - 23,
        borderColor: 'transparent'
    },
    btnShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: 'white',
        // height: 80,
        width: '100%'
    },

    //Legal
    LegalContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    LegalContainerList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    legalText: {
        fontFamily: FONT_FAMILY.InterSemiBold,
        fontSize: 16,
        color: 'black',
        marginTop: 31,
        marginBottom: 13
    },
    LngContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    lngText: {
        fontFamily: FONT_FAMILY.InterSemiBold,
        fontSize: 16,
        color: 'black',
        marginTop: 0,
    }
})