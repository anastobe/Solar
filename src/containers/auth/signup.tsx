import React, { useState } from "react";
import { Text, View, Pressable, Image, TouchableOpacity, ScrollView, StatusBar } from "react-native";
import styles from '@/assets/styles/authstyles/signup';
import { showMessage } from "react-native-flash-message";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/Button";
// import ApplyBtn from "@/components/ApplyBtn";
import Button from '@/components/button';
import { FONT_FAMILY, RouteNames } from "@/constants/index";
import InputField from "@/components/inputField";
import PasswordField from "@/components/passwordField";
import theme from "@/assets/styles/theme";
import ImgButton from "@/components/imgBtn";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import { useNavigation } from "@react-navigation/native";
import { RegisterApi } from "@/Redux/Action/AuthActions/authActions";
import { connect } from "react-redux";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import SimpleLoader from "@/components/simpleLoader";

const Signup  = props => {

    const navigation = useNavigation();
    const [isChecked, setIsChecked] = useState(false);
    const [load, setload] = useState(false);
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firebase_id, setfirebase_id] = useState('');
    const [cnfrm_password, setcnfrm_Password] = useState('');
    const [usertype, setusertype] = useState('');
    const [isInvalidUsername, setIsInvalidUsername] = useState('');
    const [isInvalidEmail, setIsInvalidEmail] = useState('');
    const [isInvalidPassword, setIsInvalidPassword] = useState(false);
    const [isInvalidCnfrmPassword, setIsInvalidCnfrmPassword] = useState('');
    const [hide, setHide] = useState(true);
    const [hide2, setHide2] = useState(true);

    async function Api_SignUp(data) {

    let response = await props.RegisterApi(data,navigation);

    if (response) {
        setEmail('')
        setUserName('')
        setPassword('')
        setcnfrm_Password('')
        setload(false)
        navigation.navigate(RouteNames.login);
      } else {
        
        setload(false)
      }

       
    }

    const nextButton =async () => {
        const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/

        if (username.length < 3) {
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
                message: "Please enter Username",
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
        else if (password !== cnfrm_password) {
          showMessage({
              message: "Password And Confirm Password is not Same",
              type: "default",
              backgroundColor: "#0760F0",
              color: "white",
              statusBarHeight : StatusBar.currentHeight
          });
          return
      }
      else if (usertype == '') {
        showMessage({
            message: "Please Select User Role",
            type: "default",
            backgroundColor: "#0760F0",
            color: "white",
            statusBarHeight : StatusBar.currentHeight
        });
        return
      }   
        else {   
          setload(true)       
            let data = {
              name: username,
              email: email,
              password: password,
              password_confirmation: cnfrm_password,
              tc: true,
              type: usertype,
              payment: false,
              profileImage: "String"
            };

            auth()
            .createUserWithEmailAndPassword(data.email, password)
            .then((res) => {
              const UID = auth().currentUser.uid;
              setfirebase_id(UID)
              firestore()
                .collection('Users')
                .doc(`${UID}`)
                .set({
                  type: 'basic',
                  full_name: username,
                  email: email,
                  device_token: 'abc token',
                  profilePic: "isState.pic",
                  uid: UID,
                  status: true,
                  room: ""
                })
                .then(() => {
                  Api_SignUp(data)
                }).catch(error => {
                  console.log("error in Api_SignUp",error)
                })
              })
            .catch(error => {
              if (error.code === 'auth/email-already-in-use') {
                showMessage({
                  message: 'That email address is already in use!',
                  type: "default",
                  backgroundColor: "#0760F0",
                  color: "white",
                  statusBarHeight : StatusBar.currentHeight
              });
              }
              else if (error.code === 'auth/invalid-email') {
                showMessage({
                  message:  'That email address is invalid!',
                  type: "default",
                  backgroundColor: "#0760F0",
                  color: "white",
                  statusBarHeight : StatusBar.currentHeight
              });
              }
              else if (error.code === 'auth/network-request-failed') {
                showMessage({
                  message:  'The email address is already in use by another account.',
                  type: "default",
                  backgroundColor: "#0760F0",
                  color: "white",
                  statusBarHeight : StatusBar.currentHeight
              });
            }
            
            setload(false)         
              return
            })
            
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

    const handleSetCnfrmPassword = (inputPwd) => {
      setcnfrm_Password(inputPwd)
      if (isInvalidCnfrmPassword) {
        setIsInvalidCnfrmPassword(false)
      }
  }
  
  const selecteduserType = (type: string) =>{
    setusertype(type)
  }
  
  console.log("===>",usertype);
  
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
                  placeholder="Enter Username"
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

            <PasswordField
              marginTp={12}
              heading="Confirm Password"
              value={cnfrm_password}
              onChangeText={handleSetCnfrmPassword}
              placeholder="Enter your Password"
              image={
              !hide2
                  ? "eye"
                  : "eye-closed"
              }
              isInvalidPassword={isInvalidCnfrmPassword}
              secureEntry={hide}
              tintColor={'#2E90BF'}
              onPressImg={() => setHide2(!hide2)}
            />

            <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-around" }} >
              <TouchableOpacity onPress={()=>{ selecteduserType('provider') }} style={{ width: 120, height: 50, backgroundColor: usertype == 'provider' ? "blue" : "#f4f4f4", borderRadius: 5, borderWidth: 1, borderColor: "#000", justifyContent: "center" }} >
                <Text style={[styles.optTxt,{ color:  usertype == 'provider' ? "#fff" : "#000" }]} >Provider</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>{ selecteduserType('user') }} style={{ width: 120, height: 50, backgroundColor:  usertype == 'user' ? "blue" : "#f4f4f4", borderRadius: 5, borderWidth: 1, borderColor: "#000", justifyContent: "center" }} >
                <Text style={[styles.optTxt,{ color:  usertype == 'user' ? "#fff" :  "#000" }]} >User</Text>
              </TouchableOpacity>
            </View>

              <View style={{marginVertical: 13, marginTop: 20}}>
                <Text style={styles.orButton}>or</Text>
              </View>

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
        <SimpleLoader loader={load}  />
      </View>
    );
}



const mapStateToProps = state => ({});

const mapDispatchToProps = {
  // SignUpApi: SignUpApi,
  RegisterApi: RegisterApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
