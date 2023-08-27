import React, {useState, useEffect, useRef, useCallback} from 'react';
import {
  Image,
  Text,
  View,
  Pressable,
  Platform,
  StatusBar,
  Alert,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from '@/assets/styles/authstyles/login';
import InputField from '@/components/inputField';
import theme from '@/assets/styles/theme';
import Button from '@/components/button';
import ImgButton from '@/components/imgBtn';
import {showMessage} from 'react-native-flash-message';
import {RouteNames} from '@/constants';
import SafeScrollView from '@/components/safeScrollView';
import {general_style} from '@/assets/styles/generalStyle';
import PasswordField from '@/components/passwordField';
import {useNavigation} from '@react-navigation/native';

// import {
//   GoogleSignin,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';
// import {
//   AuthenticationToken,
//   Profile,
//   LoginButton,
//   AccessToken,
//   LoginManager,
//   GraphRequestManager,
//   GraphRequest,
// } from 'react-native-fbsdk-next';
import {connect, useDispatch, useSelector} from 'react-redux';
// import {
//   appleAuthData,
//   fbAuthData,
//   googleAuthData,
//   signupdata,
// } from '@/redux/actions/userAction';
import Loader from '@/components/loader';
import axios from 'axios';
import { LoginApi } from '@/Redux/Action/AuthActions/authActions';
import ActionType from '@/Redux/Action/ActionType/actionType';

const Login = props => {


//   const signupAsID = useSelector(state => state?.userReducer?.signupAsID);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [isChecked, setIsChecked] = useState(false);
  const [hide, setHide] = useState(true);
  const [inputEmail, setInputEmail] = useState('anass@gmail.com');
  const [password, setPassword] = useState('AsgL9751-');
  const [isInvalidEmail, setIsInvalidEmail] = useState('');
  const [isInvalidPassword, setIsInvalidPassword] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [load, setload] = useState(false);
  const [FcmToken, setFcmToken] = useState();

  useEffect(() => {
    // GoogleSignin.configure();
    // FbSignIn()
  }, []);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setTimeout(() => {
          setKeyboardVisible(true); // or some other action
        }, 100);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

//   useEffect(() => {
//     requestUserPermission();
//   }, []);

  //outside but not quit my app
  // useEffect(() => {
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //   });

  //   return unsubscribe;
  // }, []);

  //outside and quit as well
  // useEffect(()=>{

  //   messaging().setBackgroundMessageHandler(async remoteMessage => {
  //     console.log('Message handled in the background!', remoteMessage);
  //     alert(remoteMessage)
  //   });

  // },[])

//   const requestUserPermission = async () => {
//     const authStatus = await messaging().requestPermission();
//     const enabled =
//       authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//       authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//     if (enabled) {
//       // console.log('Authorization status: ======>', authStatus);
//       getToken();
//     }
//   };

//   const getToken = async () => {
//     try {
//       const fcmToken = await messaging().getToken();
//       if (fcmToken) {
//         setFcmToken(fcmToken);
//         // alert("Push Notifications cone successfully",FcmToken)
//       }
//     } catch (error) {
//       console.log(error, 'error raised in fcm token');
//     }
//   };

  const nextButton =async () => {

    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regPassword =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;

    if (regEmail.test(inputEmail) === false) {
      showMessage({
        message: 'Please Enter a valid email',
        type: 'default',
        backgroundColor: theme.lightblue,
        color: theme.white,
        statusBarHeight: StatusBar.currentHeight,
      });
      setIsInvalidEmail(true);
      return;
    } else if (password === '') {
      showMessage({
        message: 'Please enter your password',
        type: 'default',
        backgroundColor: theme.lightblue,
        color: theme.white,
        statusBarHeight: StatusBar.currentHeight,
      });
      setIsInvalidPassword(true);
      return;
    } else {

      let data = {
        email: inputEmail,
        password: password,
      };
      
      let response = await props.LoginApi(data);

      console.log("----===login==> ",response);
      

      if (response?.data?.usertype == "provider") {
        navigation.reset({
          index: 0,
          routes: [{name: RouteNames.providerBottomTabs}],
        });
        dispatch({type: ActionType.IS_LOGIN, payload: "provider"});
      } else if (response?.data?.usertype == "user"){
        navigation.reset({
          index: 0,
          routes: [{name: RouteNames.userBottomTabs}],
        });
        dispatch({type: ActionType.IS_LOGIN, payload: "user"});
      }

    Alert.alert("you loged in SAAB project")

    return
      setInputEmail('');
      setPassword('');
  
  
    }
  };


// Function to update an existing item using the second API endpoint
// const updateExistingItem = async (id, data) => {
//   try {
//     const response = await axios.post(`${API_URL}/api/endpoint2/${id}`, data);
//     return response.data;
//   } catch (error) {
//     console.error('Error updating existing item:', error);
//     throw error;
//   }
// };


  const handleSetEmail = myEmail => {
    if (myEmail) {
      setInputEmail(myEmail);
    } else {
      setInputEmail(myEmail);
    }
    if (isInvalidEmail) {
      setIsInvalidEmail(false);
    }
  };

  function handleSetPassword(inputPwd) {
    setPassword(inputPwd);
    if (isInvalidPassword) {
      setIsInvalidPassword(false);
    }
  }

  function loginContent() {
    return (
      <View
      // showsVerticalScrollIndicator={false} style={{ height: '100%' }}
      >
        <View
          style={{
            marginTop: Platform.OS == 'android' ? 40 : 44,
            marginBottom: 25,
            alignItems: 'center',
          }}>

            <Image
              source={require('@/assets/images/solarlogo.jpeg')}
              style={{
                width: 190,
                resizeMode: 'contain',
                height: 130,
                backgroundColor: 'transparent',
              }}
            />
        </View>

        <View style={styles.welcomeTextView}>
          <Text style={styles.welcomeText}>Welcome back</Text>
        </View>
        <View style={styles.loginContinueTextView}>
          <Text style={styles.loginContinueText}>Log In to continue</Text>
        </View>

        <View
          style={{
            backgroundColor: theme.white,
            marginHorizontal: 20,
            marginTop: 20,
          }}>
          <InputField
            marginTp={20}
            heading="Email"
            autoCapital={'none'}
            onSubmitEditing={() => {
              this.secondTextInput.focus();
            }}
            blurOnSubmit={false}
            placeholder="Enter your Email"
            value={inputEmail}
            onChangeText={handleSetEmail}
            keyboardType={'email-address'}
            isInvalidEmail={isInvalidEmail}
          />
          <PasswordField
            marginTp={12}
            heading="Password"
            inputRef={input => {
              this.secondTextInput = input;
            }}
            value={password}
            onChangeText={handleSetPassword}
            placeholder="Enter your Password"
            image={
              !hide
                ? "eye"
                : "eye-closed"
            }
            isInvalidPassword={isInvalidPassword}
            secureEntry={hide}
            tintColor={'#2E90BF'}
            onPressImg={() => setHide(!hide)}
          />
        </View>

        <View style={styles.forgotView}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(RouteNames.forgotpassword);
            }}>
            <Text style={styles.forgotText}>Forgot password?</Text>
          </TouchableOpacity>

          <View style={styles.rememberView}>
            <Pressable
              onPress={() => setIsChecked(!isChecked)}
              style={[
                styles.checkBtn,
                {
                  borderColor: isChecked ? theme.lightblue : theme.grey,
                  backgroundColor: isChecked ? theme.lightblue : theme.white,
                },
              ]}>
              <Image
                source={isChecked && require('@/assets/images/patient.png')}
                style={[styles.tickBtn, {tintColor: theme.white}]}
              />
            </Pressable>
            <Text style={styles.rememberText}>Remember Me</Text>
          </View>
        </View>
        <Button
          marginTp={16}
          title="Login"
          // disabled={!inputEmail || !password}
          bgcolor={theme.lightblue}
          txtColor={theme.white}
          onPress={() => nextButton()}
          marginHorizontal={51}
          distance={4.2}
          disabledColor={theme.white}
        />
        <View style={styles.loginUsingView}>
          <Text style={styles.loginUsingText}>or login using social app</Text>
        </View>
        <ImgButton
          marginTp={10}
          marginHorizontal={51}
          onPress={() => onPressFaceBook()}
          title="Continue with Facebook"
          distance={0}
          borderWidth={1}
          borderColor={theme.lightblue}
          bgcolor={theme.white}
          // btnImg={require('@/assets/images/patient.png')}
          txtColor={theme.darkgrey}
          verticalDistance={17}
          width={8}
          height={14}
          horizontalDistance={11}
        >
                    <FontAwesome
            name="facebook"
            size={15}
            color={theme.black}
          />
        </ImgButton>

        <ImgButton
          marginTp={10}
          marginHorizontal={51}
          onPress={() => onPressGoogle()}
          title="Continue with Google"
          distance={0}
          borderWidth={1}
          borderColor={theme.lightblue}
          bgcolor={theme.white}
          // btnImg={require('@/assets/images/patient.png')}
          txtColor={theme.darkgrey}
          verticalDistance={15}
          width={14}
          height={14}
          horizontalDistance={5}
        >
          <FontAwesome
            name="google"
            size={15}
            color={theme.black}
          />
        </ImgButton>
        <View style={styles.bottomView}>
          <Text style={styles.bottomText}>
            Don't have an account?{' '}
            <Text
              style={styles.bottomTextTwo}
              onPress={() =>
                  navigation.navigate(RouteNames.signup)
              }>
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    );
  }

  const onPressGoogle = async () => {
   
  };


  const onPressApple = async () => {
 
  };

  function onPressFaceBook() {

  }

  return (
    <View style={{flex: 1, backgroundColor: theme.white}}>
      {/* <ImageBackground
        style={[
          general_style.screen_container,
          {backgroundColor: 'transparent', marginTop: StatusBar.currentHeight},
        ]}
        source={require('@/assets/images/patient.png')}
        resizeMode="contain"> */}
        <ScrollView style={{flex: 1}}>{loginContent()}</ScrollView>
        <Loader handle={load} />
      {/* </ImageBackground> */}
    </View>
  );
}



const mapStateToProps = state => ({
});

const mapDispatchToProps = {
  LoginApi: LoginApi,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
