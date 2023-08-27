import React from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'
import { Metrics } from '@/assets/metrics/metrics'
import theme from '@/assets/styles/theme'
import SafeScrollView from '@/components/safeScrollView';
import Octicons from 'react-native-vector-icons/Octicons';;


const GetEstimatePrice = () => {

    // const renderItem = ({item}) => {
    //     return (
    //       <Pressable
    //         style={styles.flatlistGuide1View}
    //         onPress={() => handleOnPress(item)}>
    //         <View style={styles.flatlistGuide1ImageView}>
    //         <Octicons 
    //           name={item.image} 
    //           size={60} 
    //           color={theme.lightblue} 
    //         />
    //         </View>
    //         <View style={styles.flatlistGuide1TextView}>
    //           <Text style={styles.flatlistGuide1Text}>{item.text}</Text>
    //         </View>
    //         <View style={styles.flatlistGuide1TickView}>
    //           {item.id == tickIcon && (
    //             <View style={styles.flatlistGuide1TickIcon} >
    //             <Octicons 
    //               name={"check"} 
    //               size={20} 
    //               color={theme.black} 
    //             />
    //           </View>
    //           )}
    //         </View>
    //       </Pressable>
    //     );
    //   };

  return (
    <SafeScrollView screenCol={theme.white} barCol={theme.white}  >
      <ScrollView>

          {/* <FlatList
            keyExtractor={item => item?.id}
            data={guide1Data}
            renderItem={renderItem}
          /> */}

      </ScrollView>
    </SafeScrollView>
  )
}

export default GetEstimatePrice