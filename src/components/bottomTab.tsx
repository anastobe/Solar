import React from 'react';
import {View, Text, Image, Platform} from 'react-native';
import {Metrics} from '@/assets/metrics/metrics';
import theme from '@/assets/styles/theme';
import {FONT_FAMILY} from '@/constants';
import Octicons from 'react-native-vector-icons/Octicons';

const BottomTab = ({...props}) => {
  const {img, focus, focusImg, txt} = props || {};

  function focusView(img, focus, focusImg, txt) {
    return (
      <View
        style={{
          width: '90%',
          marginTop: -5,
          height: 40,
          backgroundColor: theme.lightblue,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          borderRadius: 10,
        }}>
       <Octicons           
          name={focus ? focusImg : img} size={17} 
          color={theme.white}
          />

        <Text
          style={{
            fontFamily: FONT_FAMILY.MontserratSemiBold,
            fontSize: Metrics.width < 361 ? 11 : 12,
            color: theme.white
          }}>
          {txt}
        </Text>
      </View>
    );
  }

  function unFocusView(img, focus, focusImg, txt) {
    return (
      <View style={{marginTop: -5, height: 40, justifyContent: 'space-evenly'}}>
       <Octicons           
          name={focus ? focusImg : img} size={17} 
          color="black" 
          />
      </View>
    );
  }

  return (
    <View
      style={{
        width: '100%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {focus
        ? focusView(img, focus, focusImg, txt)
        : unFocusView(img, focus, focusImg, txt)}
    </View>
  );
};

export default BottomTab;
