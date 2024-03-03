import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
// import {colors} from '../assets/theme';
// import {widthPercentageToDP} from 'react-native-responsive-screen';
// import FastImage from 'react-native-fast-image';

const ChatBar = ({avatar, name, lastMessage, howMuchAgo, onPress}) => {

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={onPress}>
      <View>
        {/* <FastImage source={avatar == null ? require("../assets/images/user.png") : {uri: avatar} } style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: colors?.grey, borderColor: colors.headingColor, borderWidth: 0.2 }} /> */}
      </View>
      <View style={{marginLeft: 10}}>
        <Text style={[styles.text, {fontWeight: 'bold'}]}>{name}</Text>
        <Text style={styles.text}>{lastMessage}</Text>
      </View>
      <View style={{position: 'absolute', right: 25, alignItems: 'flex-end'}}>
        {/* <Entypo name="dots-three-horizontal" size={25} color="black" /> */}
        <Text style={styles.text}>{howMuchAgo}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatBar;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: "center",
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 8,
    marginVertical: 10,
  },
  text: {
    color: "#000",
    // fontSize: widthPercentageToDP('3.7%'),
  },
});
