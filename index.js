// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);


/**
 * @format
 */
 import {Text, TextInput, AppRegistry} from 'react-native';
 import Main from '@/src-app';
 import {name as appName} from './app.json';
 import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
 Text.defaultProps = Text.defaultProps || {};
 Text.defaultProps.allowFontScaling = false;
 TextInput.defaultProps = TextInput.defaultProps || {};
 TextInput.defaultProps.allowFontScaling = false;
 
 AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(Main));
 
