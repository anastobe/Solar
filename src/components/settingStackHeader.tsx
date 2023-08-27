import React from "react";
import {View, Pressable, Image, Text} from 'react-native'
import styles from '@/assets/styles/settingStyle';
import Octicons from 'react-native-vector-icons/Octicons';
import theme from "@/assets/styles/theme";


export default function SettingHeader({navigation, name, onPress}) {
    return (
        <View style={styles.topView}>
                <Pressable onPress={onPress}>
            <Octicons 
              name={"chevron-left"} 
              size={30} 
              color={theme.black} 
            />
                {/* <Image source={require('@/assets/images/patient.png')} style={{ width: 14, height: 12, marginTop: 6, tintColor: '#090A0A', resizeMode: "contain" }} /> */}
                </Pressable>
                <Text style={styles.settingText}>{name}</Text>
                <View style={{width: 25}}></View>
            </View>
    )
}