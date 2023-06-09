import React from 'react';
import { RouteNames } from '@/constants';
import IntroScreens from '@/containers/auth/introScreens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import UserBottomTabs from './userBottomTabs';
import ProviderBottomTabs from './providerBottomTabs';

const ProviderRoutes = () => {

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={RouteNames.providerBottomTabs}
        component={ProviderBottomTabs}
        // component={()=><View><Text>asdasdssad</Text></View>)}
        options={{headerShown: false}}
      />


    </Stack.Navigator>
  );
};

export default ProviderRoutes;






// import { View, Text, Image } from 'react-native'
// import React from 'react'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// // screen 
// import Home from '../screens/Client/Home'
// import Notification from '../screens/Notification'
// import New_request from '../screens/Client/New_request'
// import Chat from '../screens/Chat'
// import Profile from '../screens/Profile'
// import EditProfile from '../screens/EditProfile'


// import { colors } from '../theme';
// import { images } from '../images';
// import Parcel_detail from '../screens/Client/Parcel_detail';
// import OpenChat from '../screens/OpenChat'
// import Track from '../screens/Client/Track';
// import UpdatePassword from '../screens/UpdatePassword';

// const Tab = createBottomTabNavigator();
// const ClientTab = () => {
//     return (
//         <Tab.Navigator initialRouteName='Home' screenOptions={{
//             headerShown: false,
//             tabBarStyle: {
//                 height: 75,
//                 paddingTop: 10
//             }
//         }}>
//             <Tab.Screen name="Home" component={Home} options={{
//                 title: '',
//                 tabBarIcon: ({ focused }) => (
//                     <Image source={images.homeTab} style={focused ? { tintColor: colors.secondaryColor } : {}} />
//                 )
//             }} />
//             <Tab.Screen name="Notification" component={Notification} options={{
//                 title: '',
//                 tabBarIcon: ({ focused }) => (
//                     <Image source={images.notificationTab} style={focused ? { tintColor: colors.secondaryColor } : {}} />
//                 )
//             }} />
//             <Tab.Screen name="Discover" component={New_request} options={{
//                 tabBarHideOnKeyboard:true,
//                 title: '',
//                 tabBarIcon: ({ focused }) => (
//                     <Image source={images.New_Request} style={focused ? { tintColor: colors.secondaryColor } : {}} />
//                 )
//             }} />
//             <Tab.Screen name="Chat" component={Chat} options={{
//                 title: '',
//                 tabBarIcon: ({ focused }) => (
//                     <Image source={images.chatTab} style={focused ? { tintColor: colors.secondaryColor } : {}} />
//                 )
//             }} />
//             <Tab.Screen name="Profile" component={Profile} options={{
//                 title: '',
//                 tabBarIcon: ({ focused }) => (
//                     <Image source={images.profileTab} style={focused ? { tintColor: colors.secondaryColor } : {}} />
//                 )
//             }} />
//         </Tab.Navigator>
//     )
// }

// const Stack = createNativeStackNavigator();
// const MainStack = () => {
//     return (
//         <Stack.Navigator screenOptions={{ headerShown: false }}>
//             <Stack.Screen name='ClientTab' component={ClientTab} />

//         </Stack.Navigator>
//     )
// }
// export default MainStack