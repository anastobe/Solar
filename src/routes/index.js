import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import UserRoutes from '@/routes/userNavigation';
import ProviderRoutes from '@/routes/providerNavigation';
import AuthStack from '@/routes/auth';
import { useDispatch, useSelector } from 'react-redux';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const StackNav = ({handleNav}) => {

  const islogin = useSelector(state => state?.AuthReducer?.isLogin);

  console.log('====================================', islogin);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      {islogin == "provider" ? (
        <ProviderRoutes /> //provider navigation
      ) 
      :
      islogin == "user" ?
      (
        <UserRoutes /> //User navigation
      ) 
      : 
      (
        <AuthStack /> //auth screens
      )
      }
    </View>
  );
};

export default StackNav;
