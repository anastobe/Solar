import theme from '@/assets/styles/theme';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

const CalanderBoxImg = ({...props}) => {
  const {onPress = () => {}, imgshow} = props;

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[
        styles.schCont,
        {
          marginLeft: 20,
          backgroundColor: theme.lightblue,
        },
      ]}>
      <Image source={imgshow} style={styles.img} />
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  schCont: {
    width: 55,
    height: 67,
    marginRight: 10,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 26,
    height: 26,
    resizeMode: 'contain',
    tintColor: '#fff',
  },
});

export default CalanderBoxImg;
