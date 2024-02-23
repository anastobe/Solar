import {
  View,
  Text,
  Image,
  Pressable,
  Platform,
  Linking,
  Modal,
  Alert,
  SectionList,
  TouchableOpacity,
  FlatList,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import SafeScrollView from '@/components/safeScrollView';
import Header from '@/components/header';
import theme from '@/assets/styles/theme';
import styles from '@/assets/styles/editprofile';
import {
  check,
  checkMultiple,
  PERMISSIONS,
  request,
  requestMultiple,
} from 'react-native-permissions';
import {FONT_FAMILY, RouteNames} from '@/constants';
import {Shadow} from 'react-native-shadow-2';
import {Metrics} from '@/assets/metrics/metrics';
import Button from '@/components/button';
import ImagePicker from 'react-native-image-crop-picker';
import PickImg from '@/components/pickImg';
import moment from 'moment';
// import DatePicker from 'react-native-date-picker';
// import GlobalModal from '@/components/globalModal';
// import DropDownMenu from '@/components/dropDownMenu';
import {useNavigation} from '@react-navigation/native';
import {connect, useSelector} from 'react-redux';
import Octicons from 'react-native-vector-icons/Octicons';
import { Edit_Profile, GetProfileData } from '@/Redux/Action/AuthActions/authActions';
import InputField from '@/components/inputField';
import { showMessage } from 'react-native-flash-message';

const EditProfile = props => {

  const navigation = useNavigation();
  // const signupDta = useSelector(state => state?.userReducer?.signupData);

  console.log("===user data==>",props?.profileData);
  

  const [isState, setIsState] = useState({
    id: '',
    name: '',
    email: '',
    type: ''
  });
  const [pic, setPic] = useState();
  

  useEffect(() => {
    setIsState({...isState, 
      name: props?.profileData?.name,
      email: props?.profileData?.email,
      id: props?.profileData?._id
    })
  }, []);

  const GetProfilePic = () => {
    if (Platform.OS == 'ios') {
      IosPerHandlerForImg();
    } else if (Platform.OS == 'android') {
      AndroidPerHandler();
    }
  };

  const IosPerHandlerForImg = () => {
    request(PERMISSIONS.IOS.PHOTO_LIBRARY)
      .then(result => {
        if (result == 'granted' || result == 'limited') {
          ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            cropperCircleOverlay: true,
          })
            .then(image => {
              setPic(image?.path);
              console.log(image?.path);
            })
            .catch(err => {
              // alert(err)
            });
        } else {
          Alert.alert('', 'Please Give Permissions To Access Your Gallery', [
            {text: 'Cancel'},
            {
              text: 'Yes',
              onPress: () => {
                Linking.openSettings();
              },
            },
          ]);
        }
      })
      .catch(err => {
        console.log('==>', err);
      });
  };

  const AndroidPerHandler = async () => {
    request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)
      .then(result => {
        if (result == 'granted') {
          ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            cropperCircleOverlay: true,
          })
            .then(image => {
              setPic(image?.path);
              console.log(image?.path);
            })
            .catch(err => {
              console.log('==>', err);
            });
        } else {
          Alert.alert('', 'Please Give Permissions To Access Your Gallery', [
            {text: 'Cancel'},
            {
              text: 'Yes',
              onPress: () => {
                Linking.openSettings();
              },
            },
          ]);
        }
      })
      .catch(err => {
        alert(err);
      });
  };

  async function update() {

    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (regEmail.test(isState.email) === false) {
      showMessage({
        message: 'Please Enter a valid email',
        type: 'default',
        backgroundColor: theme.lightblue,
        color: theme.white,
        statusBarHeight: StatusBar.currentHeight,
      });
      return;
    } 
    else if(isState.name.length < 4){
      showMessage({
        message: 'Your name must be 4 Digit character long',
        type: 'default',
        backgroundColor: theme.lightblue,
        color: theme.white,
        statusBarHeight: StatusBar.currentHeight,
      });
      return;
    }
    else{
      let data = {
        id: isState.id,
        name: isState.name,
        email: isState.email
      };
      let res = await props.Edit_Profile(data, props?.token);
      if (res) {
        // alert("profile updated");
        
        // props.GetProfileData()
        navigation.goBack();
      }
      else{
        showMessage({
          message: 'Something Went Wrong',
          type: 'default',
          backgroundColor: theme.lightblue,
          color: theme.white,
          statusBarHeight: StatusBar.currentHeight,
        });
      }
    }

    
  }


  return (
    <SafeScrollView>
      <View style={styles.subContainer}>
        <View style={styles.headerView}>
          <Header
            onPress={() => navigation.goBack()}
            heading="My Information"
            textColor={theme.black}
          />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.txtStyle}>
            Change if the information is misleading
          </Text>

          <PickImg
            img={
               require('@/assets/images/person.png')
            }
            onPress={GetProfilePic}
            imgBack={styles2.imgBack}
            imgInside={styles2.imgInside}
            cameraView={styles2.cameraView}
            shadowSty={styles2.shadowSty}
            cameraImg={styles2.cameraImg}
          />

          <InputField
            marginTp={20}
            heading="Email"
            autoCapital={'none'}
            blurOnSubmit={false}
            placeholder="Enter your Email"
            value={isState.email}
            onChangeText={text => setIsState({...isState, email: text})}
            keyboardType={'email-address'}
          />


          <InputField
            marginTp={20}
            heading="Name"
            autoCapital={'none'}
            blurOnSubmit={false}
            placeholder="Enter your Name"
            value={isState.name}
            onChangeText={text => setIsState({...isState, name: text})}
            // keyboardType={'email-address'}
          />

        <Button
          marginTp={30}
          width={Metrics.width - 40}
          onPress={update}
          distance={1}
          // marginHorizontal={20}
          title="Send"
          txtColor={theme.white}
          bgcolor={theme.lightblue}
          disabledColor={theme.white}
        />
        </ScrollView>


      </View>
    </SafeScrollView>
  );
}


const mapStateToProps = state => ({
  editProfile: state.AuthReducer.editProfile,
  profileData: state.AuthReducer.profileData,
  token: state.AuthReducer.token,

});

const mapDispatchToProp = {
  Edit_Profile: Edit_Profile,
  // GetProfileData: GetProfileData

};

export default connect(mapStateToProps, mapDispatchToProp)(EditProfile);





const styles2 = StyleSheet.create({
  imgBack: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
  },
  imgInside: {
    width: 100,
    height: 100,
    // backgroundColor: "red",
    borderRadius: 100,
    resizeMode: 'cover',
  },
  shadowSty: {
    width: 23,
    height: 23,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraImg: {
    width: 10,
    height: 9,
    resizeMode: 'contain',
  },
  cameraView: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 33,
    height: 33,
    backgroundColor: theme.white,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});





