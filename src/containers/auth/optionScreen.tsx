import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Pressable,
  StatusBar,
  Platform,
  Alert,
} from 'react-native';
import styles from '@/assets/styles/authstyles/optionScreen';
import {guide1Data} from '@/utils/data';
import {RouteNames} from '@/constants';
import SafeScrollView from '@/components/safeScrollView';
import theme from '@/assets/styles/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const OptionScreen = () => {

    const navigation = useNavigation()
    const [tickIcon, setTickIcon] = useState();
  
  const handleOnPress = item => {
    setTickIcon(item.id);
      setTimeout(() => {
        navigation.navigate(RouteNames.login, { id : item.id });
      }, 1000);

  };

  const renderItem = ({item}) => {
    return (
      <Pressable
        style={styles.flatlistGuide1View}
        onPress={() => handleOnPress(item)}>
        <View style={styles.flatlistGuide1ImageView}>
        <Octicons 
          name={item.image} 
          size={60} 
          color={theme.black} 
        />
        </View>
        <View style={styles.flatlistGuide1TextView}>
          <Text style={styles.flatlistGuide1Text}>{item.text}</Text>
        </View>
        <View style={styles.flatlistGuide1TickView}>
          {item.id == tickIcon && (
            <View style={styles.flatlistGuide1TickIcon} >
            <Octicons 
              name={"check"} 
              size={20} 
              color={theme.black} 
            />
          </View>
          )}
        </View>
      </Pressable>
    );
  };

  return (
    <SafeScrollView screenCol={theme.white} barCol={theme.white}  >
        <ScrollView
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}>
          <View style={styles.logoView}>
            <Image
              source={require('@/assets/images/solarlogo.jpeg')}
              style={styles.logoImage}
            />
          </View>
          <View style={styles.continueAsView}>
            <Text style={styles.continueAsText}>Continue as a</Text>

          </View>
          <FlatList
            keyExtractor={item => item?.id}
            data={guide1Data}
            renderItem={renderItem}
          />

          <View style={styles.endTextView}>
            <Text style={styles.influencerText}>
              Lorem ipsome content is there
            </Text>
          </View>
        </ScrollView>
    </SafeScrollView>
  );
}

export default OptionScreen