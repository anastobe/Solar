import React from 'react';
import { RouteNames } from '@/constants';
import IntroScreens from '@/containers/auth/introScreens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OptionScreen from '@/containers/auth/optionScreen';
import Login from '@/containers/auth/login';
import Signup from '@/containers/auth/signup';
import ForgotPassword from '@/containers/auth/forgotpassword';
import PasswordVerification from '@/containers/auth/passVerification';
import ResetPass from '@/containers/auth/resetPass';
import ProviderBottomTabs from '../providerNavigation/providerBottomTabs';
import UserBottomTabs from '../userNavigation/userBottomTabs';

const AuthStack = () => {

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
          name={RouteNames.login}
          component={Login}
          options={{headerShown: false}}
      />
      <Stack.Screen
          name={RouteNames.signup}
          component={Signup}
          options={{headerShown: false}}
      />
      <Stack.Screen
        name={RouteNames.introScreens}
        component={IntroScreens}
        options={{headerShown: false}}
      />
    <Stack.Screen
        name={RouteNames.optionScreen}
        component={OptionScreen}
        options={{headerShown: false}}
    />
    <Stack.Screen
        name={RouteNames.forgotpassword}
        component={ForgotPassword}
        options={{headerShown: false}}
    />
    <Stack.Screen
        name={RouteNames.passVerification}
        component={PasswordVerification}
        options={{headerShown: false}}
    />
    <Stack.Screen
      name={RouteNames.resetPass}
      component={ResetPass}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name={RouteNames.providerBottomTabs}
      component={ProviderBottomTabs}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name={RouteNames.userBottomTabs}
      component={UserBottomTabs} 
      options={{headerShown: false}}
    />

    </Stack.Navigator>
  );
};

export default AuthStack;
