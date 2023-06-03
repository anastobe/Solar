import React, {useEffect, useState} from 'react';
import {Alert, Text,View} from 'react-native';
// import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
// import {store} from './redux/store';
import {NavigationContainer} from '@react-navigation/native';
import Routes from '@/routes/index';
// import FlashMessage from 'react-native-flash-message';
import {RouteNames} from './constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  // const [handleNav, sethandleNav] = useState('');

  useEffect(() => {
      SplashScreen.hide();
    // redirect();
  }, []);

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
      <NavigationContainer>
        <Routes handleNav={'true'} />
        <FlashMessage position="top" />
      </NavigationContainer>
    // </Provider>
  );
};

export default App;
