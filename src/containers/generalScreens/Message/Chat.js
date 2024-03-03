import {
  Alert,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
// import Header from '../components/Header';
// import {colors} from '../../../assets/theme';
// import {images} from '../../../assets/images';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import auth, {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useEffect, useState} from 'react';
// import { Functions } from './../Function/CommonFunction'
import {Component} from 'react';
// import messaging from '@react-native-firebase/messaging';
// import FastImage from 'react-native-fast-image';
import {connect} from 'react-redux';
// import Input from '../../../components/Input';
import ChatBar from '../../../components/ChatBar';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import {useNavigation} from '@react-navigation/native';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MasterData: [],
      Chats: [],
      loading: false,
      chatsHolder: [],
      UID: auth()?.currentUser?.uid,
    };
  }
  componentDidMount() {
    this.GetMessage();
  }

  Filtering = async text => {
   
    // if (text) {
    //   const newData = this.state.Chats.filter(function (item) {
        
    //     const itemData = item.data.FromName
    //     ? item.data.FromName.toUpperCase()
    //     : ''.toUpperCase();
    //     const textData = text.toUpperCase();
    //     return itemData.indexOf(textData) > -1;
    //   });

    //   this.setState({
    //     Chats: newData,
    //   })
    //   // setFilteredDataSource(newData);

    // } else {
      
    //   // setFilteredDataSource(masterDataSource);
    //   this.setState({
    //     Chats: this.state.MasterData,
    //   })
      
    // }
  };

  GetMessage = async () => {
    firestore()
      .collection('chats')
      .where('from', '==', auth().currentUser?.uid)
      .orderBy('sentOn', 'desc')
      .onSnapshot(querySnapshot => {
        if (querySnapshot?.docs.length > 0) {
          querySnapshot?.docs.map(documentSnapshot => {
            if (documentSnapshot.data().sentOn != null) {
              let result = {
                FromName: documentSnapshot.data().FromName,
                ToName: documentSnapshot.data().ToName,
                from: documentSnapshot.data().from,
                // fromFMCToken: documentSnapshot.data().fromFMCToken,
                // fromProfileImage: documentSnapshot.data().fromProfileImage,
                lastMessage: documentSnapshot.data().lastMessage,
                sentOn: documentSnapshot.data().sentOn,
                status: documentSnapshot.data().status,
                to: documentSnapshot.data().to,
                // toFMCToken: documentSnapshot.data().toFMCToken,
                // toProfileImage: documentSnapshot.data().toProfileImage,
                id: documentSnapshot.data().id,
                sortby: null,
              };
              result.sortby = documentSnapshot.data().sentOn.seconds;
              let respDate = new Date(result?.sentOn?.seconds * 1000);
              // result.sentOn = Functions.MessageTime(respDate)
              let todayDate = new Date();
              if (respDate.getDate() < todayDate.getDate()) {
                result.sentOn = respDate.toLocaleDateString();
              } else {
                let h = respDate.getHours();
                let m = respDate.getMinutes();
                var ampm = h >= 12 ? 'pm' : 'am';
                h = h % 12;
                h = h ? h : 12; // the hour '0' should be '12'
                m = m < 10 ? '0' + m : m;
                // console.log(h, m)
                result.sentOn = h + ':' + m + ' ' + ampm;
              }
              const Chats = this.state.Chats.filter(
                chat => chat.id !== documentSnapshot.id,
              );
              this.setState({
                Chats: [...Chats, {id: documentSnapshot.id, data: result}],
                loading: false,
              });
            }
          });
        }
      });

    firestore()
      .collection('chats')
      .where('to', '==', auth().currentUser?.uid)
      .orderBy('sentOn', 'desc')
      .onSnapshot(querySnapshot => {
        if (querySnapshot?.docs.length > 0) {
          querySnapshot?.docs.map(documentSnapshot => {
            if (documentSnapshot.data().sentOn != null) {
              let result = {
                FromName: documentSnapshot.data().FromName,
                ToName: documentSnapshot.data().ToName,
                from: documentSnapshot.data().from,
                // fromFMCToken: documentSnapshot.data().fromFMCToken,
                // fromProfileImage: documentSnapshot.data().fromProfileImage,
                lastMessage: documentSnapshot.data().lastMessage,
                sentOn: documentSnapshot.data().sentOn,
                status: documentSnapshot.data().status,
                to: documentSnapshot.data().to,
                // toFMCToken: documentSnapshot.data().toFMCToken,
                // toProfileImage: documentSnapshot.data().toProfileImage,
                id: documentSnapshot.data().id,
                sortby: null,
              };
              result.sortby = documentSnapshot.data().sentOn.seconds;
              let respDate = new Date(result?.sentOn?.seconds * 1000);
              // result.sentOn = Functions.MessageTime(respDate)
              let todayDate = new Date();
              if (respDate.getDate() < todayDate.getDate()) {
                result.sentOn = respDate.toLocaleDateString();
              } else {
                let h = respDate.getHours();
                let m = respDate.getMinutes();
                var ampm = h >= 12 ? 'pm' : 'am';
                h = h % 12;
                h = h ? h : 12; // the hour '0' should be '12'
                m = m < 10 ? '0' + m : m;
     
                result.sentOn = h + ':' + m + ' ' + ampm;
              }
              const Chats = this.state.Chats.filter(
                chat => chat.id !== documentSnapshot.id,
              );
              this.setState({
                Chats: [...Chats, {id: documentSnapshot.id, data: result}],
                loading: false,
              });
            }
          });
        }
      });
  };

  render() {

    // console.log("this?.state?.Chats==>",this?.state?.Chats);

    return (
      <View style={styles.container}>

        <SafeAreaView>
        <StatusBar backgroundColor="white" barStyle="dark-content" />

        <View style={{width: '85%', alignSelf: 'center', marginTop: 20}}>
          <Text style={{fontSize: 5, color: 'black'}}>Messages</Text>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <AntDesign
              name="search1"
              size={25}
              color={"#000"}
              style={styles.searchIcon}
            />
          </View>
        </View>

        <View style={{alignSelf: 'center', width: '100%', paddingTop: 15}}>
          <FlatList
            data={this?.state?.Chats?.sort(
              (a, b) => a?.data?.sortby < b?.data?.sortby,
            )}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => {
              return (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '90%',
                  }}>
                  <Text>No Chat found</Text>
                </View>
              );
            }}
            renderItem={({item, index}) => {
              return (
                <ChatBar
                  name={
                    this.state.UID == item.data.from
                      ? item.data.ToName
                      : item.data.FromName
                  }
                  lastMessage={item.data.lastMessage}
                  howMuchAgo={item.data.sentOn}
                  onPress={() =>{

                    this.props.navigation.navigate('ChatScreen', {
                      itemData: {
                        fullName:
                          item.data.from == this.state.UID
                            ? item.data.ToName
                            : item.data.FromName,
                        firebase_id:
                          item.data.from == this.state.UID
                            ? item.data.to
                            : item.data.from,
                        // profile:
                        //   item.data.from == this.state.UID
                        //     ? item.data.toProfileImage
                        //     : item.data.fromProfileImage,
                        // device_token:
                        //   item.data.from == this.state.UID
                        //     ? item.data.toFMCToken
                        //     : item.data.fromFMCToken,
                      },
                    })

                  }}
                />
              );
            }}
          /> 
        </View>

        </SafeAreaView>
      </View>
    );
  }
}

const mapStateToProp = state => ({
  signupData: state?.AuthReducer?.signupData,
});
export default connect(mapStateToProp, null)(Chat);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  main: {
    width: '100%',
    paddingBottom: 5,
    // backgroundColor: 'red'
  },
  Chatcontainer: {
    alignSelf: 'center',
    width: 90,
    borderRadius: 10,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    // borderWidth:1,
    // borderColor: 'gray',
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    // shadowOffset: {
    //   width: 1,
    //   height: 1,
    // },
    // shadowOpacity: 5,
    // shadowRadius:5,

    // elevation: 7,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'gray',
  },
  discription: {
    color: '#14195A',
    fontSize: 15,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  subdiscription: {
    color: '#14195A',
    fontSize: 14,
    marginLeft: 10,
  },
  value: {
    color: "#000",
  },
  time: {
    position: 'absolute',
    top: 15,
    right: 20,
  },
  detailContainer: {
    width: 50,
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  searchIcon: {
    position: 'absolute',
    right: 10,
    bottom: 35,
  },
});
