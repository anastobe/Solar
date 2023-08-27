import theme from '@/assets/styles/theme';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

const CalanderBox = ({...props}) => {
  const {
    id,
    onPressSelectBox = () => {},
    selectBoxContSty,
    selectBoxContDate,
    date,
    selectBoxContDay,
    day
  } = props;

  return (
    <TouchableOpacity
      key={id}
      activeOpacity={0.8}
      onPress={onPressSelectBox}
      style={selectBoxContSty}>
      <Text style={selectBoxContDate}>{date}</Text>
      <Text style={selectBoxContDay}>{day}</Text>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({});

export default CalanderBox;
