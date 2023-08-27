import React, { useRef, useState } from "react";
import { Text, TextInput, View, Pressable, Image, ScrollView, StatusBar, Alert, FlatList, SafeAreaView, Platform } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import styles from '@/assets/styles/chatstyles/chatStyle'
import { FONT_FAMILY } from "@/constants/index";
import Octicons from 'react-native-vector-icons/Octicons';
import theme from "@/assets/styles/theme";

export default function Header({ navigation, onPress = () => {}, onSnapClick = () => {}, onVideoClick = () => {}, onPress1 }) {
    return (
        <View style={styles.headerMainContainer}>
            <View style={{ flexDirection: 'row' }}>
                <Pressable onPress={onPress}>
                    {/* <Image source={require('@/assets/images/patient.png')} style={{ width: 14, height: 12, marginTop: 19 }} /> */}
            <Octicons 
              name={"chevron-left"} 
              size={40} 
              color={theme.black} 
            />
                </Pressable>
                <View style={{ flexDirection: 'row', marginLeft: 17 }}>
                    {/* <Image source={require('@/assets/images/user.png')} style={styles.headerProfileIcon} /> */}
                    <View style={{ marginHorizontal: 20, marginTop: Platform.OS == 'ios' ? 7 : null }}>
                        {/* <Text style={styles.headerName}>Cameron Williamson</Text> */}
                        {/* <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                            <Text style={styles.headerFollowers}>200K followers</Text>
                            <Image source={require('@/assets/images/patient.png')} style={styles.lineImage} />
                            <Pressable onPress={onPress1} style={{ flexDirection: 'row' }}>
                                <Image source={require('@/assets/images/patient.png')} style={styles.headerStarImage} />
                                <Text style={styles.headerRank}>5.0 (70)</Text>
                            </Pressable>
                        </View> */}
                    </View>
                </View>
            </View>
            {/* <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                <Pressable style={styles.snapChatIcon} onPress={onSnapClick}>
                    <Image source={require('@/assets/images/patient.png')} style={{ width: 36, height: 36 }} />
                </Pressable>
                <Pressable style={styles.recordIcon} onPress={onVideoClick}>
                    <Image source={require('@/assets/images/patient.png')} style={{ width: 36, height: 36 }} />
                </Pressable>
            </View> */}

        </View>
    )
}