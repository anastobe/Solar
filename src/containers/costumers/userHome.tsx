import React, {useState, useRef, useEffect, useLayoutEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  FlatList,
  ImageBackground,
  StatusBar,
} from 'react-native';
import {Metrics} from '@/assets/metrics/metrics';
import theme from '@/assets/styles/theme';
import SafeScrollView from '@/components/safeScrollView';
import {styles} from '@/assets/styles/home/userstyle';
import {FamousVendors, PostItemsList, vendorHomePkg} from '@/utils/data';
import { FONT_FAMILY, RouteNames } from '@/constants';
import JobCard from '@/components/jobCard';
import SettingHeader from '@/components/settingStackHeader';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import HeaderHomePage from '@/components/headerHomePage';
import VendorJobCard from '@/components/vendorJobCard';
import { connect } from 'react-redux';
import {  GetFamousVendors, GetProfileData, GetVendorsList } from '@/Redux/Action/AuthActions/authActions';


const UserHome = props => {

    const navigation = useNavigation()
    const Focus= useIsFocused()

    useEffect(() => {
      GetFamousVen();      
      VendorsList();
    }, [Focus]);
  
    const VendorsList = async () => {
      await props.GetVendorsList(props.token);
    };

    const GetFamousVen = async () => {
      await props.GetFamousVendors(props.token);
      await props.GetProfileData(props.token);
    };

    function renderListHeader(txt) {
        return(
          <View style={{ marginLeft: 20, marginVertical: 10 }} >
            <Text style={{ fontSize: 16, fontFamily: FONT_FAMILY.MontserratSemiBold }} >{txt}</Text>
          </View>
        )
    }

  const MediaOptions = () => {
    function renderItem({item}) {

        const {showRightBar, image, name} = item

      return (
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.mediaOptRound, {marginRight: -25}]}>
            {/* <Image
              source={image}
              style={{height: 35, width: 35, borderRadius: 20}}
              resizeMode="contain"
            /> */}
            <Text>{name}</Text>
          </TouchableOpacity>

         {true ? <View
            style={{
              alignItems: 'center',
              marginRight: -25,
              justifyContent: 'center',
            }}>
            <Image
              source={require('@/assets/images/cuttop.png')}
              style={{
                height: Metrics.width < 340 ? 30 : 28,
                width:
                  Metrics.width < 340 ? 80 : Metrics.width < 370 ? 92 : 110,
              }}
            />
            <Image
              source={require('@/assets/images/cutdown.png')}
              style={{
                height: Metrics.width < 340 ? 30 : 28,
                width:
                  Metrics.width < 340 ? 80 : Metrics.width < 370 ? 92 : 110,
              }}
            />
          </View> : null}
        </View>
      );
    }


    return (
      <FlatList
        horizontal={true}
        data={props?.famousVendors}
        renderItem={renderItem}
        contentContainerStyle={{ marginLeft: 20, paddingRight: 70 }}
        showsHorizontalScrollIndicator={false}
      />
    );
  };

  function PostItems() {

    function renderItem({item}) {

        const {    
            id,
            userImg,
            name,
            description,
            packageList,
        } = item

        function SeePostDetail() {
          navigation.navigate(RouteNames.jobDetailAndPayment)
        }

        return (
          <VendorJobCard
          subHeading={"User Requirements:"}
          marginTop={10}
          id={id}
          userImg={userImg}
          name={name}
          description={description}
          packageList={packageList}
          btnColor={theme.lightblue}
          btnTxt={"See Detail"}
          showBtn={true}
          onPress={SeePostDetail}
        />
      );
    }


    return (
      <FlatList
        data={props?.vendorList}
        renderItem={renderItem}
        // refreshing={false}
        // onRefresh={console.log(refresh)}
        // onEndReached={()=>{console.log("load more data")}}
        // onEndReachedThreshold={0}
      />
    );
  }

  return (
    <SafeScrollView screenCol={theme.white} isDarkMode barCol={theme.purple}>

      <HeaderHomePage
        routeName={RouteNames.addJobStack}
        nav={navigation}
        showBottomHomePageContent={true}
        height={130}
        loader={false}
      />

      <ScrollView>

      {renderListHeader("Fomous Vendors")}
      {MediaOptions()}
      {renderListHeader("Vendors List")}
      {PostItems()} 

      </ScrollView>
    </SafeScrollView>
  );
};


const mapStateToProps = state => ({
  token: state.AuthReducer.token,
  vendorList: state.AuthReducer.vendorList,
  famousVendors: state.AuthReducer.famousVendors
});

const mapDispatchToProp = {
  GetVendorsList: GetVendorsList,
  GetFamousVendors: GetFamousVendors,
  GetProfileData: GetProfileData
};

export default connect(mapStateToProps, mapDispatchToProp)(UserHome);

