import { ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, AppState } from 'react-native'
import React,{ useEffect, useState, useCallback } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { colors } from '../../../assets/theme'
import {images} from '../../../assets/images'
import Icon from 'react-native-vector-icons/Ionicons'
import { Bubble, Composer, GiftedChat, InputToolbar, Send } from 'react-native-gifted-chat';
import auth, { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { connect } from 'react-redux'
// import { SendNotification } from '../../../constant/helperFunctions'
import { useIsFocused } from '@react-navigation/native'

const ChatScreen = ({...props}) => {

    const { itemData } = props.route.params;
    const UID = auth().currentUser.uid
    const [messages, setMessages] = useState([]);
    const [currentChatId, setCurrentChatId] = useState('');

    const focus = useIsFocused();


    useEffect(() => {
      GetcurrentUser()
      UpdateRoom(itemData.firebase_id)
    }, []);
  
    useEffect(() => {
      const subscription = AppState.addEventListener("change", nextAppState => {
        if (nextAppState === 'active') {
          UpdateRoom(itemData.firebase_id)
        }
      });
  
      return () => {
        subscription.remove();
      };
    }, []);
  
    const HandleBackPress = () => {
      UpdateRoom("")
      props.navigation.goBack()
    }
  
    function handleBackButtonClick() {
      UpdateRoom("")
      props.navigation.goBack();
      return true;
    }
    const UpdateRoom = (_id) => {
      firestore()
        .collection('Users')
        .doc(UID)
        .update({
          room: _id
        })
        .then(() => {
          console.log("User added to room")
        })
    }
  
    const customtInputToolbar = props => {
      return (
        <InputToolbar
          {...props}
          containerStyle={{
            backgroundColor: "white",
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            borderWidth: 0.5,
            borderColor: 'grey',
            height: 70,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        />
      );
    };
  
    const renderSend = (props) => {
      return (
        <Send {...props} containerStyle={{ borderRadius: 0, borderWidth: 0, justifyContent: 'center' }}>
          <View style={{ alignSelf: 'center', justifyContent: 'center' }} onPress={props} >
            <Icon name="ios-paper-plane" color={"#000"} size={30} style={{ paddingHorizontal: 10 }} />
          </View>
        </Send>
      )
    }
    const renderBubble = props => {

        // console.log("ander",props);

      return (
        <Bubble
          {...props}
          timeTextStyle={{
            left: {
              color: 'gray',
              fontSize: 10
            },
            right: {
              color: 'gray',
              fontSize: 10
            },
          }}
          textStyle={{
            right: {
              color: '#fff',
              fontSize: 16,
            },
            left: {
              color: '#fff',
              fontSize: 16,
            },
          }}
          wrapperStyle={{
            right: {
              backgroundColor: "#000",
            },
            left: {
              backgroundColor: "#000",
            },
          }}
        />
      );
    };
  
    console.log("sadasdaddas===",itemData?.device_token);

    const GetcurrentUser = async () => {
      firestore()
        .collection('chats')
        .doc(`${UID}_${itemData.firebase_id}`)
        .onSnapshot(snapshot => {
          if (snapshot?.exists) {
            const data = snapshot.data().chat;
            data?.reverse();
  
            setCurrentChatId(`${UID}_${itemData.firebase_id}`);
            const item = [];
            data.forEach(Item => {
              let temp = Item;
              temp.createdAt = new Date(Item.createdAt.seconds * 1000).toISOString()
              item.push(temp);
            })
            // console.log(item)
            setMessages(item)
          } else {
            console.log("get second user");
            secondUser()
          }
        });
    }
    const secondUser = async () => {
      firestore()
        .collection('chats')
        .doc(`${itemData.firebase_id}_${UID}`)
        .onSnapshot(snapshot => {
          if (snapshot?.exists) {
            const data = snapshot.data().chat;
            data.reverse();
            // setMessages(data);
            setCurrentChatId(`${itemData.firebase_id}_${UID}`);
            const item = [];
            data.forEach(Item => {
              let temp = Item;
              temp.createdAt = new Date(Item.createdAt.seconds * 1000).toISOString()
              // temp.ProfileImages.length > 0?Item.ProfileImages:
              item.push(temp);
            })
            setMessages(item)
          } else {
            setCurrentChatId("")
            return setMessages([]);
          }
        });
    }
  
    // props.base_url + '/' + props.signupData.profile_image
    // console.log("sadasdaddas",props?.signupData?.device_token);
  
    const onSend = useCallback((messages = []) => {
      // let fromName =itemData.fullName

      // return console.log(itemData.firebase_id,UID,fromName)
      if (currentChatId) {
        let FirstMessageSender = currentChatId.split('_')[0]

        //old
        // let Profile = "props?.base_url + '/' + props?.signupData?.profile_image"
  
        firestore()
          .collection('chats')
          .doc(currentChatId)
          .get()
          .then(doc => {
            firestore()
              .collection('chats')
              .doc(currentChatId)
              .update({
                chat: [
                  ...doc.data().chat,
                  {
                    _id: messages[0]?._id, 
                    text: messages[0]?.text, 
                    createdAt: messages[0]?.createdAt,
                    user: { _id: UID, avatar: "messages[0]?.user?.avatar" },
                    sent: true,
                    received: false,
                  }
                ],
                // fromProfileImage: FirstMessageSender == UID ? Profile : itemData.profile,
                // toProfileImage: FirstMessageSender != UID ? Profile : itemData.profile,
                FromName: FirstMessageSender == UID ? props.profileData.name : itemData.fullName,
                ToName: FirstMessageSender != UID ? props.profileData.name : itemData.fullName,
                
                // fromFMCToken: FirstMessageSender == UID ? props.signupData.device_token : itemData.device_token, 
                // toFMCToken: FirstMessageSender != UID ? props.signupData.device_token : itemData.device_token,

                sentOn: firebase?.firestore?.FieldValue.serverTimestamp(),
                lastMessage: messages[0].text
              }).then(() => {

                // SendNotification(itemData?.device_token, "yes")
                
                firestore().collection('Users').doc(itemData.firebase_id).get().then((document) => {
                  if (document.exists) {
                    if (document.data().room === UID || document.data().status === false) {
                      // return console.log("User exist in room")
                      return null
                    }
                    else {
                      console.log("handlepushNotification");
                      // HandlePushNotification(messages)
                    }
                  } else {
                    console.log("Not exist")
                  }
                })
              })
          });
      } else {
        // alert("Not found in firestore")
        firestore()
          .collection('chats')
          .doc(`${UID}_${itemData.firebase_id}`)
          .set({
            chat: [
              {
                _id: messages[0]?._id, 
                text: messages[0]?.text, 
                createdAt: messages[0]?.createdAt,
                user: { _id: UID, avatar: "messages[0]?.user?.avatar" },
                sent: true,
                received: false,
              }
            ],              
            from: UID,
            to: itemData?.firebase_id,
            sentOn: firebase?.firestore?.FieldValue.serverTimestamp(),
            ToName: itemData?.fullName,
            FromName: props.profileData.name,
            status: 1,
            // fromProfileImage: props?.signupData?.profile_image ? props?.base_url + '/' + props?.signupData?.profile_image : null,
            // toProfileImage: itemData?.profile,
            // fromFMCToken: props.signupData.device_token,
            // toFMCToken: itemData?.device_token,
            lastMessage: messages[0]?.text,
            id: `${UID}_${itemData?.firebase_id}`
          }).then(() => {

            // SendNotification(itemData?.device_token, "no")
            
            firestore().collection('Users').doc(itemData.firebase_id).get().then((document) => {
              if (document.exists) {
                if (document?.data()?.room === UID || document?.data()?.status === true) {
                  return null
                }
                else {
                  HandlePushNotification(messages)
                }
              } else {
                console.log("Not exist")
              }
            })
          })
      }
      setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    })



  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>

      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        renderBubble={e => renderBubble(e)}
        renderSend={renderSend}
        renderInputToolbar={props => customtInputToolbar(props)}
        // maxComposerHeight={500}
        messagesContainerStyle={{ paddingBottom: 30 }}
        // messagesContainerStyle={{ paddingBottom: isKeyboardVisible ? 35 : 30 }}
        renderComposer={props1 => (<Composer {...props1} textInputStyle={{ color: "black", borderRadius: 10, borderWidth: 1, borderColor: 'gray' }} />)}
        user={{
          _id: UID,
          // avatar: props.signupData.profile ? props.profile_url + "/" + props.signupData.profile : null
          avatar: null
        }}
        showUserAvatar={false}
        alwaysShowSend={true}
      />
    </View>
  )
}

const mapStateToProp = state => ({
    // signupData: state.AuthReducer.signupData,
    base_url: state.AuthReducer.base_url,
    profileData: state.AuthReducer.profileData
  });
  
  const mapDispatchToProp = {

  };
  
export default connect(mapStateToProp, mapDispatchToProp)(ChatScreen);


const styles = StyleSheet.create({
    message: {
        backgroundColor: "blue",
        borderRadius: 15,
        padding: 15,
        fontSize: wp('4%'),
        color: "black",
        width: "70%",
        marginVertical: 6
        
    }
})