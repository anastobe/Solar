import {FONT_FAMILY} from '@/constants/index';
import {Dimensions, StyleSheet} from 'react-native';
import theme from './theme';

let screenWidth = Math.round(Dimensions.get('window').width);
let screenHeight = Math.round(Dimensions.get('window').height);

export const general_style = StyleSheet.create({
    
screen_container: {
    flex: 1, 
    backgroundColor: theme.white
},

//Bold
font28Bold: {
    fontSize: 28,
    fontFamily: FONT_FAMILY.MontserratBold,
},

//semi
font20Semi:{
    fontSize: 20,
    fontFamily: FONT_FAMILY.MontserratSemiBold,
},
font24Semi:{
    fontSize: 24,
    fontFamily: FONT_FAMILY.MontserratSemiBold,
},

//Regular
font14Reg:{
    fontSize: 14,
    fontFamily: FONT_FAMILY.MontserratRegular,
    textAlign: 'center',
}


});