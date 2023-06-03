import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import UserRoutes from '@/routes/UserNavigation';
import ProviderRoutes from '@/routes/providerNavigation';
import AuthStack from '@/routes/auth';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const StackNav = ({handleNav}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      {false ? (
        <ProviderRoutes /> //provider navigation
      ) :
      true ?
      (
        <UserRoutes /> //User navigation
      ) : 
      (
        <AuthStack /> //auth screens
      )
      }
    </View>
  );
};

export default StackNav;
