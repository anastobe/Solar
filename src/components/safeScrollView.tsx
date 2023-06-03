import {general_style} from '@/assets/styles/generalStyle';
import theme from '@/assets/styles/theme';
import React from 'react';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
  SafeAreaView,
} from 'react-native-safe-area-context';
import {
  View,
  ScrollView,
  RefreshControl,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  StatusBar,
} from 'react-native';

const SafeScrollView = ({children, isDarkMode, barCol, screenCol}) => {

  return (
    <SafeAreaProvider style={{ backgroundColor: screenCol }} >
      <CustomStatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={barCol}
      />
      {children}
    </SafeAreaProvider>
  );
};
export default SafeScrollView;

const CustomStatusBar = ({backgroundColor, ...props}) => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={{height: StatusBar.currentHeight || top, backgroundColor}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
};
