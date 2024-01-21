import React,{ useState } from 'react'
import { Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Metrics } from '@/assets/metrics/metrics'
import theme from '@/assets/styles/theme'

const SelectRequirements = ({...props}) => {

    const {noItem, itemName, onPressIncr, onPressDecr} = props || {}

  return (
    <View>
      <View
        style={{
          borderWidth: 0.2,
          borderColor: theme.black,
          width: Metrics.width - 20,
          height: 50,
          marginVertical: 10,
          borderRadius: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{marginLeft: 20, flexDirection: 'row'}}>
          <View>
            <Text style={{ color: "black" }} >{noItem}</Text>
          </View>
          <View style={{marginLeft: 20}}>
            <Text style={{ color: "black" }} >{itemName}</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: 100,
            justifyContent: 'space-between',
            marginRight: 20,
          }}>
          <TouchableOpacity
            onPress={onPressIncr}
            style={{
              width: 40,
              backgroundColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
              height: 25,
              borderRadius: 10,
            }}>
            <Text style={{fontSize: 20, color: 'white'}}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onPressDecr}
            style={{
              width: 40,
              backgroundColor: '#cbcbcb',
              justifyContent: 'center',
              alignItems: 'center',
              height: 25,
              borderRadius: 10,
            }}>
            <Text style={{fontSize: 20}}>-</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SelectRequirements;
