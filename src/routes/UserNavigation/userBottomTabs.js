import React from 'react';
import { RouteNames } from '@/constants';
import IntroScreens from '@/containers/auth/introScreens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import UserDrawer from './userDrawer';
import BottomTab from '@/components/bottomTab';
import Notification from '@/containers/generalScreens/notification';
import Profile from '@/containers/generalScreens/profile';
// import Chat from '@/containers/generalScreens/chat';
import Chattinguser from '@/containers/generalScreens/chatScreens/chattinguser';
import ShowBigImage from '@/containers/generalScreens/chatScreens/showBigImage';
import PdfView from '@/containers/generalScreens/chatScreens/pdfView';
import Sharelocation from '@/containers/generalScreens/chatScreens/sharelocation';
import Personlistscreen from '@/containers/generalScreens/chatScreens/personlistscreen';
import EditProfile from '@/containers/generalScreens/editProfile';
import AddJob from '@/containers/generalScreens/addJob/addJob';
import AddLoads from '@/containers/generalScreens/addJob/addLoads';
import GetEstimatePrice from '@/containers/generalScreens/addJob/getEstimatePrice';
import GetRequirementsDetail from '@/containers/generalScreens/addJob/getRequirementsDetail';
import JobDetailAndPayment from '@/containers/costumers/jobDetailAndPayment';
import ChatScreen from '@/containers/generalScreens/Message/ChatScreen';
import Chat from '@/containers/generalScreens/Message/Chat';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function homeTabStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={RouteNames.userDrawer} component={UserDrawer} />
      {/* <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} /> */}

    </Stack.Navigator>
  );
}

function AddJobStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={RouteNames.addJob} component={AddJob} />

      {/* <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} /> */}
      <Stack.Screen options={{headerShown: false}} name={RouteNames.getRequirementsDetail} component={GetRequirementsDetail} />
      <Stack.Screen name={RouteNames.addLoads} component={AddLoads} />
      <Stack.Screen name={RouteNames.getEstimatePrice} component={GetEstimatePrice} />


    </Stack.Navigator>
  );
}

function ChatTabStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>

      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />


    </Stack.Navigator>
  );
}

function ProfileTabStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile} />

    </Stack.Navigator>
  );
}


const UserBottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen 
          name={RouteNames.homeTabStack}
          component={homeTabStack}
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
      <Tab.Screen name={RouteNames.addJobStack} component={AddJobStack} 
        options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => (
                <BottomTab
                txt={'AddJob'}
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
      <Tab.Screen name={RouteNames.profileTabStack} component={ProfileTabStack} 
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



export default UserBottomTabs