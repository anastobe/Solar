import theme from '@/assets/styles/theme';
import Header from '@/components/header';
import SafeScrollView from '@/components/safeScrollView';
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import {useDispatch, useSelector} from 'react-redux';

const FamousVendors = () => {

  const dispatch = useDispatch();
  const navigation = useNavigation();


  return (
    <SafeScrollView>
      <View style={styles.subContainer}>
          <Header
            onPress={() => navigation.goBack()}
            heading="My Information"
            textColor={theme.black}
          />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text>famous vendors</Text>

        </ScrollView>
      </View>
    </SafeScrollView>
  );
}

const styles = StyleSheet.create({
    subContainer:{
        flex: 1,
        backgroundColor: "white"
    },
    
    
})


export default FamousVendors