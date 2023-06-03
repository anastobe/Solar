import React, {createRef, useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SafeScrollView from '@/components/safeScrollView';
import styles from '@/assets/styles/authstyles/forgotPass';
import InputField from '@/components/inputField';
import {Metrics} from '@/assets/metrics/metrics';
import theme from '@/assets/styles/theme';
import Button from '@/components/button';
import {RouteNames} from '@/constants';
import {useNavigation} from '@react-navigation/native';
import {showMessage} from 'react-native-flash-message';

const ForgotPassword = () => {
  const navigation = useNavigation();

  const inputRef = useRef(null);
  const [email, setEmail] = useState('');
  const [isInvalidEmail, setIsInvalidEmail] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

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

  const handleSetEmail = inputEmail => {
    setEmail(inputEmail);
    if (isInvalidEmail) {
      setIsInvalidEmail(false);
    }
  };

  const onClick = () => {
    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (regEmail.test(email) === false) {
      showMessage({
        message: 'Please Enter a valid email',
        type: 'default',
        backgroundColor: theme.lightblue,
        color: theme.white,
        statusBarHeight: StatusBar.currentHeight,
      });
      setIsInvalidEmail(true);
      return;
    } else {
      navigation.navigate(RouteNames.passVerification);
    }
  };

  function renderContent() {
    return (
      <View style={{marginHorizontal: 20}}>
        <View
          style={[
            styles.logoView,
            {marginTop: Metrics.height < 650 ? 40 : 80},
          ]}>
          <Image
            source={require('@/assets/images/forgotPass.png')}
            style={{
              width:
                // isKeyboardVisible ? 90 : Metrics.height < 680 ? 160 :
                196,
              height:
                // isKeyboardVisible ? 90 : Metrics.height < 650 ? 160 :
                190,
              resizeMode: 'contain',
            }}
          />
        </View>

        <View>
          <Text style={styles.ForgetTxt}>Forgot Password</Text>
          <Text style={styles.DontWorrTxt}>
            {'Don’t worry we will help you recover \n your password'}
          </Text>
        </View>

        <InputField
          margTp={46}
          heading="Email"
          inputRef={inputRef}
          blurOnSubmit={false}
          placeholder="Enter your Email"
          value={email}
          onChangeText={handleSetEmail}
          keyboardType={'email-address'}
          invalid={isInvalidEmail}
          autoCapital={'none'}
        />
      </View>
    );
  }

  function renderBtn() {
    return (
      <View
        style={[
          styles.btnFloat,
          Platform.OS == 'ios'
            ? {position: 'absolute', bottom: 5}
            : {position: 'relative'},
        ]}>
        <Button
          width={Metrics.width - 40}
          onPress={onClick}
          distance={1}
          disabled={!email}
          marginHorizontal={20}
          title="Send"
          txtColor={theme.white}
          bgcolor={theme.lightblue}
          disabledColor={theme.white}
        />
      </View>
    );
  }

  return (
    <SafeScrollView screenCol={theme.white} barCol={theme.white}  >
      <ScrollView>
        <View style={{height: Metrics.height - 85}}>{renderContent()}</View>
        {renderBtn()}
      </ScrollView>
    </SafeScrollView>
  );
};

export default ForgotPassword;