import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import theme from '@/assets/styles/theme';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import { FONT_FAMILY } from '@/constants';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const JobCardAppliancesDetail = (item) => {

  const {    
    data,
    marginTop,
    pakageHeading,
    paymentView
  } = item || {}

  console.log("00000---000",data);
  

  return (
    <View style={[styles.cardContainer, { marginTop: marginTop }]}>
 
      <View style={styles.cardThirdLine}>
        <Text style={styles.pakageHeading}>{pakageHeading}</Text>
      </View>
      
      {paymentView ? 
      <View>
            <View style={styles.cardFourthLineLeft}>
              <Text style={styles.widthTextAppL}>Area</Text> 
              <Text style={styles.widthTextL}>{data?.packageList?.area} sq-feet</Text>
            </View>

            <View style={styles.cardFourthLineLeft}>
              <Text style={styles.widthTextAppL}>Battery</Text> 
              <Text style={styles.widthTextL}>{data?.packageList?.battery}.</Text>
            </View>

            <View style={styles.cardFourthLineLeft}>
              <Text style={styles.widthTextAppL}>days For Instalation</Text> 
              <Text style={styles.widthTextL}>{data?.packageList?.daysForInstalation}.</Text>
            </View>

            <View style={styles.cardFourthLineLeft}>
              <Text style={styles.widthTextAppL}>extraExpense</Text> 
              <Text style={styles.widthTextL}>{data?.packageList?.extraExpense}.</Text>
            </View>

            <View style={styles.cardFourthLineLeft}>
              <Text style={styles.widthTextAppL}>no of Panels</Text> 
              <Text style={styles.widthTextL}>{data?.packageList?.noofpanels}.</Text>
            </View>

            <View style={styles.cardFourthLineLeft}>
              <Text style={styles.widthTextAppL}>Price</Text> 
              <Text style={styles.widthTextL}>{data?.packageList?.price}.</Text>
            </View>

            <View style={styles.cardFourthLineLeft}>
              <Text style={styles.widthTextAppL}>total Watts</Text> 
              <Text style={styles.widthTextL}>{data?.packageList?.ttklWatts}.</Text>
            </View>
        </View>
      : 
      <View>
      {data && data.map((e)=>{
      if (e.applianceCount > 0) {
        return(
          <View style={styles.txtCont} >
            <View style={styles.cardFourthLineLeft}>
              <Text style={styles.widthTextAppL}>( {e.applianceCount} ) {e.applianceName}:</Text> 
              <Text style={styles.widthTextL}>Total Watt: {e.totalwattofthisAppliance}</Text>
            </View>
          </View>
          )
          }
        })}
      </View>
      }
        
    </View>
  );
};

export default JobCardAppliancesDetail;

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
  budget: {
    fontSize: 16,
    width: 80,
    color: '#14195A',
  },
  pakageHeading: {
    fontSize: 16,
    color: '#14195A',
  },
  dropoff: {
    color: "black",
    fontSize: 15,
    width: '43%'
  },
  cardSecondLine: {
    flexDirection: 'row',
    marginVertical: 9,
    marginTop: 15,
  },
  cardThirdLine: {
    marginVertical: 10
  },
  txtCont: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    marginTop: 10 
  },
  cardFourthLineLeft: {
    flexDirection: 'row',
    marginVertical: 2,
    width: screenWidth - 50,
    justifyContent: 'space-between'
  },
  cardFourthLineRight:{
    flexDirection: 'row',
    marginVertical: 2,
    width: screenWidth / 2 - 40,
    justifyContent: 'space-between'
  },
  widthContainer: {
    flexDirection: 'row',
    marginRight: 30,
  },
  widthTextAppL: {
    marginLeft: 10,
    fontSize: 12,
    fontFamily: FONT_FAMILY.MontserratSemiBold
  },
  widthTextAppR: {
    marginLeft: 10,
    fontSize: 12,
    fontFamily: FONT_FAMILY.MontserratSemiBold
  },
  widthTextL: {
    marginRight: 10,
    fontSize: 12,
    fontFamily: FONT_FAMILY.MontserratSemiBold
  },
  widthTextR: {
    marginRight: 10,
    fontSize: 12,
    fontFamily: FONT_FAMILY.MontserratSemiBold
  },
  weightContainer: {
    flexDirection: 'row',
  },
  seemoretTxt: { 
    alignSelf: "center", 
    fontSize: 16, 
    textDecorationLine: "underline", 
    fontFamily: FONT_FAMILY.MontserratSemiBold, 
    marginVertical: 5 
  },
  sampleCardImage: {
    alignSelf: 'center',
    marginTop: 28,
    marginBottom: 28,
    width: '90%',
    height: '25%'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: 355,
    height: 60,
    position: 'absolute',
    bottom: 0,
  },
  acceptButton: {
    backgroundColor: "black",
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  rejectButton: {
    backgroundColor: '#CFF5FF',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 17,
    marginLeft: 10,
    fontWeight: '500',
  },
});
