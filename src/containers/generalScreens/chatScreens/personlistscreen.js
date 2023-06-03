
import React, { useCallback } from 'react';
import { useState, useEffect, useRef } from 'react';
import {
  View,
  TextInput,
  StatusBar,
  Image,
  Text,
  Animated,
  Dimensions,
  TouchableOpacity,
  BackHandler,
  Alert,

} from 'react-native';
import { myData, personData } from '@/utils/data/data';
import { SwipeListView } from 'react-native-swipe-list-view';
import Messagebox from './messagebox';
import Personlist from '@/components/personlist';
import styles from '@/assets/styles/msgjobflowstyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import SettingHeader from '@/components/settingStackHeader';
import { useFocusEffect, useNavigation } from '@react-navigation/native';


const initialList = personData.map((data, index) => ({ ...data, key: `${index}` }));
const rowSwipeAnimatedValues: any = {};
initialList.forEach((_, i) => {
  rowSwipeAnimatedValues[`${i}`] = new Animated.Value(0);
});
type Item = typeof initialList[0];

const Personlistscreen = () => {


  useFocusEffect(
    useCallback(() => {
        const backAction = () => {
            Alert.alert('Alert', "Logout?", [
                { text: "Cancel" },
                { text: "Yes", onPress: () => navigation.navigate('AuthStack', { screen: 'SignIn' }) }
            ]);
            return true;
        };
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
        return () => backHandler.remove();
    }, [])
);

  const navigation = useNavigation();

  const [searchText, setSearchText] = useState('');
  console.log(searchText, 'AAAAAAA')
  const [listData, setListData] = useState(initialList);

  const ref = useRef()

  const closeRow = (rowMap: any, rowKey: string) => {
    // console.log("this is the rowMap: ", rowMap);
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };
  const deleteRow = (rowMap: Map<string, Object>, rowKey: string) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex((item) => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const onRowDidOpen = (rowKey: string) => {
    console.log("This row opened", rowKey);
  };
  const onSwipeValueChange = ({
    key,
    value,
  }: {
    key: string;
    value: number;
  }) => {
    console.log('valuee', value);
    rowSwipeAnimatedValues[key]?.setValue(value);
  };
  const renderHiddenItem = ({ item }: { item: Item }, rowMap: any) => (
    <View style={ 
      // styles.rowBack 
      {  marginTop: 24 + 6.6, paddingLeft: 20 }
      }>
      <TouchableOpacity
        style={[
          styles.hidestyl, { justifyContent: "center", alignItems: "center" }
        ]}
        onPress={() => deleteRow(rowMap, item.key)}>
        <Text style={
          styles.backleftBtn
          }>
            Hide message</Text>
      </TouchableOpacity>

    </View>
  );

  // useEffect(() => {
  //  console.log('sssss')
  // }, [searchText])

  useEffect(() => {
    if (searchText === '') {
      setListData(personData);
    } else {
      setListData(
        personData.filter(
          (item) =>
            item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        )
      );
    }
  }, [searchText]);

  // const handleOrderClick = () => {
  //   let newList = [...personData];

  //   setListData(newList);
  // };



  return (
    <SafeAreaView style={styles.container}>

      <View style={{ marginHorizontal: 16 }}>
        <StatusBar barStyle={"dark-content"} backgroundColor='white' />

        <SettingHeader name="Messages" onPress={() => navigation.goBack()} />

        <View style={[styles.searchbar,{ marginTop: 24 }]}>
          <TextInput style={[styles.searchtxt,{  }]}
            placeholder="Search"
            placeholderTextColor={"#72777A"}
            value={searchText}
            onChangeText={(t) => setSearchText(t)}
          />
          <Image style={styles.searchimg} source={require('@/assets/images/search.png')} />

        </View>


      </View>




      <View style={styles.container}>
        <SwipeListView
          data={listData}
          showsVerticalScrollIndicator={false}
          //   renderItem={renderItem}
          renderItem={({ item }) => <Personlist data={item} />}
          renderHiddenItem={renderHiddenItem}
          leftOpenValue={135}
          contentContainerStyle={{ paddingBottom: 30 }}
          disableLeftSwipe
          rightOpenValue={-Dimensions.get('window').width}
          previewRowKey={"0"}
          // previewOpenValue={-40}
          previewOpenDelay={3000}
          onRowDidOpen={onRowDidOpen}
          onSwipeValueChange={onSwipeValueChange}
        />
      </View>
    </SafeAreaView>
  );
};


export default Personlistscreen;