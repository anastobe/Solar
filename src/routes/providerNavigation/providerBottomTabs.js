import React from 'react';
import { RouteNames } from '@/constants';
import IntroScreens from '@/containers/auth/introScreens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import BottomTab from '@/components/bottomTab';
import Notification from '@/containers/generalScreens/notification';
import Chat from '@/containers/generalScreens/chat';
import Profile from '@/containers/generalScreens/profile';
import ProviderDrawer from './providerDrawer';
import Personlistscreen from '@/containers/generalScreens/chatScreens/personlistscreen';
import AddJob from '@/containers/generalScreens/addJob/addJob';
import AddJobProvider from '@/containers/vendors/addJobProvider';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTab() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProviderDrawer" component={ProviderDrawer} />

    </Stack.Navigator>
  );
}

function AddJobStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={RouteNames.addJobProvider} component={AddJobProvider} />


    </Stack.Navigator>
  );
}

function ChatTab() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Chat" component={Chat} />

    </Stack.Navigator>
  );
}

function ChatTabStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>

      <Stack.Screen name='Chatflatlist' component={Personlistscreen} options={{ headerShown: false }} />

    </Stack.Navigator>
  );
}

function ProfileTab() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile} />

    </Stack.Navigator>
  );
}

const ProviderBottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen 
          name="HomeTab"
          component={HomeTab}
        options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
                <BottomTab
                txt={'Home'}
                img={"home"}
                focusImg={"home"}
                focus={focused}
                />
            ),
          }}
      />
  
      <Tab.Screen name="ProviderAddJobStack" component={AddJobStack} 
        options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
                <BottomTab
                txt={'Expense'}
                img={"briefcase"}
                focusImg={"briefcase"}
                focus={focused}
                />
            ),
          }} 
      />
      <Tab.Screen name={RouteNames.chatTabStack} component={ChatTabStack} 
        options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
                <BottomTab
                txt={'Chat'}
                img={"comment-discussion"}
                focusImg={"comment-discussion"}
                focus={focused}
                />
            ),
          }} 
      />
      <Tab.Screen name="ProfileTab" component={ProfileTab} 
        options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
                <BottomTab
                txt={'Profile'}
                img={"person"}
                focusImg={"person-fill"}
                focus={focused}
                />
            ),
          }} 
      />
    </Tab.Navigator>
  )
}



export default ProviderBottomTabs
