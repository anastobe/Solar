import React, { useState, useRef } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import styles from '@/assets/styles/msgjobflowstyle';
import SettingHeader from '@/components/settingStackHeader';
import { SafeAreaView } from 'react-native-safe-area-context';

const  Messagebox = () => {

  const navigation = useNavigation()

  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView style={styles.container}>

           <StatusBar barStyle={"dark-content"} backgroundColor='white'/>
           <View style={{marginHorizontal:16}}>
                   <StatusBar barStyle={"dark-content"} backgroundColor='white'/>
              
                   {/* <View style={styles.messageRow}>
                     <Image style={styles.arrowimage} source={require('@/assets/images/arrowleft.png')}/>
                      
                     <Text style={styles.messageTxt}>Messages</Text>
                     <View></View>
                  </View> */}

                  <SettingHeader name="Messages" onPress={() => navigation.goBack()} />

                  <View style={[styles.searchbar,{ marginTop: 24 }]}>
          <TextInput style={[styles.searchtxt,{  }]}
            placeholder="Search"
            placeholderTextColor={"#72777A"}
            value={searchText}
            onChangeText={(t) => setSearchText(t)}
          />
          <Image style={styles.searchimg} source={require('@/assets/images/search.png')} />

        </View>
                
                <View style={{ alignItems: 'center' }}>
                <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Userchat') }>
                  <Image resizeMode="contain" style={styles.chatimg} source={require('@/assets/images/chateimage/msg.png')}/>
                  </TouchableOpacity>

                  <View>
                  <Text style={styles.nomsg}>No Messages</Text>
                  </View>

                  <View>
                  <Text style={styles.msgempty}>Your message list is empty.</Text>
                  </View>

                  </View>


                     </View>

              
      </SafeAreaView>

    );
}



 


export default Messagebox;


// import { useNavigation } from '@react-navigation/native';
// import React, {useState, useEffect} from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   Button,
//   PermissionsAndroid,
//   Linking,
// } from 'react-native';
// import Geolocation from 'react-native-geolocation-service';



// // Function to get permission for location
// const requestLocationPermission = async () => {
//   try {
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//       {
//         title: 'Geolocation Permission',
//         message: 'Can we access your location?',
//         buttonNeutral: 'Ask Me Later',
//         buttonNegative: 'Cancel',
//         buttonPositive: 'OK',
//       },
//     );
//     console.log('granted', granted);
//     if (granted === 'granted') {
//       console.log('You can use Geolocation');
//       return true;
//     } else {
//       console.log('You cannot use Geolocation');
//       return false;
//     }
//   } catch (err) {
//     return false;
//   }
// };
// const App = () => {

// const navigation = useNavigation ()
//   // state to hold location
//   const [location, setLocation] = useState(false);
//   // function to check permissions and get Location

  
//   const getLocation = () => {
//     const result = requestLocationPermission();
//     result.then(res => {
//       console.log('res is:', res);
//       if (res) {
//         Geolocation.getCurrentPosition(
//           position => {
//             console.log(position);
//             setLocation(position);
//           },
//           error => {
//             // See error code charts below.
//             console.log(error.code, error.message);
//             setLocation(false);
//           },
//           {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
//         );
//       }
//     });
//     // console.log("hjgjjg",location);
//     console.log("seeeeeeend",sendLocation);
//   };
//   // Function to Send Location to twitter
//   const sendLocation = () => {
//     try {
//       if (location) {
//         const tweet = `latitude is ${location.coords.latitude} and longitude is ${location.coords.longitude}`;
        
//         // const url = `https://twitter.com/intent/tweet?text=${tweet}`;
//         // Linking.openURL(url);
//         // https://google.com/maps/?search=${tweet};
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <View style={styles.container}>
//       <Text>Welcome!</Text>
//       <View
//         style={{marginTop: 10, padding: 10, borderRadius: 10, width: '40%'}}>
//         <Button title="Get Location" onPress={getLocation} />
//       </View>
//       <Text>Latitude: {location ? location.coords.latitude : null}</Text>
//       <Text>Longitude: {location ? location.coords.longitude : null}</Text>
//       <View
//         style={{marginTop: 10, padding: 10, borderRadius: 10, width: '40%'}}>
//           {/* <Button title="Send Location" onPress={sendLocation}  /> */}
//         <Button title="Send Location" onPress={() =>{ navigation.navigate('Userchat'), sendLocation }}  />
//       </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// export default App;







