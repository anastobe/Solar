import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  StatusBar,
  Image,
  Text,
  PermissionsAndroid,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  Pressable,
  Platform,
  Alert,
  Linking,
  Dimensions
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import styles1 from '@/assets/styles/chatstyles/chatStyle'
import ImagePicker from 'react-native-image-crop-picker';
import DocumentPicker, { types } from 'react-native-document-picker';
import { Link, useNavigation } from '@react-navigation/native'
import { chatsData } from '@/utils/data';
import styles from '@/assets/styles/chatstyles/msgjobflowstyle';
import Header from '@/components/header';
import { KeyboardAwareView } from 'react-native-keyboard-aware-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import SenderView from './senderView';
import MyMessageView from './myMessageView';
import useKeyboard from '@rnhooks/keyboard';
import RBSheet from 'react-native-raw-bottom-sheet';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
// import { mapdata } from '@/redux/actions/userAction';
// import { PERMISSIONS, request, requestMultiple } from 'react-native-permissions';
import { FONT_FAMILY } from '@/constants/index';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Chattinguser = ({ ...props }) => {

  const coord = useSelector(({ userReducer }) => userReducer?.coordinate);
  const dispatch = useDispatch();

  const navigation = useNavigation()
  const refRBSheet = useRef();
  const senderRef = useRef();
  const mymsgRef = useRef();
  const keyboardRef = useRef();
  const scrollRef = useRef();
  const [text, settext] = useState("");
  const [visible, dismiss] = useKeyboard();
  const [msgdata, setsetmsgdata] = useState(chatsData)
  const [selecteddata, setselecteddata] = useState()

  useEffect(() => {
    console.log(coord, 'ddddddddd')
    if (coord !== null) {

      let addmsg = [...msgdata, {
        id: msgdata.length,
        who: 'me',
        msgType: 'map',
        time: '10:50 PM',
        msg: coord,
        userImage: require('@/assets/images/patient.png')
      }]
      setsetmsgdata(addmsg)
      settext('')

      setTimeout(() => {
        scrollRef.current?.scrollToEnd(0);
      }, 100);
      // scrollRef?.current?.scrollToOffset({offset: 1000});
    }

  }, [coord])


  //ok
  useEffect(() => {
    setTimeout(() => {
      scrollRef.current?.scrollToEnd(0);
      // scrollRef?.current?.scrollToOffset({offset: 1000});
    }, 100);
    return;
  }, [null || visible]);

  const onPressLoc = async () => { 

    // if (Platform.OS == "ios") {
    //   IosPerHandler()
    // } else if (Platform.OS == "android") {
    //   AndroidPerHandler()
    // }




    let a = { forward: null, selectLoc: true }
    // dispatch(mapdata(a))
    navigation.navigate('Sharelocation')


  }

  const onPressClip = () => {
    refRBSheet?.current?.open()
    return
  }

  const RenHeader = () => {
    return (
      <>
        <View style={{ marginBottom: 12 }}>
          <Header onSnapClick={() => navigation.navigate('Homerunningcontact')} onVideoClick={() => navigation.navigate('Contract')} onPress={() => navigation.goBack()} />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Userpayment')}>
          <View style={styles.joboffer}>
            {/* <Image style={styles.cupimg} source={require('@/assets/images/patient.png')} /> */}
            <Text style={styles.joboffertxt} >Send Job Offer</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.linewidth}></View>
      </>
    )
  }
  

  const Sendmsg = () => {

    let addmsg = [...msgdata, {
      id: msgdata.length,
      who: 'me',
      msgType: 'text',
      time: '10:50 PM',
      msg: text,
      userImage: require('@/assets/images/patient.png')
    }]
    settext('')
    setsetmsgdata(addmsg)
    // scrollRef?.current?.scrollToOffset({offset: 2000});

    setTimeout(() => {
      scrollRef?.current?.scrollToEnd(0);
    }, 100);
    return

  }

  const chooseImage = async () => {

    const fetchParams = {
      mediaType: "mixed",
    };

    try {
      const result = await launchImageLibrary(fetchParams);

      result?.assets?.map((v) => {
        // setSendImage(v?.uri);

        if (v?.duration) {

          let addmsg = [...msgdata, {
            id: msgdata.length,
            who: 'me',
            msgType: 'image',
            time: '10:50 PM',
            msg: v?.uri,
            userImage: null
          }]
          setsetmsgdata(addmsg)
          settext('')

          setTimeout(() => {
            scrollRef.current?.scrollToEnd(0);
          }, 100);
          return

        } else {

          let addmsg = [...msgdata, {
            id: msgdata.length,
            who: 'me',
            msgType: 'image',
            time: '10:50 PM',
            msg: v?.uri,
            userImage: null
          }]
          setsetmsgdata(addmsg)
          settext('')

          setTimeout(() => {
            scrollRef.current?.scrollToEnd(0);
          }, 100);

          return
        }

      })
      refRBSheet?.current?.close();
      scrollRef?.current?.scrollToEnd(0);
      return
    }
    catch (e) {
      console.log("camer roll catch ===>", e);
    }
  }

  const handleDocumentSelection = async () => {
    try {
      await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
        type: [types.pdf],
        allowMultiSelection: true,
      }).then((e) => {

        let addmsg = [...msgdata, {
          id: msgdata.length,
          who: 'me',
          msgType: 'document',
          time: '10:50 PM',
          msg: e,
          userImage: null
        }]

        setsetmsgdata(addmsg)
        settext('')
        refRBSheet?.current?.close();
        setTimeout(() => {
          scrollRef.current?.scrollToEnd(0);
        }, 100);
        return

      })

    } catch (err) {
      console.warn(err);
    }
  }

  function SendermsgId(id, who, msgType)  {
    senderRef?.current?.open()
    setselecteddata({
      id: id,
      who: who,
      msgType: msgType
    })
  }

  function MymsgId(id, who, msgType) {
    mymsgRef?.current?.open()
    setselecteddata({
      id: id,
      who: who,
      msgType: msgType
    })
  }

  const BottomButton = (txt, img, onPress = () => {}) => {
    return (
        <TouchableOpacity
            style={{ flexDirection: 'row', height: 57, borderBottomColor: " rgba(0, 0, 0, 0.3)", borderBottomWidth: 1, alignItems: "center", paddingHorizontal: 18 }}
            activeOpacity={0.85}
            onPress={onPress}
        >
            <Image
                style={{ width: 18, height: 18, resizeMode: "contain" }}
                source={img}
            />
            <Text style={{ fontFamily: FONT_FAMILY.InterBold, marginLeft: 21, fontSize: 16, lineHeight: 26, color: '#090A0A' }}>{txt}</Text>
        </TouchableOpacity>
    )
}

// below 3 functions are my messages
const myMsgQuote = () => {
  mymsgRef?.current?.close();
  console.log("myMsgQuote");
};
const myMsgcopyToClipboard = () => {
  mymsgRef?.current?.close();
  console.log("myMsgcopyToClipboard");
};
const myMsgdelete = () => {
  
  const{ id, who, msgType } =  selecteddata
  
  console.log("myMsgdelete",selecteddata);

  mymsgRef?.current?.close();
  let markers = [...msgdata];
  markers[id] = {...markers[id], msgType: 'delete', msg: 'Message Deleted'};
  setsetmsgdata(markers);
  
};

// below 3 functions are sender messages
const senderReply = () => {
  senderRef?.current?.close();
  console.log("senderReply");
};
const sendercopyToClipboard = () => {
  senderRef?.current?.close();
  console.log("sendercopyToClipboard");
};

const senderReport = () => {  

  const{ id, who, msgType } = selecteddata

  console.log("senderReport",selecteddata);

  senderRef?.current?.close();
  let markers = [...msgdata];
  markers[id] = {...markers[id], msgType: 'report', msg: 'Message Reported' };
  setsetmsgdata(markers);

};

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }} >
      <StatusBar
        backgroundColor={"#fff"}
        barStyle={'dark-content'}
      />
      <SafeAreaView style={{ flex: 1 }}  >

        {RenHeader()}
        <KeyboardAwareView animated={true}>

          <ScrollView ref={scrollRef} showsVerticalScrollIndicator={false} contentContainerStyle={{
            paddingBottom: 20,
            marginHorizontal: 16
          }}
            style={{ paddingBottom: 100 }}>
            {msgdata && msgdata.map((v, i) => {
              return (
                <View key={i} >
                  {v?.who == 'sender'
                    ?
                    <SenderView 
                      refrence={senderRef?.current}
                      getId={SendermsgId}
                      data={v} 
                    />
                    :
                    <MyMessageView 
                      refrence={mymsgRef?.current}
                      getId={MymsgId}
                      data={v} 
                    />}
                </View>
              )
            })

            }
          </ScrollView>

          <View style={{ backgroundColor: "#fff", height: 70, marginTop: 0 }} >
            <View style={styles1.inputContainerBottom}>
              <TextInput
                ref={keyboardRef}
                placeholder='Type here'
                style={styles1.inputTextBottom}
                value={text}
                maxHeight={80}
                // numberOfLines={4}
                multiline={true}
                onChangeText={(e) => { settext(e) }}
                autoCorrect={false}
              // returnKeyType="Send"
              />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", width: 110 }}>
                <Pressable onPress={() => { onPressLoc() }}>
                  <Image source={require('@/assets/images/location.png')} style={{ width: 20, height: 20, resizeMode: "contain" }} />
                </Pressable>
                <Pressable onPress={() => { onPressClip() }} >
                  <Image source={require('@/assets/images/paper-clip.png')} style={{ width: 17, height: 18, resizeMode: "contain" }} />
                </Pressable>
                <Pressable onPress={() => { Sendmsg() }} disabled={!text} style={{ borderRadius: 16, justifyContent: "center", alignItems: "center", width: 32, height: 32, backgroundColor: '#0760F0', marginVertical: 13 }}>
                  <Image source={require('@/assets/images/send.png')} style={{ width: 13, height: 13, tintColor: "#fff", resizeMode: 'contain' }} />
                </Pressable>
              </View>
            </View>
          </View>
        </KeyboardAwareView>

        <RBSheet
          ref={refRBSheet}
          height={ Platform.OS == "ios" ? 175 : 165}
          openDuration={250}
          customStyles={{
            container: {
              width: '100%',
            }
          }}
        >
          <View style={{ flex: 1 }}>
            <View style={{ marginTop: 20, marginHorizontal: 16 }}>
              <Text style={{ fontSize: 16, color: '#000', fontWeight: 'bold' }}>Select As</Text>
            </View>
            <View style={{ marginTop: 15, borderWidth: 0.5, borderColor: 'lightgray', borderRadius: 50 }}></View>
            <TouchableOpacity onPress={() => { chooseImage() }} style={{ alignItems: 'center', justifyContent: "center", height: 50 }}>
              <View>
                <Text style={{ fontSize: 16, color: '#2483df' }}>Choose a Image</Text>
              </View>
            </TouchableOpacity>
            <View style={{ borderWidth: 0.5, borderColor: 'lightgray', borderColor: "lightgray", borderRadius: 50 }}></View>
            <TouchableOpacity onPress={() => { handleDocumentSelection() }} style={{ alignItems: 'center', justifyContent: "center", height: 50 }}>
              <View>
                <Text style={{ fontSize: 16, color: '#2483df' }}>Choose from Document </Text>
              </View>
            </TouchableOpacity>

          </View>
        </RBSheet>
       
          <RBSheet
              ref={senderRef}
              closeOnDragDown={false}
              closeOnPressMask={true}
              // openDuration={250}
              animationType='fade'
              customStyles={{
                  wrapper: {
                      backgroundColor: "rgba(0, 0, 0, 0.4)",
                  },
                  container: {
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      borderColor: "black",
                      borderWidth: 1,
                      height: 172,
                      width: screenWidth
                  }
              }}
          >
            {BottomButton("Reply", require("@/assets/images/reply.png"), senderReply )}
            {BottomButton("Copy", require("@/assets/images/copy.png"), sendercopyToClipboard)}
            {BottomButton("Report", require("@/assets/images/report.png"), senderReport )}
          </RBSheet>

          <RBSheet
            ref={mymsgRef}
            closeOnDragDown={false}
            closeOnPressMask={true}
            // openDuration={250}
            animationType='slide'
            customStyles={{
                wrapper: {
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                },
                container: {
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderColor: "black",
                    borderWidth: 1,
                    height: 172
                }
            }}
        >
        {BottomButton("Quote", require("@/assets/images/quote.png"), myMsgQuote )}
        {BottomButton("Copy", require("@/assets/images/copy.png"), myMsgcopyToClipboard )}
        {BottomButton("Delete", require("@/assets/images/delete.png"), myMsgdelete)}
        </RBSheet>

      </SafeAreaView>
    </View>
  )
}

export default Chattinguser;