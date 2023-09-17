import React, { useEffect, useRef, useState } from 'react'
import { View, Text, Image, Pressable, TextInput, Button, FlatList, StatusBar, Modal, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons';

const CreditCard = ({...props}) => {

    const{
        onPress,
        cardPic,
        visaPic,
        masterPic,
        number,
        name,
        exp,
        cvv,
        chippic,
        onPressTrash,
        showBin,
        activOpacty,
        sectedInd,
        itemId

    } = props || {}

    console.log("saasassasa",itemId,"==",sectedInd);

    return (
      <TouchableOpacity
        activeOpacity={activOpacty}
        onPress={onPress}>
        <View style={[styles.Paymentcard,{ backgroundColor: itemId == sectedInd ? '#134AA4' : '#0760F0'  
        }]}>
          <ImageBackground
             style={{ height: 170 }}
            source={cardPic} >
            <Image
              source={ number[0] == "4" ? visaPic : masterPic}
              style={styles.masterCardIcon}
            />
            <Text style={styles.cardNo}>{number}</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 0,
              }}>
              <View style={styles.topBottomContainer}>
                <Text style={styles.cardHolder}>Card holder:</Text>
                <Text style={styles.cardName}>{name}</Text>
                <Text style={[styles.cardHolder,{ marginTop: 10 }]}>CVV:</Text>
                <Text style={styles.cardName}>{cvv}</Text>
              </View>
              <View style={styles.bottomContainer}>
                <Text style={styles.cardExp}>Expiry:</Text>
                <Text style={[styles.cardExpDate,{ width: 130 }]}  ellipsizeMode="tail" >{exp}</Text>
              </View>
              <View>
                <Image
                  source={chippic}
                  style={styles.cardChip}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
        {showBin ? <Pressable
          onPress={onPressTrash}>
          <Octicons
            style={{
              alignSelf: 'flex-end',
              width: 25,
              height: 25,
              marginTop: 5,
            }}
            name="trash"
            size={25}
            color="black"
          />
        </Pressable> : null}
      </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    //Payment
    paymentContainer: {
     flex: 1,
     marginHorizontal: 10
 },
 Paymentcard: {
     padding: 20,
     borderRadius: 8,
     height: 200,
     marginTop: 15
     // marginVertical:10
 },
 masterCardIcon: {
     width: 50,
     height: 22,
     resizeMode: "contain",
    //  tintColor: 'white',
     // backgroundColor: 'rgba(255,255,255,0.5)',
     alignSelf: 'flex-end'
 },
 cardText: {
     marginTop: 15,
     fontSize: 20,
     color: 'black',
     fontWeight: "600",
     textDecorationLine: "underline"
 },
 cardTextXtraStyle: {
     width: 150, 
     height: 35, 
     backgroundColor: "#0760F0", 
     color: "#fff" ,
     textAlign: "center", 
     borderRadius: 10, 
     paddingTop: 2 
 },
 cardNo: {
     color: 'white',
     fontSize: 20,
     fontWeight: "500",
     marginVertical: 19
 },
 cardHolder: {
     color: 'rgba(255, 255, 255, 0.5)',
     fontSize: 12
 },
 cardExp: {
     color: 'rgba(255, 255, 255, 0.5)',
     fontSize: 12
 },
 cardName: {
     color: 'white',
     fontSize: 12,
 },
 cardExpDate: {
     color: 'white',
     fontSize: 12,
 },
 cardChip: {
     width: 40,
     height: 40,
     resizeMode: "contain"
 },
 newCardHeading: {
     fontSize: 16,
     color: 'black'
 },
 cardTypeHeading: {
     fontSize: 14,
     color: '#72777A',
     lineHeight: 24,
     marginTop: 10
 },
 toggleButton: {
     flexDirection: 'row',
     marginVertical: 20
 },
 visaButton: {
     textAlign: 'center',
     padding: 10,
     width: 130,
     borderRadius: 8,
     marginHorizontal: 7,
     fontSize: 14,
     fontWeight: '700',
 },
 visaIcon: {
     width: 20,
     height: 40,
     tintColor: 'white'
 },
 masterButton: {
     textAlign: 'center',
     padding: 10,
     width: 130,
     borderRadius: 8,
     fontStyle: 'normal',
     fontSize: 14,
     fontWeight: '700',
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
 },
 centeredView: {
     flex: 1,
     justifyContent: "center",
     alignItems: "center",
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
     lineHeight: 44,
     fontSize: 16,
     color: 'black',
     textAlign: 'center'
 },
 deleteButton: {
     backgroundColor: '#FF4A4A',
     borderWidth: 2,
     borderRadius: 8,
     padding: 10,
     width: '45%',
     borderColor: 'transparent',
     marginHorizontal: 10
 },
 cancelButton: {
     backgroundColor: '#0760F0',
     borderWidth: 2,
     borderRadius: 8,
     padding: 10,
     width: '45%',
     borderColor: 'transparent'
 },
 
 
 });

 
export default CreditCard