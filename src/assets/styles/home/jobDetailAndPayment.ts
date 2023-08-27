import { FONT_FAMILY } from "@/constants/index"
import { StyleSheet } from "react-native"
import { Metrics } from "@/assets/metrics/metrics"
import theme from "@/assets/styles/theme"

export default StyleSheet.create({
    subContainer:{
        marginHorizontal: 20,
        marginTop: 2
    },
    headerView: {
        marginTop: 24,
        marginBottom: 14
    },
    schCont:{
        width: 55, 
        height: 67, 
        marginRight: 10, 
        borderRadius: 24, 
        justifyContent: "center", 
        alignItems: "center"
    },
    schtxtDate:{
        fontSize: 16, 
        fontFamily: FONT_FAMILY.MontserratSemiBold
    },
    schtxtname: { 
        fontSize: 11, 
        fontFamily: FONT_FAMILY.MontserratSemiBold
    },
    appoTxtdate: { 
        marginTop: 14, 
        color: theme.darkGrey2, 
        fontFamily: FONT_FAMILY.MontserratBold 
    },
    appoName:{
        height: 118, 
        marginTop: 16.6, 
        borderRadius: 29, 
        justifyContent: "center" 
    },
    appoiImg:{
        width: 20, 
        height: 10, 
        justifyContent: "center", 
        alignItems: "center", 
        position: "absolute", 
        right: 20, 
        top: 16 
    },
    appoiSubImg:{
        width: 18, 
        height: 19, 
        resizeMode: "contain" 
    },
    appoiImgContainer:{
        flexDirection: "row", 
        marginLeft: 17 
    },
    userImgApp:{
        width: 63, 
        height: 60
    },
    usersubImgApp:{
        width: 63, 
        height: 60,
        borderRadius: 21 
    },
    rightCont:{
        marginLeft: 18,
        flexDirection: "row",
        justifyContent: "space-between",
        width: Metrics.width - 155
    },
    txtTime: { 
        fontSize: 15, 
        fontFamily: FONT_FAMILY.MontserratRegular,
    },
    txtName:{ 
        fontSize: 20, 
        fontFamily: FONT_FAMILY.MontserratRegular, 
        width: Metrics.width - 200
    },
    txtType:{ 
        fontSize: 12, 
        fontFamily: FONT_FAMILY.MontserratRegular,
    },
    dollCont: { 
        marginTop: 20, 
        position: "absolute", 
        bottom: 0, 
        right: 0
    },
    imgCont: { 
        width: 32, 
        height: 22, 
        resizeMode: "contain" 
    },
    txtDoll: {
        fontFamily: FONT_FAMILY.MontserratSemiBold, 
        fontSize: 12.5, 
        top: 3,
    }
    
})