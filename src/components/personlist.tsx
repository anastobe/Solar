import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import styles from '@/assets/styles/chatstyles/msgjobflowstyle';
import { FONT_FAMILY } from '@/constants/index';


const Personlist = ({ data})  => {
    
  const navigation = useNavigation()

  return (
    <View style={{ marginHorizontal:16 }}>
      <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('Userchat')}>
    <View style={styles.item} >

      <View style={{backgroundColor:'white'}}>
      <Image source={data.image} style={styles.itemPhoto} />
      </View>
      
      <View style={{backgroundColor: '#fff', justifyContent:"space-between",flexDirection:'row',width:'85%'}}>
      <View style={{ justifyContent: "center" }} >
      <View style={{flexDirection:'row'}}>
      <Image source={data.online} style={styles.online} />
      <View>

      <Text style={styles.name1}>{data.name} </Text>
      </View>
      {/* <Image source={data.images} style={styles.notify} resizeMode='contain' />  */}
      </View>
      <Text style={styles.messag1}>{data.message}</Text>
      </View>
      
      <View style={styles.itemInfo}>
        <Text style={{ fontFamily: FONT_FAMILY.InterRegular, fontSize: 12, lineHeight: 16, color: "#72777A" }}>{data.time}</Text>
      </View>
      </View>
    

    </View >
   
     </TouchableOpacity>
    </View> 
  );


};

export default Personlist;