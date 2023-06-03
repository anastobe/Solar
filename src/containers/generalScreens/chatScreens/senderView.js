import React, { useState, useRef, useEffect } from "react";
import { Image, Text, View, Pressable, ScrollView, KeyboardAvoidingView, Platform, StatusBar, Dimensions, TouchableOpacity } from "react-native";
import styles from '@/assets/styles/msgjobflowstyle';
import { useNavigation } from "@react-navigation/native";
import { FONT_FAMILY } from "@/constants/fontFamily";
import { createThumbnail } from "react-native-create-thumbnail";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const RenVid = ({ poster }) => {

    // const [thumbnailPic, setthumbnailPic] = useState('');
  
    // useEffect(() => {
  
    //   createThumbnail({
    //     url: poster,
    //     timeStamp: 10000,
    //   })
    //     .then((response) => {
    //       setthumbnailPic(response?.path)
    //     })
    //     .catch(err => console.log(err, "asdasdsdasdasdasad"));
    // }, [poster])
  
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
          source={require("@/assets/images/chateimage/chatwallpaper.png")}
          style={{ width: 140, height: 100 }}
          resizeMode="contain"
        />
      </View>
    )
  }

const SenderView = ({data, refrence, getId }) => {

    const { msgType } = data || {}

    const navigation = useNavigation();

    function renderText(data) {
        const{ id, who, msg, userImage, time, msgType } = data || {}

        // console.log("renderText===========other",data?.renderdata?.msg)

        return(
            <TouchableOpacity activeOpacity={1} onLongPress={()=>{ getId(id, who, msgType) }} style={{ flexDirection: "row", marginTop: 24 }}>
                <View style={{  justifyContent: 'flex-end' }} >
                  <Image style={styles.chatttimg} source={userImage} />
                </View>

                <View style={{ marginLeft: 10, maxWidth: screenWidth - 145, backgroundColor: "#F2F4F5", borderTopLeftRadius: 8, borderTopRightRadius: 8, borderBottomRightRadius: 8  }} >
                    <Text style={{ padding: 15, fontFamily: FONT_FAMILY.InterRegular, fontSize: 14, lineHeight: 24, color: "#090A0A" }} >Hey! Look forward to meeting you Saturday night. What time were you thinking?</Text>
                </View>

                <View style={{ justifyContent: 'flex-end', marginLeft: 8 }} >
                    <Text style={{ fontFamily: FONT_FAMILY.InterRegular, color: "#72777A", fontSize: 12, lineHeight: 16  }} >{time}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    
    function renderImage(data) {

        const{id, who, msg, time, userImage, msgType} = data || {}

        console.log("renderImage===========other",data)

        return( 
          <TouchableOpacity activeOpacity={1} onLongPress={()=>{ getId(id, who, msgType) }}
            style={{ flexDirection: "row", marginTop: 24}} >
                <View style={{  justifyContent: 'flex-end' }} >
                  <Image style={styles.chatttimg} source={userImage} />
                </View>

                <View style={{  justifyContent: 'flex-end', marginLeft: 10 }} >
                <TouchableOpacity  
                activeOpacity={1}
                onPress={()=>{ navigation.navigate("showBigImage",{
                pic: msg
                }) }}>

                  <Image style={{ width: 140, height: 100 }} source={require('@/assets/images/chateimage/chatwallpaper.png')} />
                    </TouchableOpacity>
                </View>

                <View style={{ justifyContent: 'flex-end', marginLeft: 8 }} >
                <Text style={{ fontFamily: FONT_FAMILY.InterRegular, color: "#72777A", fontSize: 12  }} >{time}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    function renderVideo(data) {

        const { id, who, msg, time, userImage, msgType } = data || {}

        console.log("renderVideo===========other",data)

        return (
          <View
              style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: 24 }}>

                <View style={{  justifyContent: 'flex-end' }} >
                  <Image style={styles.chatttimg} source={userImage} />
                </View>

              <View style={{  marginLeft: 10, flexDirection: "row" }} >
                <TouchableOpacity
                  activeOpacity={1}
                  onLongPress={()=>{ getId(id,who,msgType) }}
                  onPress={() => {
                    navigation.navigate('videoPlayer', { playVideo: { video: msg, playbyUri: false } });
                  }}>
                  <RenVid poster={msg} />
                </TouchableOpacity>

                <View style={{ justifyContent: 'flex-end', marginLeft: 8 }}>
                    <Text style={{ fontFamily: FONT_FAMILY.InterRegular, fontSize: 12, color: "#72777A", lineHeight: 16 }} >{time}</Text>
                </View>

              </View>
            </View>
          )
    }

    function renderDocument(data) {
        const{msg, time} = data || {}

        console.log("renderDocument===========other",data)

        return(
            <Text>renderDocument</Text>
        )
    }

    function renderReport(data) {
      const { id, who, msg, time, userImage, msgType } = data || {}
     
        return(
          <TouchableOpacity activeOpacity={1} onLongPress={()=>{ getId(id, who, msgType) }} style={{ flexDirection: "row", marginTop: 24 }}>
              <View style={{  justifyContent: 'flex-end' }} >
                <Image style={styles.chatttimg} source={userImage} />
              </View>

              <View style={{ marginLeft: 10, maxWidth: screenWidth - 145, backgroundColor: "#F2F4F5", borderTopLeftRadius: 8, borderTopRightRadius: 8, borderBottomRightRadius: 8  }} >
                  <Text style={{ padding: 15, fontFamily: FONT_FAMILY.InterRegular, fontSize: 14, lineHeight: 24, color: "#090A0A" }} >{msg}</Text>
              </View>

              <View style={{ justifyContent: 'flex-end', marginLeft: 8 }} >
                  <Text style={{ fontFamily: FONT_FAMILY.InterRegular, color: "#72777A", fontSize: 12, lineHeight: 16  }} >{time}</Text>
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
            msgType == "report"
            ?
            renderReport(data)
            :
            null
            }
        </View>
    )

  }

  export default SenderView;