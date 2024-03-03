import React from 'react';
import {RouteNames} from '@/constants';
import IntroScreens from '@/containers/auth/introScreens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserBottomTabs from './userBottomTabs';
import Chattinguser from '@/containers/generalScreens/chatScreens/chattinguser';
import Sharelocation from '@/containers/generalScreens/chatScreens/sharelocation';
import PdfView from '@/containers/generalScreens/chatScreens/pdfView';
import ShowBigImage from '@/containers/generalScreens/chatScreens/showBigImage';
import EditProfile from '@/containers/generalScreens/editProfile';
import GetRequirements from '@/containers/generalScreens/addJob/getRequirements';
import GetRequirementsDetail from '@/containers/generalScreens/addJob/getRequirementsDetail';
import JobDetailAndPayment from '@/containers/costumers/jobDetailAndPayment';
import PaymentDone from '@/containers/costumers/paymentDone';
import AvgEstimatePrice from '@/containers/generalScreens/addJob/avgEstimatePrice';
import Notification from '@/containers/generalScreens/notification';
import FamousVendors from '@/containers/generalScreens/famousVendors';
import CalculateExpense from '@/containers/generalScreens/calculateExpense';
import Login from '@/containers/auth/login';
import Chat from '@/containers/generalScreens/Message/Chat';
import ChatScreen from '@/containers/generalScreens/Message/ChatScreen';


const UserRoutes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>


      
<Stack.Screen
  name={RouteNames.userBottomTabs}
  component={UserBottomTabs}
  options={{headerShown: false}}
/>
<Stack.Screen
    name={RouteNames.login}
    component={Login}
    options={{headerShown: false}}
/>
<Stack.Screen 
  options={{headerShown: false}} 
  name={RouteNames.getRequirements} 
  component={GetRequirements} 
/>
<Stack.Screen 
  options={{headerShown: false}} 
  name={RouteNames.getRequirementsDetail} 
  component={GetRequirementsDetail} 
/>

<Stack.Screen 
  options={{headerShown: false}} 
  name={RouteNames.avgEstimatePrice} 
  component={AvgEstimatePrice} 
/>


      <Stack.Screen 
        name={RouteNames.jobDetailAndPayment} 
        component={JobDetailAndPayment} 
        options={{headerShown: false}}
      />

      <Stack.Screen 
        name={RouteNames.paymentDone} 
        component={PaymentDone} 
        options={{headerShown: false}}
      />


     {/* firebase chat module  */}
     <Stack.Screen 
       name="Chat" 
       component={Chat} 
       options={{headerShown: false}} 
      />
      
      <Stack.Screen 
        name="ChatScreen" 
        component={ChatScreen} 
        options={{headerShown: false}} 
      />

      {/* chat module  */}
      <Stack.Screen
        name="Userchat"
        component={Chattinguser}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Sharelocation"
        component={Sharelocation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="pdfView"
        component={PdfView}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="showBigImage"
        component={ShowBigImage}
        options={{headerShown: false}}
      />

      {/* profile */}
      <Stack.Screen
        name={RouteNames.editProfile}
        component={EditProfile}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={RouteNames.notification}
        component={Notification}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={RouteNames.famousVendors}
        component={FamousVendors}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={RouteNames.calculateExpense}
        component={CalculateExpense}
        options={{headerShown: false}}
      />

      
    </Stack.Navigator>
  );
};

export default UserRoutes;
