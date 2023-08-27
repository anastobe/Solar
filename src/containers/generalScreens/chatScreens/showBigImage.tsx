import React,{useEffect, useState, useRef} from 'react';
import {
  View,
  TouchableOpacity,
  StatusBar,
  PermissionsAndroid , 
  Image,
  Text,
  TextInput,
  Button
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ifIphoneX } from 'react-native-iphone-x-helper';

const  ShowBigImage = ({...props}) => {

    const IMAGE = props?.route?.params?.pic
    const navigation = useNavigation();
  
    return (
        <View style={{ backgroundColor: "#000", flex: 1 }} > 
        <StatusBar backgroundColor={"#fff"}  barStyle={ Platform.OS == "ios" ? "light-content" : "dark-content"}  />
        <SafeAreaView>
        
        <TouchableOpacity activeOpacity={1} onPress={() => { navigation.goBack() }} style={{ position: "absolute", zIndex: 9999, top: ifIphoneX ? 45 : 20 , left: 5 }} >
          <Image source={require('@/assets/images/patient.png')} style={{ height: 20, width: 30, tintColor: "#fff", resizeMode: "contain"}} />
        </TouchableOpacity>

            <Image
              source={ typeof (IMAGE) == "number" ? IMAGE : { uri: IMAGE }}
              style={{with: '100%', height: '100%', resizeMode: "contain"}}
            />
 
        </SafeAreaView>
        </View>
      );
}

export default ShowBigImage;

