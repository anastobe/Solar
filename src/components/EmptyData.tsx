import React from 'react'
import { Text, View } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import theme from '@/assets/styles/theme';

const EmptyData = ({ txt, iconName, pos }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center",  marginVertical: 20, alignSelf: pos}}>
    <FontAwesome5
      name={iconName}
      size={20}
      color={theme.black}
    />
  <Text
    style={{
      color: theme.black,
      fontSize: 18,
      marginLeft: 10
    }}>
    {txt}
  </Text>
</View>
  )
}

export default EmptyData