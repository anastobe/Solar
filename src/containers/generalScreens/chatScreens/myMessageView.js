import React, { useState, useRef, useEffect } from "react";
import { Image, Text, View, Pressable, ScrollView, KeyboardAvoidingView, Platform, StatusBar, Dimensions, TouchableOpacity } from "react-native";
import styles from '@/assets/styles/msgjobflowstyle';
import { FONT_FAMILY } from "@/constants/fontFamily";
import { useDispatch, useSelector } from "react-redux";
import Video from 'react-native-video'
import { useNavigation } from "@react-navigation/native";
import { createThumbnail } from "react-native-create-thumbnail";
import Pdf from 'react-native-pdf';
import { mapdata } from "@/redux/actions/user.action";


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const RenVid = ({ poster }) => {

  const [thumbnailPic, setthumbnailPic] = useState('');

  useEffect(() => {

    createThumbnail({
      url: poster,
      timeStamp: 10000,
    })
      .then((response) => {
        setthumbnailPic(response?.path)
      })
      .catch(err => console.log(err, "asdasdsdasdasdasad"));

  }, [poster])

  return (
    <View style={{ justifyContent: "center", alignItems: "center" }} >
      <View style={{ position: "absolute", zIndex: 9999 }} >
        <Image
          source={require("@/assets/images/General/pause.png")}
          style={{
            height: 30,
            width: 30,
          }}
          resizeMode="contain"
        />
      </View>
      <Image
        source={{ uri: thumbnailPic }}
        style={{ width: 140, height: 100 }}
        resizeMode="cover"
      />
    </View>
  )
}


const MyMessageView = ({ data, refrence, getId }) => {

  const { msgType } = data || {}
  const navigation = useNavigation();
  const dispatch = useDispatch();

  console.log("MyMessageView===>", data)

  function renderText(data) {

    const { id, msg, userImage, time, who, msgType } = data || {}

    return (
      <TouchableOpacity activeOpacity={1} onLongPress={()=>{ 
        getId(id, who, msgType)
        }}  style={{ flexDirection: "row", justifyContent: "flex-end", marginTop: 24 }} >

        <View style={{ justifyContent: 'flex-end', marginLeft: 8 }} >
          <Text style={{ color: "#72777A", fontSize: 12, fontFamily: FONT_FAMILY.InterRegular, lineHeight: 16 }}>{time}</Text>
        </View>

        <View style={{ marginLeft: 10, maxWidth: screenWidth - 145, backgroundColor: "#0760F0", borderTopLeftRadius: 8, borderTopRightRadius: 8, borderBottomLeftRadius: 8 }} >
          <Text style={{ fontFamily: FONT_FAMILY.InterRegular, fontSize: 14, color: "#fff", lineHeight: 24, padding: 15 }} >{msg}</Text>
        </View>

      </TouchableOpacity>
    )
  }

  function renderImage(data) {

    const { id, who, msg, time, userImage, msgType } = data || {}

    return (
      <View
        style={{ flexDirection: "row", marginTop: 24, justifyContent: "flex-end" }} >
        <View style={{ justifyContent: 'flex-end', marginLeft: 8 }} >
        <Text style={{ fontFamily: FONT_FAMILY.InterRegular, fontSize: 12, color: "#72777A", lineHeight: 16 }} >{time}</Text>
        </View>
        <View style={{ justifyContent: 'flex-end', marginLeft: 10 }} >
          <TouchableOpacity
            activeOpacity={1}
            onLongPress={()=>{ getId(id, who, msgType) }}
            onPress={() => {
              navigation.navigate("showBigImage", {
                pic: msg
              });
            }}>
            <Image style={{ width: 140, height: 100, resizeMode: 'cover' }} source={typeof (msg) == "number" ? msg : { uri: msg }} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  function renderVideo(data) {

    const { id, who, msg, time, msgType } = data || {}

    // navigation.navigate('videoPlayer', {playVideo: item});

    return (
      <View
        style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 24 }}>
        <View style={{ justifyContent: 'flex-end', marginRight: 0 }}>

        <Text style={{ fontFamily: FONT_FAMILY.InterRegular, fontSize: 12, color: "#72777A", lineHeight: 16 }} >{time}</Text>
        </View>
        <View style={{ justifyContent: 'flex-end', marginLeft: 10 }} >
          <TouchableOpacity
            activeOpacity={1}
            onLongPress={()=>{ getId(id, who, msgType) }}
            onPress={() => {
              navigation.navigate('videoPlayer', { playVideo: { video: msg, playbyUri: true } });
            }}>
            <RenVid poster={msg} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  function renderDocument(data) {
    const { id, who, msg, time, msgType } = data || {}

    return (
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 24 }}>
        <View style={{ justifyContent: 'flex-end', marginRight: 8 }}>
        <Text style={{ fontFamily: FONT_FAMILY.InterRegular, fontSize: 12, color: "#72777A", lineHeight: 16 }} >{time}</Text>
        </View>
        {msg && msg?.map((v) => {
          return (
            <TouchableOpacity
            activeOpacity={1}
             onLongPress={()=>{ getId(id, who, msgType) }}
              onPress={() => {
                navigation.navigate('Messegeandaward', {
                  screen: 'pdfView',
                  params: v?.uri
                })
              }}
              style={{ height: 50, backgroundColor: "#D3eeb9", borderTopLeftRadius: 8, borderTopRightRadius: 8, borderBottomLeftRadius: 8, maxWidth: 250, justifyContent: 'center', alignItems: "center", paddingHorizontal: 10 }} >
              <Text style={{ color: "#000", fontSize: 14, fontFamily: FONT_FAMILY.InterRegular }} >{v?.name}</Text>
            </TouchableOpacity>
          )
        })}

      </View>
    )
  }

  function onPressMap(msg) {
    dispatch(mapdata({ forward: msg, selectLoc: false  }))
    navigation.navigate('Sharelocation')
    return
  }


  function renderMap(data) {

    const { id, msg, time, userImage, who, msgType } = data || {}
    // const  coord = useSelector(({userReducer})=> userReducer?.coordinate);
    // console.log("renderMap===========my",msg)

    return (
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 24 }}>
        <View style={{ justifyContent: 'flex-end', marginRight: 8 }}>
          <Text style={{ fontFamily: FONT_FAMILY.InterRegular, fontSize: 12, color: "#72777A", lineHeight: 16 }} >{time}</Text>
        </View>
        <TouchableOpacity 
          activeOpacity={1} 
          onPress={() => onPressMap(msg)}
          onLongPress={()=>{ getId(id, who,msgType) }}
        >
          <Image style={{ height: 100, width: 242, }} source={require('@/assets/images/chateimage/map.png')} />
        </TouchableOpacity>
      </View>
    )
  }

  function renderDelete(data) {
    const { id, who, msg, time, userImage, msgType } = data || {}
   
    return (
      <TouchableOpacity activeOpacity={1} onLongPress={()=>{ 
        getId(id, who, msgType)
        }}  style={{ flexDirection: "row", justifyContent: "flex-end", marginTop: 24 }} >

        <View style={{ justifyContent: 'flex-end', marginLeft: 8 }} >
          <Text style={{ color: "#72777A", fontSize: 12, fontFamily: FONT_FAMILY.InterRegular, lineHeight: 16 }}>{time}</Text>
        </View>

        <View style={{ marginLeft: 10, maxWidth: screenWidth - 145, backgroundColor: "#F2F4F5", borderTopLeftRadius: 8, borderTopRightRadius: 8, borderBottomLeftRadius: 8,  width: 144, height: 41, justifyContent: "center", alignItems: "center" }} >
          <Text style={{ fontFamily: FONT_FAMILY.Inter, fontSize: 14, color: "#090A0A", lineHeight: 24, }} >{msg}</Text>
        </View>

      </TouchableOpacity>
    )

  }

  return (
    <View>
      {
        msgType == 'text'
          ?
          renderText(data)
          :
          msgType == 'image'
            ?
            renderImage(data)
            :
            msgType == 'video'
              ?
              renderVideo(data)
              :
              msgType == 'document'
                ?
                renderDocument(data)
                :
                msgType == 'map'
                  ?
                  renderMap(data)
                  :
                   msgType == "delete" 
                    ?
                    renderDelete(data)
                      :
                     null
      }
    </View>

  )

}

export default MyMessageView;