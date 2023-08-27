import React, { useEffect, useState, useRef } from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  StatusBar,
  PermissionsAndroid,
  Image,
  Text,
  TextInput,
  Button,
  Linking,
  Alert
} from 'react-native';
import Geolocation from 'react-native-geolocation-service'
import MapViewcomponent from '@/components/mapviewcomponent';
import { useNavigation } from '@react-navigation/native';
import styles from '@/assets/styles/chatstyles/msgjobflowstyle';
import { FONT_FAMILY } from '@/constants/fontFamily';
import { PERMISSIONS, request } from 'react-native-permissions';
import SettingHeader from '@/components/settingStackHeader';

const Sharelocation = ({ ...props }) => {

  const forwardlog = props?.route?.params?.forward
  const navigation = useNavigation()

  // useEffect(() => {
  //   if (Platform.OS == "ios") {
  //     IosPerHandler()
  //   } else if (Platform.OS == "android") {
  //     AndroidPerHandler()
  //   }
  // }, []);

  // const IosPerHandler = () => {


  //   request(PERMISSIONS.IOS.PHOTO_LIBRARY)
  //     .then((result) => {
  //       if (result == 'granted' || result == 'limited') {
  //         navigation.navigate('Sharelocation')
  //       } else {
  //         Alert.alert('', "Please Give Permissions",
  //           [
  //             {
  //               text: "Cancel", onPress: () => {
  //                 navigation.goBack()
  //               }
  //             },
  //             {
  //               text: "Yes", onPress: () => {
  //                 Linking.openSettings()
  //               }
  //             },
  //           ]);

  //       }

  //     })
  //     .catch(err => {
  //       console.log("==>", err);
  //     })
  // }

  // const AndroidPerHandler = async () => {

  //   request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
  //     .then((result) => {

  //       if (result == 'granted') {

  //         navigation.navigate('Sharelocation')

  //       } else {

  //         Alert.alert('', "Please Give Permissions",
  //           [
  //             {
  //               text: "Cancel", onPress: () => {
  //                 navigation.goBack()
  //               }
  //             },
  //             {
  //               text: "Yes", onPress: () => {
  //                 Linking.openSettings()
  //               }
  //             },
  //           ]);

  //       }

  //     })
  //     .catch(err => {
  //       alert(err)
  //     })

  // }

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar barStyle={"dark-content"} backgroundColor='white' />
      <View style={{ marginHorizontal: 16, marginBottom: 15 }}>
        {/* <View style={styles.locationviewe}>
          <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
            <TouchableOpacity style={{ width: 22, justifyContent: "center" }} onPress={() => navigation.goBack()}>
              <Image style={{ tintColor: "#090A0A", width: 14, height: 12 }} source={require('@/assets/images/arrowleft.png')} />
            </TouchableOpacity>
            <Text style={{ fontFamily: FONT_FAMILY.InterBold, color: "#090A0A", fontSize: 16, marginLeft: -10 }}>Location</Text>
            <Text style={{ color: "#fff" }}>.</Text>
          </View>
        </View> */}

        <SettingHeader name="Location" onPress={() => navigation.goBack()} />
      </View>
      <MapViewcomponent forwardlog={forwardlog} />
    </SafeAreaView>
  );
}

export default Sharelocation;