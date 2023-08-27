import React, {createRef, useEffect, useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Metrics} from '@/assets/metrics/metrics';
import {StatusBar} from 'react-native';
import {FONT_FAMILY} from '@/constants';
import {Shadow} from 'react-native-shadow-2';
import Octicons from 'react-native-vector-icons/Octicons';

const PickImg = ({...props}) => {
  const {img, onPress, imgBack, imgInside, cameraView, shadowSty, cameraImg} =
    props || {};

  return (
    <View style={imgBack}>
      <Image source={img} style={imgInside} />
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onPress}
        style={cameraView}>
        <Shadow
          style={shadowSty}
          distance={6}
          startColor={'#0001'}
          endColor={'#0000'}
          offset={[0, 0]}
          paintInside={false}>
          {/* <Image
            source={require('@/assets/images/patient.png')}
            style={cameraImg}
          /> */}

        <Octicons 
          name={"device-camera"} 
          size={18} 
          color={"black"} 
        />

        </Shadow>
      </TouchableOpacity>
    </View>
  );
};

export default PickImg;
