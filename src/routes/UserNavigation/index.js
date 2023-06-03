import React from 'react';
import { RouteNames } from '@/constants';
import IntroScreens from '@/containers/auth/introScreens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserBottomTabs from './userBottomTabs';

const UserRoutes = () => {

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={RouteNames.userBottomTabs}
        component={UserBottomTabs}
        options={{headerShown: false}}
      />


    </Stack.Navigator>
  );
};

export default UserRoutes;
