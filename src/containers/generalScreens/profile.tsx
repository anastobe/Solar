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
  ScrollView
} from 'react-native';
import React, {useEffect, useState} from 'react';
import SafeScrollView from '@/components/safeScrollView';
import Header from '@/components/header';
import theme from '@/assets/styles/theme';
import styles from '@/assets/styles/profilestyle';
import ImagePicker from 'react-native-image-crop-picker';
import {PERMISSIONS, request} from 'react-native-permissions';
import {FONT_FAMILY, RouteNames} from '@/constants';
import { patProfile} from '@/utils/data';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {connect, useDispatch, useSelector} from 'react-redux';
import Octicons from 'react-native-vector-icons/Octicons';
import { GetProfileData, Logout } from '@/Redux/Action/AuthActions/authActions';

const Profile = props => {

  const{email, name, type } = props?.profileData

  const navigation = useNavigation();
  const dispatch = useDispatch()
  const Focus= useIsFocused()

  useEffect(() => {
    getProfile();
  }, [Focus]);

  const getProfile = async () => {
    await props.GetProfileData(props.token);
  };
    
  const [pic, setPic] = useState();

  const IosPerHandler = () => {
    request(PERMISSIONS.IOS.PHOTO_LIBRARY)
      .then(result => {
        if (result == 'granted' || result == 'limited') {
          ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            cropperCircleOverlay: true,
          }).then(image => {
            setPic(image?.path);
            console.log(image?.path);
          });
        } else {
          Alert.alert('', 'Please Give Permissions', [
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
          Alert.alert('', 'Please Give Permissions', [
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
        Alert.alert(err);
      });
  };

  const GetProfilePic = () => {
    if (Platform.OS == 'ios') {
      IosPerHandler();
    } else if (Platform.OS == 'android') {
      AndroidPerHandler();
    }
  };

  const [modalVisible, setModalVisible] = useState(false);

  const HandleNavigation = id => {
    if (id == 1) {
      navigation.navigate(RouteNames.editProfile);
    } else if (id == 2) {
      alert("appoinment historu")
    } else if (id == 3) {
      Alert.alert('Pressed Payment Method');
    } else if (id == 4) {
      navigation.navigate(RouteNames.patientSetting);
    } else if (id == 6) {
      setModalVisible(true);
    }
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => HandleNavigation(item.id)}
        activeOpacity={1}
        key={item.id}>
        <View style={styles.flatlistMain}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.mainImgView}>
              <Image source={item.img} style={styles.mainImg} />
            </View>
            <View style={styles.flatlistHeadingView}>
              <Text style={styles.flatlistHeadingText}>{item.heading}</Text>
            </View>
          </View>
          <View style={styles.arrowImgView}>
            {/* <Image
              source={require('@/assets/images/patient.png')}
              style={styles.arrowImg}
            /> */}
          </View>
        </View>
        {item.heading == 'Sign Out' ? null : (
          <View style={styles.horizontalLine}></View>
        )}
      </TouchableOpacity>
    );
  };
  

  return (
    <SafeScrollView>
      <View>
        <View style={styles.headerView}>
          <Header
            onPress={() => navigation.goBack()}
            marginHor={20}
            heading="My Profile"
            textColor={theme.black}
          />
        </View>
        
        <Modal
          visible={modalVisible}
          transparent={true}
          statusBarTranslucent
          onRequestClose={() => {
            setModalVisible(false);
          }}>
          <View style={styles.modalView}>
            <View style={styles.modalSubViewTwo}>
              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: 10,
                  marginLeft: 10,
                }}>
                <Image
                  source={require('@/assets/images/patient.png')}
                  style={styles.powerImg}
                />
                <Text style={styles.signOutText}>Sign out</Text>
              </View>
              <View>
                <Text style={styles.surityText}>
                  Are you sure you want to sign out?
                </Text>
              </View>
              <View style={styles.yesNoView}>
                <Pressable
                  style={styles.yesTextView}
                  onPress={() => {
                    setModalVisible(false);
                    props.Logout();
                  }}>
                  <Text style={styles.yesText}>Yes</Text>
                </Pressable>
                <Pressable
                  style={styles.cancelTextView}
                  onPress={() => setModalVisible(false)}>
                  <Text style={styles.cancelText}>Cancel</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.topView}>
            <View style={styles.imgView}>
              <Image
                source={ require('@/assets/images/user.png') }
                style={styles.manImg}
              />
            </View>
            <View style={styles.topTextView}>
              <Text style={styles.nameText}>{name}</Text>
              <Text style={styles.noText}>{email}</Text>
            </View>
          </View>

          <View style={styles.profileView}>
            <Text style={styles.profileText}>My Profile</Text>
          </View>

          <SectionList
            sections={patProfile}
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => item + index}
            renderItem={renderItem}
            ListFooterComponent={<View style={{height: 100 + 90}}></View>}
            renderSectionHeader={({section: {title}}) =>
              title == 'Preference' && (
                <View style={[styles.prefView, {marginBottom: 0}]}>
                  {/* niche se 38 so 23 + 15 = 38 ha  */}
                  <Text style={styles.prefText}>{title}</Text>
                </View>
              )
            }
          />
        </ScrollView>
      </View>
    </SafeScrollView>
  );
}


const mapStateToProps = state => ({
  token: state.AuthReducer.token,
  profileData: state.AuthReducer.profileData

});

const mapDispatchToProp = {
  GetProfileData: GetProfileData,
  Logout: Logout
};

export default connect(mapStateToProps, mapDispatchToProp)(Profile);



