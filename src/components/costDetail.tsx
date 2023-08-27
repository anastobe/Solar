import React from 'react'
import { Dimensions, FlatList, Platform, Pressable, ScrollView, Text, View, StyleSheet } from 'react-native'
import { Metrics } from '@/assets/metrics/metrics'
import theme from '@/assets/styles/theme'
import SafeScrollView from '@/components/safeScrollView'
import SettingHeader from '@/components/settingStackHeader'
import PasswordField from '@/components/passwordField'
import SelectRequirements from '@/components/selectRequirements'
import Button from '@/components/button'
import { FONT_FAMILY, RouteNames } from '@/constants'
import { useNavigation } from '@react-navigation/native'
import JobCardAppliancesDetail from '@/components/jobCardAppliancesDetail'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const CostDetail = ({...props}) => {

    const{ttlWatt, titleL, titleR} = props || {}
    

  return (
    <View>
        <View  style={[styles.cardContainer, { marginTop: 10 }]}>
 
 <View style={styles.cardThirdLine}>
   <Text style={styles.pakageHeading}>{titleL}</Text>
   <Text style={styles.pakageHeading}>{titleR}</Text>
 </View>
 <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }} >
 <View style={styles.cardFourthLineLeft}>
     <Text style={styles.widthTextAppL}>Cost:</Text>
     <Text style={styles.widthTextL}> 10000 $</Text>
 </View>
 </View>

 <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }} >
 <View style={styles.cardFourthLineLeft}>
     <Text style={styles.widthTextAppL}>Panels:</Text>
     <Text style={styles.widthTextL}> 10 panel</Text>
 </View>
 </View>

 <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }} >
 <View style={styles.cardFourthLineLeft}>
     <Text style={styles.widthTextAppL}>Battery:</Text>
     <Text style={styles.widthTextL}> 10 battery</Text>
 </View>
 </View>

 <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }} >
 <View style={styles.cardFourthLineLeft}>
     <Text style={styles.widthTextAppL}>Area:</Text>
     <Text style={styles.widthTextL}> 10 sq feet</Text>
 </View>
 </View>

 <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }} >
 <View style={styles.cardFourthLineLeft}>
     <Text style={styles.widthTextAppL}>Extra Cost:</Text>
     <Text style={styles.widthTextL}>2000 $</Text>
 </View>
 </View>

 <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }} >
 <View style={styles.cardFourthLineLeft}>
     <Text style={styles.widthTextAppL}>Total Watts:</Text>
     <Text style={styles.widthTextL}>{ttlWatt} watt</Text>
 </View>
 </View>

 <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }} >
 <View style={styles.cardFourthLineLeft}>
     <Text style={styles.widthTextAppL}>days for installation:</Text>
     <Text style={styles.widthTextL}> 1 days</Text>
 </View>
 </View>
   
</View>

    </View>
  )
}

const styles = StyleSheet.create({
    cardContainer: {
      width: screenWidth - 30,
      backgroundColor: "#f4f4f4",
      borderRadius: 10,
      alignSelf: 'center',
      justifyContent: 'center',
      padding: 15,
      overflow: 'hidden',
      marginBottom: 14,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
    },
    cardThirdLine: {
      marginVertical: 10,
      flexDirection: "row",
      justifyContent: "space-between"
    },
    pakageHeading: {
      fontSize: 16,
      color: '#14195A',
    },
    cardFourthLineLeft: {
      flexDirection: 'row',
      marginVertical: 2,
      width: screenWidth - 60,
      justifyContent: 'space-between'
    },
    widthTextAppL: {
      marginLeft: 10,
      fontSize: 16,
      fontFamily: FONT_FAMILY.MontserratSemiBold
    },
    widthTextL: {
      marginRight: 10,
      fontSize: 16,
      fontFamily: FONT_FAMILY.MontserratSemiBold
    },
  
   
  });

export default CostDetail