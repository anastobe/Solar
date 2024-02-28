import theme from '@/assets/styles/theme';
import {FONT_FAMILY, RouteNames} from '@/constants/index';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Image,
  Animated,
  Dimensions,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  Platform,
  BackHandler,
} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { IONICONS } from '../constraints/Icons'
// import {IMAGES, COLORS, FONTS } from "../constraints/Index"
// import { width } from '../Utils/Constant'
// import { useDispatch } from 'react-redux'
import {useNavigation} from '@react-navigation/native';
import Octicons from 'react-native-vector-icons/Octicons';
import {useDispatch, useSelector} from 'react-redux';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const HeaderHomePage = ({...props}) => {

  const {data, routeName} = props;

  const navigation = useNavigation();

  const BottomHomeHeader = () => {
    return (
      <>
        <View style={[styles.headerCont,{ marginTop: 10 }]}>

          <View
            style={{
              flexDirection: 'row',
              width: 70,
              justifyContent: 'space-between',
            }}>

          {props?.showDrawerIcon ? 
            <TouchableOpacity
                style={{height: 25, width: 25}}
                activeOpacity={0.9}
                onPress={() => navigation.openDrawer() }>
              <Octicons 
                name={"list-unordered"} 
                size={30} 
                color={theme.white} 
              />
          </TouchableOpacity>                        
          :
          <TouchableOpacity
              style={{height: 25, width: 25}}
              activeOpacity={0.9}
              onPress={() => navigation.goBack() }>
            <Octicons 
              name={"chevron-left"} 
              size={30} 
              color={theme.white} 
            />
            </TouchableOpacity>}

          </View>
        </View>

        <View
          style={{
            marginHorizontal: 15,
            marginTop: 16,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
     
            <>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack() 
                }}
                style={{width: '20%'}}>
                <ImageBackground
                  style={{
                    height: 62,
                    width: 62,
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  source={require('@/assets/images/audioUserBackImg.png')}>
                  <View
                    style={{
                      borderColor: '#fff',
                      borderWidth: 1,
                      borderRadius: 30,
                      height: 50, 
                      width: 50,
                      justifyContent: "center",
                      alignItems: "center"
                    }}>
                    <Image
                      style={{height: 35, width: 35, borderRadius: 30}}
                      source={require('@/assets/images/person.png')}
                    />
                  </View>
                </ImageBackground>
              </TouchableOpacity>

              <View style={{width: '80%'}}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    navigation.navigate(routeName);
                  }}
                  style={{
                    backgroundColor: theme.white,
                    height: 40,
                    borderRadius: 20,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      marginLeft: 15,
                      fontFamily: FONT_FAMILY.MontserratRegular,
                      color: theme.black,
                    }}>
                    What’s in your mind?
                  </Text>
                </TouchableOpacity>
              </View>
            </>

        </View>
      </>
    );
  };

  const RenderConditionRendering = () => {
    if (props?.showBottomHomePageContent === true) {
      return BottomHomeHeader();
    } 
  };

  return (
    <View style={{height: props?.height, backgroundColor: '#cbcbcb'}}>
      <ImageBackground
        style={{height: props?.height, position: 'absolute', width: '100%'}}
        source={require('@/assets/images/headerBackGrounColor.png')}
        resizeMode="cover">
        {RenderConditionRendering()}
      </ImageBackground>
    </View>
  );
};


const styles = StyleSheet.create({

  headerCont:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginHorizontal: 15,
  }

 
 });
 

export default HeaderHomePage;
