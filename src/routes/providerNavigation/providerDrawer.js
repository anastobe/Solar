import React from 'react';
import { RouteNames } from '@/constants';
import IntroScreens from '@/containers/auth/introScreens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dimensions, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import VendorsHome from '@/containers/vendors/vendorsHome';
import DrawerView from '@/components/drawerView';
import { DrawerMenusProvider } from '@/utils/data';

const Drawer = createDrawerNavigator();

const ProviderDrawer = props => {
    return (
      <Drawer.Navigator
        // initialRouteName="TopTabNavigator"
        screenOptions={{
          headerShown: false,
          swipeEdgeWidth: 15,
          drawerStyle: {width: Dimensions.get('screen').width / 1.3},
          drawerType: 'front',
        }}
        drawerContent={()=>  <DrawerView data={DrawerMenusProvider} />}>
        <Drawer.Screen
          name="TopTabNavigator"
          component={VendorsHome}
        //   options={{
        //     title: '',
        //     drawerItemStyle: {display: 'none'},
        //   }}
        />
  
        <Drawer.Screen
          name="ProfileStack"
          component={()=><View />}
        //   options={{
        //     title: '',
        //     drawerItemStyle: {display: 'none'},
        //   }}
        />
  
    
        <Drawer.Screen
          name="Upgrade"
          component={()=><View />}
        //   options={{
        //     title: 'Upgrade',
        //     drawerLabelStyle: {color: 'black', fontFamily: 'Poppins', right: 10},
        //     drawerIcon: ({color}) => <Image source={images.upgrade} />,
        //   }}
        />
        <Drawer.Screen
          name="FavouriteStack"
          component={()=><View />}
        //   options={{
        //     title: 'Favourite',
        //     drawerLabelStyle: {color: 'black', fontFamily: 'Poppins', right: 10},
        //     drawerIcon: ({color}) => 
        //     <View style={{ backgroundColor: "black", width: 37, height: 37, borderRadius: 8, justifyContent: "center", alignItems: "center" }} >
        //      <Image style={{ width: 17, height: 17, resizeMode: "contain", tintColor: "white" }} source={images.favorite} />
        //     </View>,
        //   }}
        />
        <Drawer.Screen
          name="Settings"
          component={()=><View />}
        //   options={{
        //     title: 'Settings',
        //     drawerLabelStyle: {color: 'black', fontFamily: 'Poppins', right: 10},
        //     drawerIcon: ({color}) => <Image source={images.settings} />,
        //   }}
        />
        <Drawer.Screen
          name="PrivacyPolicy"
          component={()=><View />}
        //   options={{
        //     title: 'Privacy Policy',
        //     drawerLabelStyle: {color: 'black', fontFamily: 'Poppins', right: 10},
        //     drawerIcon: ({color}) => <Image source={images.privacy} />,
        //   }}
        />
        <Drawer.Screen
          name="HelpSupport"
          component={()=><View />}
        //   options={{
        //     title: 'Help & Support',
        //     drawerLabelStyle: {color: 'black', fontFamily: 'Poppins', right: 10},
        //     drawerIcon: ({color}) => <Image source={images.helpSupport} />,
        //   }}
        />
      </Drawer.Navigator>
    );
  };

export default ProviderDrawer