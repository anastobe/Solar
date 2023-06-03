import React from 'react';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import theme from '@/assets/styles/theme';
import {FONT_FAMILY} from '@/constants';

export default function Button({
  marginTp,
  title,
  distance,
  bgcolor,
  txtColor,
  disabled,
  marginLeft,
  marginRight,
  onPress,
  width,
  marginHorizontal,
  disabledColor,
}) {
  return (
    <Pressable
      style={[
        styles.btnView,
        {
          marginTop: marginTp,
          width: width,
          marginLeft: marginLeft,
          marginRight: marginRight,
          marginHorizontal: marginHorizontal,
        },
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Shadow
        distance={distance}
        style={[
          styles.btnShadow,
          {backgroundColor: disabled ? theme.lightgrey : bgcolor},
        ]}
        startColor={'#0003'}
        endColor={'#0000'}
        offset={[0, 0]}>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Text
            style={[
              styles.btnText,
              {color: disabled ? disabledColor : txtColor},
            ]}>
            {title}
          </Text>
        </View>
      </Shadow>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btnView: {
    height: 50,
    // marginTop: 12,
    // marginHorizontal: 51,
    borderRadius: 15,
  },
  btnShadow: {
    width: '100%',
    height: 48,
    borderRadius: 14
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
