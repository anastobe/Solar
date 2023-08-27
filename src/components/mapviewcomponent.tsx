import React, { Component, useState, useRef, useEffect } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, Pressable } from 'react-native'
import MapView, { Callout, Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import RBSheet from 'react-native-raw-bottom-sheet';
import styles from '@/assets/styles/chatstyles/msgjobflowstyle';
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';

const MapViewcomponent = ({ ...props }) => {

  const coord = useSelector(({ userReducer }) => userReducer?.mapData);

  const navigation = useNavigation()
  const refRBSheet1 = useRef();
  const dispatch = useDispatch();
  const [coordinates, setCoordinates] = useState()
  const [region, setRegion] = useState();

  setTimeout(() => {
    console.log("----------",coord);
  }, 1000);


  useEffect(() => {

    console.log(coord?.forward, 'location pe wapis agya')
    setRegion(coord?.forward)
  }, [coord?.forward])

  const saveing_cordinate = (e) => {
    // console.log("====>",e?.nativeEvent?.coordinate)
    setRegion(e?.nativeEvent?.coordinate);
    refRBSheet1.current.open()
    setCoordinates(e?.nativeEvent?.coordinate)
    // dispatch(savCoordinate(e?.nativeEvent?.coordinate))
  }

  const sendlocCoor = () => {
    navigation.navigate('Userchat')
    // dispatch(savCoordinate(coordinates))
  }

  return (
    <View 
    // pointerEvents='none' 
    >
      <MapView
        // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={{ height: '100%', width: '100%' }}
        initialRegion={{
          latitude: region?.latitude || 24.937939450000002,
          longitude: region?.longitude || 67.04100332132039,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        showsUserLocation={true}
        showsMyLocationButton={true}
        // zoomEnabled = {false}
        scrollGestureEnabled={false}
        // onRegionChangeComplete={(region) => setRegion(region)}
        onPress={(e) => { 
          coord?.selectLoc 
          ?
          saveing_cordinate(e) 
          :
          console.log("you can not select image");
        }}
      >
        <Marker
          coordinate={{
            latitude: region?.latitude || 24.937939450000002,
            longitude: region?.longitude || 67.04100332132039,
          }}

        // description={"This is a marker in React Natve"}
        >
          <Image source={require('../assets/images/patient.png')} style={{ height: 30, width: 30 }} />

        </Marker>
      </MapView>



      <View>
        <RBSheet
          ref={refRBSheet1}
          closeOnDragDown={true}
          closeOnPressMask={true}
          openDuration={250}
          height={155}
          animationType='fade'
          customStyles={{
            wrapper: {
              backgroundColor: "transparent"
            },
            container: {
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,

              backgroundColor: "#FFFFFF",
            },
            draggableIcon: {
              backgroundColor: "#000",
              height: 4,
              width: 50,
              borderRadius: 2,
              marginTop: 14,
              marginBottom: 20,
            }

          }}
        >
          <TouchableOpacity style={styles.shareLocation}>
            <Text style={styles.sharetxt}>Share location</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.9} onPress={() => { sendlocCoor() }} style={styles.sharerow}>
            <View style={styles.iconview} >
              <Image style={styles.locaticon} source={require('@/assets/images/patient.png')} />
            </View>

            <View>
              <Text style={styles.sharetxtt}> Share location</Text>
            </View>

          </TouchableOpacity>
        </RBSheet>
      </View>

    </View>

  )
}



export default MapViewcomponent
