import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import theme from '@/assets/styles/theme';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import { FONT_FAMILY } from '@/constants';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const JobCard = (item) => {
  
  const navigation = useNavigation()

  const {    
    subHeading,
    marginTop,
    id,
    userImg,
    name,
    description,
    packageList,
    btnColor,
    btnTxt,
    onPress,
    showBtn
  } = item || {}


  return (
    <View key={id} style={[styles.cardContainer, { marginTop: marginTop }]}>
      <View style={styles.cardHeaderContainer}>
        <View style={{backgroundColor:'white', height:75, width:70, justifyContent: "center", alignItems: 'center', borderRadius: 10}}>
          <FastImage
            style={{ width: 60, height: 65 }}
            source={require("../assets/images/person.png")}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>

        <View style={styles.profileDataContainer}>
          <View style={styles.firstLine}>
            <Text style={styles.username}>{name}</Text>
            <Text style={styles.time}>
              12:30 pm
            </Text>
          </View>
          <View style={styles.thirdLine}>
            <Text style={styles.pickup}>
              {description}
            </Text>
          </View>
        </View>
      </View>
 
      <View style={styles.cardThirdLine}>
        <Text style={styles.pakageHeading}>{subHeading}</Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
      <View style={styles.cardFourthLineLeft}>
          <Text style={[styles.widthTextAppL,{ color: theme.black }]}>Cost of Panel Installation:</Text>
          <Text style={[styles.widthTextL,{ color: theme.black }]}>{packageList.price} PKR</Text>
      </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
      <View style={styles.cardFourthLineLeft}>
          <Text style={styles.widthTextAppL}>Total Watts:</Text>
          <Text style={styles.widthTextL}>{packageList.ttklWatts} WATT</Text>
      </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
      <View style={styles.cardFourthLineLeft}>
          <Text style={styles.widthTextAppL}>Total Panel:</Text>
          <Text style={styles.widthTextL}>{packageList.noofpanels} panel</Text>
      </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
      <View style={styles.cardFourthLineLeft}>
          <Text style={styles.widthTextAppL}>Extra Expense:</Text>
          <Text style={styles.widthTextL}>{packageList.extraExpense} PKR</Text>
      </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
      <View style={styles.cardFourthLineLeft}>
          <Text style={styles.widthTextAppL}>Number Of Days:</Text>
          <Text style={styles.widthTextL}>{packageList.daysForInstalation} days</Text>
      </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
      <View style={styles.cardFourthLineLeft}>
          <Text style={styles.widthTextAppL}>Number Of Batteries:</Text>
          <Text style={styles.widthTextL}>{packageList.battery} battery</Text>
      </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
      <View style={styles.cardFourthLineLeft}>
          <Text style={styles.widthTextAppL}>Area:</Text>
          <Text style={styles.widthTextL}>{packageList.battery} sq-feet</Text>
      </View>
      </View>

        {showBtn && <TouchableOpacity onPress={onPress} style={{ width: '100%', height: 60, backgroundColor: btnColor, borderRadius: 10, marginTop: 10, justifyContent: 'center', alignItems: 'center' }} >
          <Text style={[styles.buttonText, { color: 'white' }]}>{btnTxt}</Text>
        </TouchableOpacity>}
        
    </View>
  );
};

export default JobCard;

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
  profileDataContainer: {

  },
  cardHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  firstLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    // backgroundColor: "red",
    width: screenWidth - 130,
    alignItems: "center"
  },
  username: {
    color: '#14195A',
    fontSize: 20,
  },
  time: {
    fontSize: 12,
    color: theme.black,
    marginRight: 10
  },
  secondLine: {
    flexDirection: 'row',
    paddingLeft: 10,
    marginVertical: 3,
  },
  secondLineHeading: {
    width: 120,
    color: theme.black,
  },
  budget: {
    fontSize: 16,
    width: 80,
    color: '#14195A',
  },
  thirdLine: {
    flexDirection: 'row',
    paddingLeft: 10,
  },
  pakageHeading: {
    fontSize: 16,
    color: '#14195A',
  },
  pickup: {
    width: 120,
    color: "black",
    fontSize: 15,
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
  cardFourthLineLeft: {
    flexDirection: 'row',
    marginVertical: 2,
    width: screenWidth - 60,
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
    fontFamily: FONT_FAMILY.MontserratSemiBold,
    color: theme.black
  },
  widthTextAppR: {
    marginLeft: 10,
    fontSize: 12,
    fontFamily: FONT_FAMILY.MontserratSemiBold
  },
  widthTextL: {
    marginRight: 10,
    fontSize: 12,
    fontFamily: FONT_FAMILY.MontserratSemiBold,
    color: theme.black
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
