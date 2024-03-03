import React, {useEffect, useState} from 'react';
import {Alert, Text, View} from 'react-native';
// import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
// import {store} from './redux/store';
import {NavigationContainer} from '@react-navigation/native';
import Routes from '@/routes/index';
// import FlashMessage from 'react-native-flash-message';
import {RouteNames} from './constants';
import {Provider} from 'react-redux';
import {Persistor, Store} from '@/Redux/Store/Store';
import {PersistGate} from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FlashMessage from 'react-native-flash-message';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import auth, { firebase } from '@react-native-firebase/auth';

const App = () => {
  // const [handleNav, sethandleNav] = useState('');
  
  const UID = auth().currentUser.uid

  useEffect(() => {
    SplashScreen.hide();
    // redirect();
  }, []);

  console.log("=====>",UID);
  

  // async function redirect() {
  //   try {
  //     const data = await AsyncStorage.getItem(RouteNames.moveToBottomTab);
  //     sethandleNav(data);
  //     console.log('=====>', data);
  //   } catch (error) {
  //     Alert.alert(error);
  //   }
  // }

  return (
    // <Provider store={store}>

    <Provider store={Store}>
      <PersistGate loading={null} persistor={Persistor}>
        <NavigationContainer>
          <Routes handleNav={'true'} />
          <FlashMessage position="top" />
          <Toast />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
