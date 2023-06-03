import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  Modal,
  Pressable,
  Keyboard,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '@/assets/styles/authstyles/forgotPass';
import InputField from '@/components/inputField';
import PasswordField from '@/components/passwordField';
import Button from '@/components/button';
import theme from '@/assets/styles/theme';
import {RouteNames} from '@/constants';
import {Metrics} from '@/assets/metrics/metrics';
import { showMessage } from 'react-native-flash-message';
import SafeScrollView from '@/components/safeScrollView';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ResetPass({navigation}) {
  const [password, setPassword] = useState('');
  const [invalidPwd, setInvalidPwd] = useState(false)
  const [confirmPwd, setConfirmPwd] = useState('');
  const [invalidCPwd, setInvalidCPwd] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);
  const [hide, setHide] = useState(true);
  const [cHide, setChide] = useState(true);
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

  const regPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;

  const onClick = () => {
    if (!regPassword.test(password)) {
      showMessage({
        message:
          'Password must contain 8 characters atleast 1 Upper 1 Lower 1 special',
        type: 'default',
        backgroundColor: theme.lightblue,
        color: 'white',
        statusBarHeight: StatusBar.currentHeight,
      });
      setInvalidPwd(true);
      return;
    } else if (confirmPwd !== password) {
      showMessage({
        message: "Your password didn't match",
        type: 'default',
        backgroundColor: theme.lightblue,
        color: 'white',
        statusBarHeight: StatusBar.currentHeight,
      });
      setInvalidCPwd(true);
      return;
    } else {
      setModalVisible(true)
      setPassword('')
      setConfirmPwd('')
    }
  }

  function renderContent() {
    return (
      <View>
        <Modal
          visible={modalVisible}
          transparent={true}
          statusBarTranslucent
          onRequestClose={() => {
            setModalVisible(false);
          }}>
          <View style={[styles.modalMainView]}>
            <View style={styles.modalSubView}>
              <Pressable
                style={styles.crossImgView}
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate(RouteNames.login);
                }}>
                  <Ionicons name="close" size={30} />
              </Pressable>
              <View style={styles.pwdResetView}>
                <Text style={styles.pwdResetText}>
                  Password Reset Successful
                </Text>
              </View>
              <View style={styles.successView}>
                <Text style={styles.successText}>
                  You’ve successfully reset the new password. you can now login
                  with the new password.
                </Text>
              </View>
            </View>
          </View>
        </Modal>

        <View
          style={[
            styles.topImgView,
            {marginTop: 10},
          ]}>
          <Image
            source={require('@/assets/images/reset.png')}
            style={[
              styles.topImg,
              {
                width:
                  // isKeyboardVisible ? 70 : Metrics.height < 680 ? 123 :
                  173,
                height:
                  // isKeyboardVisible ? 90 :  Metrics.height < 680 ? 140 :
                  190,
              },
            ]}
          />
        </View>

        <View style={[styles.resetPwdView, {marginTop: 36}]}>
          <Text style={styles.resetPwdText}>Reset Your Password</Text>
        </View>
        <View style={styles.pwdHintView}>
          <Text style={styles.pwdHintText}>Strong passwords include number, letter, and punctuation marks. </Text>
        </View>
        <View style={{marginHorizontal: 20}}>
          <PasswordField
            heading="Enter new password"
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your Password"
            image={
              !hide
                ? "eye"
                : "eye-closed"
            }
            secureEntry={hide}
            tintColor={'#2E90BF'}
            onPressImg={() => setHide(!hide)}
            onSubmitEditing={() => {
              this.confrmpassInpInput.focus();
            }}
            inputRef={input => {
              this.passInpInput = input;
            }}
          />
        </View>
        <View style={{marginHorizontal: 20}}>
          <PasswordField
            marginTp={12}
            heading="Enter confirm password"
            value={confirmPwd}
            onChangeText={setConfirmPwd}
            placeholder="Enter your Confirm Password"
            image={
              !cHide
                ? "eye"
                : "eye-closed"
            }
            secureEntry={cHide}
            tintColor={'#2E90BF'}
            onPressImg={() => setChide(!cHide)}
            onSubmitEditing={() => {
              this.passInpconfrmInput.focus();
            }}
            inputRef={input => {
              this.confrmpassInpInput = input;
            }}
          />
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
          title="Reset Password"
          distance={5}
          bgcolor={theme.lightblue}
          txtColor={theme.white}
          marginHorizontal={20}
          disabledColor={theme.white}
          disabled={!password || !confirmPwd}
          onPress={onClick}
        />
      </View>
    );
  }

  return (
    <SafeScrollView screenCol={theme.white} barCol={theme.white}  >
      {/* <View style={{height: Metrics.height - 85}}>

        {Platform.OS == 'ios' ? (
          <KeyboardAwareScrollView
            alwaysBounceVertical={false}
            // enableOnAndroid={true}
            showsVerticalScrollIndicator={false}
            // extraScrollHeight={Platform.OS == 'ios' ? 0 : 130}
          >
            {renderContent()}
          </KeyboardAwareScrollView>
        ) : (
          <KeyboardAvoidingView keyboardVerticalOffset={20} behavior={'height'}>
            <ScrollView>{renderContent()}</ScrollView>
          </KeyboardAvoidingView>
        )}
      </View>
      {renderBtn()} */}

      <ScrollView>
        <View style={{height: Metrics.height - 85}}>{renderContent()}</View>
        {renderBtn()}
      </ScrollView>

    </SafeScrollView>
  );
}