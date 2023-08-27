import { FONT_FAMILY } from "@/constants"
import { StyleSheet } from "react-native"
import {Metrics} from '@/assets/metrics/metrics';
import theme from '@/assets/styles/theme';

export default StyleSheet.create({
    subContainer:{
        marginHorizontal: 20
    },
    headerView: {
        marginTop: 24
    },
    txtStyle: {
        fontSize: 16, 
        textAlign: "center",
        fontFamily: FONT_FAMILY.MontserratSemiBold, 
        color: theme.black, 
        marginTop: 19, 
        alignSelf: "center"
    },
    btnCont: {
        width: Metrics.width - (51+51), 
        alignSelf: "center", 
        marginTop: 18, 
        marginBottom: 180
    },
    itemCont:{
        marginTop: 14
    },
    headingTxt:{
        color: theme.lightgrey, 
        fontSize: 13, 
        fontFamily: FONT_FAMILY.MontserratMedium 
    },
    valueTxt:{
        color: theme.black, 
        fontSize: 18, 
        fontFamily: FONT_FAMILY.MontserratSemiBold,
        marginTop: 8 
    },
    iconCont:{
        position: "absolute", 
        // backgroundColor: "red",
        right: 7, 
        top: 17, 
        resizeMode: "contain" 
    },
    rowSty:{
        borderBottomColor: theme.disablegrey, 
        borderBottomWidth: 1 ,
        width: "100%", 
        height: 1, 
        marginTop: 8.7 
    }
    
    
})
