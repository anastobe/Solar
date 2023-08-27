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
import Chat from '@/containers/generalScreens/chat';
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

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function homeTabStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={RouteNames.userDrawer} component={UserDrawer} />

    </Stack.Navigator>
  );
}

function AddJobStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={RouteNames.addJob} component={AddJob} />

      <Stack.Screen options={{headerShown: false}} name={RouteNames.getRequirementsDetail} component={GetRequirementsDetail} />
      <Stack.Screen name={RouteNames.addLoads} component={AddLoads} />
      <Stack.Screen name={RouteNames.getEstimatePrice} component={GetEstimatePrice} />


    </Stack.Navigator>
  );
}

function ChatTabStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>

      <Stack.Screen name='Chatflatlist' component={Personlistscreen} options={{ headerShown: false }} />

        {/*        <Stack.Screen name='Contract' component={Contract} options={{ headerShown: false }} />
            <Stack.Screen name='Contractsubmitted' component={Contractsubmitted} options={{ headerShown: false }} />
            <Stack.Screen name='Newcardadd' component={Newcardadd} options={{ headerShown: false }} />
            <Stack.Screen name='Reqeustreason' component={Reqeustreason} options={{ headerShown: false }} />
            <Stack.Screen name='Userpayment' component={Userpayment} options={{ headerShown: false }} />
            <Stack.Screen name='Sharelocation' component={Sharelocation} options={{ headerShown: false }} />
            <Stack.Screen name='Homerunningcontact' component={Homerunningcontact} options={{ headerShown: false }} />
            <Stack.Screen name='Influencerpaypal' component={Influencerpaypal} options={{ headerShown: false }} />
            <Stack.Screen name='Joboffersent' component={Joboffersent} options={{ headerShown: false }} />
            <Stack.Screen name='Messagebox' component={Messagebox} options={{ headerShown: false }} />
            <Stack.Screen name='Refundsubmitted' component={Refundsubmitted} options={{ headerShown: false }} />
            <Stack.Screen name='Paymentcard' component={Paymentcard} options={{ headerShown: false }} />
            <Stack.Screen name='Influencerpay' component={Influencerpay} options={{ headerShown: false }} />
            <Stack.Screen name='pdfView' component={PdfView} options={{ headerShown: false }} />
            <Stack.Screen name='showBigImage' component={ShowBigImage} options={{ headerShown: false }} /> . */}

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
      {/* <Tab.Screen name="NotificationTab" component={NotificationTab} 
        options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => (
            <BottomTab
            txt={'Updates'}
            img={"bell"}
            focusImg={"bell"}
            focus={focused}
            />
        ),
        }}
        /> */}
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