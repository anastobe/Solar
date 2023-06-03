import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  StatusBar,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
} from 'react-native';
import styles from '@/assets/styles/authstyles/forgotPass';
import Button from '@/components/button';
import theme from '@/assets/styles/theme';
import OtpInputs from 'react-native-otp-inputs';
import {FONT_FAMILY, RouteNames} from '@/constants';
import {showMessage} from 'react-native-flash-message';
import {Metrics} from '@/assets/metrics/metrics';
import {useNavigation} from '@react-navigation/native';
import SafeScrollView from '@/components/safeScrollView';

export default function PasswordVerification() {
  const navigation = useNavigation();

  const [number, setNumber] = useState(4);
  // const [OTP, setOTP] = useState('');
  const _otpRef = useRef(null);
  const [isOTPValid, setIsOTPValid] = useState(false);
  const [visible, setVisible] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(10);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(prevTime => prevTime - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // function handleColor(value) {
  //   if (value?.length === 4) {
  //     setIsOTPValid(true);
  //   } else {
  //     setIsOTPValid(false);
  //   }
  //   setOTP(value);
  // }

  function resendOTP() {
    showMessage({
      message: 'OTP code has been resend',
      type: 'default',
      backgroundColor: theme.tealGreen,
      color: 'white',
      statusBarHeight: StatusBar.currentHeight,
    });
  }

  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  function onClick() {
    if (number?.length < 4) {
      showMessage({
        message: 'Please Enter Valid OTP',
        type: 'default',
        backgroundColor: theme.lightblue,
        color: theme.white,
        statusBarHeight: StatusBar.currentHeight,
      });
      return;
    } else {
      navigation.navigate(RouteNames.resetPass);
    }
  }

  function renderContent() {
    return (
      <View>
        <View
          style={[
            styles.topImgView,
            {marginTop: Metrics.height < 650 ? 40 : 80},
          ]}>
          <Image
            source={require('@/assets/images/forgotVer.png')}
            style={[
              styles.topImg,
              {
                width:
                  // isKeyboardVisible ? 115 :
                  173,
                height:
                  // isKeyboardVisible ? 110 :
                  190,
              },
            ]}
          />
        </View>
        <View
          style={[
            styles.headingView,
            {
              marginTop:
                // (isKeyboardVisible && Metrics.height < 650) ? 5 :
                35,
            },
          ]}>
          <Text style={styles.headingText}>OTP Verification</Text>
        </View>
        <View style={styles.otpView}>
          <View style={styles.emailView}>
            <Text style={styles.emailText}>sos@gmail.com</Text>
          </View>
          <View style={styles.afterEmailView}>
            <Text style={styles.afterEmailText}>
              Didn’t receive code?
              <Text style={styles.resendText} onPress={resendOTP}>
                {' '}
                Re-send
              </Text>
            </Text>
          </View>
          <View>
            <OtpInputs
              numberOfInputs={4}
              handleChange={value => setNumber(value)}
              autofillFromClipboard={false}
              ref={_otpRef}
              style={styles.otpInputView}
              keyboardType="phone-pad"
              // returnKeyType='done'
              inputContainerStyles={{
                borderRadius: 10,
                backgroundColor: isOTPValid ? '#F2F4F5' : 'white',
                justifyContent: 'center',
                width: 52,
                height: 52,
              }}
              inputStyles={styles.otpInputStyles}
            />
          </View>
          <View style={styles.timerView}>
            <Text style={styles.timerText}>
              {timeRemaining <= 0
                ? setTimeRemaining(10)
                : formatTime(timeRemaining)}{' '}
              Sec
            </Text>
          </View>
        </View>
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
          disabled={number?.length < 4 ? true : false}
          marginHorizontal={20}
          title="Submit"
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
}
