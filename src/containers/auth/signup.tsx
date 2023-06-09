// import React from 'react';
// import { Text, View } from 'react-native';
// import SafeScrollView from '@/components/safeScrollView';
// import theme from '@/assets/styles/theme';

// const Signup = () => {
//     return(
//         <SafeScrollView screenCol={theme.white} barCol={theme.white}  >
//             <Text>Signup</Text>
//         </SafeScrollView>
//     )
// };

// export default Signup






import React, { useState } from "react";
import { Text, View, Pressable, Image, TouchableOpacity, ScrollView, StatusBar } from "react-native";
import styles from '@/assets/styles/authstyles/signup';
import { showMessage } from "react-native-flash-message";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/Button";
// import ApplyBtn from "@/components/ApplyBtn";
import Button from '@/components/button';
import { FONT_FAMILY } from "@/constants/index";
import InputField from "@/components/inputField";
import PasswordField from "@/components/passwordField";
import theme from "@/assets/styles/theme";
import ImgButton from "@/components/imgBtn";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';

const Signup  = ({ navigation }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isInvalidUsername, setIsInvalidUsername] = useState('');
    const [isInvalidEmail, setIsInvalidEmail] = useState('');
    const [isInvalidPassword, setIsInvalidPassword] = useState('');
    const [hide, setHide] = useState(true);

    const nextButton = () => {
        const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/

        if (username.length < 3 || username.length > 20) {
            showMessage({
                message: "Username must have atleast 3 character",
                type: "default",
                backgroundColor: "#0760F0",
                color: "white",
                statusBarHeight : StatusBar.currentHeight
            });
            setIsInvalidUsername(true)
            return
        }
        else if (username === '') {
            showMessage({
                message: "Please enter name",
                type: "default",
                backgroundColor: "#0760F0",
                color: "white",
                statusBarHeight : StatusBar.currentHeight
            });
            setIsInvalidUsername(true)
            return
        }

        else if (email === '') {
            showMessage({
                message: "Please enter email",
                type: "default",
                backgroundColor: "#0760F0",
                color: "white",
                statusBarHeight : StatusBar.currentHeight
            });
            setIsInvalidEmail(true)
            return
        }
        else if (regEmail.test(email) === false) {
            showMessage({
                message: "Invalid Email",
                type: "default",
                backgroundColor: "#0760F0",
                color: "white",
                statusBarHeight : StatusBar.currentHeight
            });
            setIsInvalidEmail(true)
            return
        }
        else if (password === '') {
            showMessage({
                message: "Please enter password",
                type: "default",
                backgroundColor: "#0760F0",
                color: "white",
                statusBarHeight : StatusBar.currentHeight
            });
            setIsInvalidPassword(true)
            return
        }
        else if (!regPassword.test(password)) {
            showMessage({
                message: "Password must contain 8 characters atleast 1 Upper 1 Lower 1 Special",
                type: "default",
                backgroundColor: "#0760F0",
                color: "white",
                statusBarHeight : StatusBar.currentHeight
            });
            setIsInvalidPassword(true)
            return
        }
        else {
            navigation.goBack()
            setEmail('')
            setUserName('')
            setPassword('')
            return
        }
    }

    const handleSetUsername = (inputName) => {
        setUserName(inputName) 
        if (isInvalidUsername) {
            setIsInvalidUsername(false)
        }
    }

    const handleSetEmail = (inputEmail) => {
        setEmail(inputEmail)
        if (isInvalidEmail) {
            setIsInvalidEmail(false)
        }
    }

    const handleSetPassword = (inputPwd) => {
        setPassword(inputPwd)
        if (isInvalidPassword) {
            setIsInvalidPassword(false)
        }
    }

    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar />
        <SafeAreaView style={{marginHorizontal: 16}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              <Text style={styles.signUpHeading}>Sign Up</Text>
              <Text style={styles.signUpSubHeading}>
                It only takes a minute to create your account.
              </Text>
              <View style={{marginBottom: 10}}>
                <InputField
                //   margTp={46}
                  heading="Name"
                  blurOnSubmit={false}
                  placeholder="Enter your Name"
                  value={username}
                  onChangeText={handleSetUsername}
                  invalid={isInvalidUsername}
                  autoCapital={'none'}
                />
              </View>

                <InputField
                //   margTp={46}
                    heading="Email"
                    blurOnSubmit={false}
                    placeholder="Enter your Email"
                    value={email}
                    onChangeText={handleSetEmail}
                    keyboardType={'email-address'}
                    invalid={isInvalidEmail}
                    autoCapital={'none'}
                />

            <PasswordField
                marginTp={12}
                heading="Password"
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

              <View style={{marginVertical: 13, marginTop: 20}}>
                <Text style={styles.orButton}>or</Text>
              </View>

              <ImgButton
          marginTp={10}
          marginHorizontal={40}
          onPress={() => console.log("facebook")}
          title="Continue with Facebook"
          distance={0}
          borderWidth={1}
          borderColor={theme.lightblue}
          bgcolor={theme.white}
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
          marginHorizontal={40}
          onPress={() => console.log("google")}
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

            </View>
            {/* <View style={{height: 80}}></View> */}
            <View style={{marginTop: 20}}>
              <View style={{height: '30%'}}>
                <View style={styles.checkBox}>
                  <TouchableOpacity
                  activeOpacity={1}
                    onPress={() => {
                      setIsChecked(!isChecked);
                    }}
                    style={{
                      borderWidth: 1,
                      height: 20,
                      width: 20,
                      right: 5,
                      marginLeft: 5,
                      borderColor: theme.black,
                      borderRadius: 2,
                      justifyContent: 'center',
                      alignItems: "center"
                    //   backgroundColor: isChecked ? theme.lightblue : 'white',
                    }}>
                    {isChecked && (
                              <Octicons
                              name={"check"} 
                              size={15} 
                              color={theme.black} 
                            />
                    )}
                  </TouchableOpacity>
                  <Text style={styles.checkBoxText}>
                    <Text> Yes, I understand and agree to the Spread </Text>
                    <Text style={{color: '#0760F0'}}>Terms of Service</Text>,
                    including the{' '}
                    <Text style={{color: '#0760F0'}}>User Agreement</Text> and{' '}
                    {''}
                    <Text style={{color: '#0760F0'}}>Privacy Policy</Text>.
                  </Text>
                </View>
                <View>
                  <View
                    style={{
                    //   backgroundColor: isChecked ? '#0760F0' : '#E3E5E5',
                      borderRadius: 8,
                    }}>
                    <Button
                    marginTp={16}
                    title="Login"
                    disabled={false}
                    bgcolor={isChecked ? theme.lightblue : '#E3E5E5'}
                    txtColor={theme.white}
                    onPress={() => nextButton()}
                    // marginHorizontal={51}
                    distance={4.2}
                    disabledColor={theme.white}
                    />
                  </View>
                  <View style={styles.alreadyAccount}>
                    <Text
                      style={{
                        fontFamily: FONT_FAMILY.InterSemiBold,
                        color: '#72777A',
                      }}>
                      Already have an account?
                    </Text>
                    <Pressable onPress={() => navigation.goBack()}>
                      <Text
                        style={{
                          color: theme.lightblue,
                          fontFamily: FONT_FAMILY.InterSemiBold,
                        }}>
                        {' '}
                        Sign in
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
}

export default Signup