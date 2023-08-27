import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import theme from '@/assets/styles/theme';
import {FONT_FAMILY} from '@/constants';

export default function ImgButton({
  marginTp,
  borderColor,
  distance,
  borderWidth,
  title,
  bgcolor,
  children,
  txtColor,
  verticalDistance,
  width,
  onPress,
  height,
  horizontalDistance,
  marginHorizontal,
}) {

  
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[
        styles.btnView,
        {
          marginTop: marginTp,
          borderColor: borderColor,
          borderWidth: borderWidth,
          marginHorizontal: marginHorizontal,
        },
      ]}>
      <Shadow
        distance={distance}
        style={[styles.btnShadow, {backgroundColor: bgcolor}]}
        startColor={'#0003'}
        endColor={'#0000'}>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          {/* <Image
            source={children}
            style={[
              styles.children,
              {
                marginVertical: verticalDistance,
                width: width,
                height: height,
                marginHorizontal: horizontalDistance,
              },
            ]}
          /> */}
          <View
          style={{
              marginVertical: verticalDistance,
              width: width,
              height: height,
              marginHorizontal: horizontalDistance
          }}
          >
          {children}
          </View>
          <Text style={[styles.btnText, {color: txtColor}]}>{title}</Text>
        </View>
      </Shadow>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnView: {
    height: 50,
    // marginTop: 12,
    // marginHorizontal: 51,
    borderRadius: 14,
  },
  btnShadow: {
    width: '100%',
    height: 48,
    borderRadius: 14,
  },
  btnImg: {
    resizeMode: 'contain',
  },
  btnText: {
    textAlign: 'center',
    fontFamily: FONT_FAMILY.MontserratSemiBold,
    fontSize: 13,
    marginVertical: 15,
  },
});
