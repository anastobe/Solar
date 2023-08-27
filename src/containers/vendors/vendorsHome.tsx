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
import {FamousVendors, PostItemsList} from '@/utils/data';
import { FONT_FAMILY, RouteNames } from '@/constants';
import JobCard from '@/components/jobCard';
import SettingHeader from '@/components/settingStackHeader';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import HeaderHomePage from '@/components/headerHomePage';
import { GetFamousVendors, GetProfileData, GetUserList } from '@/Redux/Action/AuthActions/authActions';
import { connect } from 'react-redux';

const VendorsHome = props => {

  console.log('================VendorsHome====================',props?.userJobList);


    const navigation = useNavigation()
    const Focus= useIsFocused()

    useEffect(() => {   
      UserJobList();
    }, [Focus]);
  
    const UserJobList = async () => {
      await props.GetUserList(props.token);

      await props.GetProfileData(props.token);
    };

    function renderListHeader(txt) {
        return(
          <View style={{ marginLeft: 20, marginVertical: 10 }} >
            <Text style={{ fontSize: 16, fontFamily: FONT_FAMILY.MontserratSemiBold }} >{txt}</Text>
          </View>
        )
    }


    function PostItems() {

      function renderItem({item}) {
  
        console.log("---".item);

          const {    
              id,
              userImg,
              name,
              title,
              description,
              List,
              showRightBar
          } = item || {}

          
  
          function SeePostDetail() {
            navigation.navigate(RouteNames.userJobDetail,{ data: item })
          }
  
          return (
            <JobCard
              subHeading={"User Requirements:"}
              marginTop={10}
              id={id}
              userImg={userImg}
              name={name}
              title={title}
              description={description}
              List={List}
              showRightBar={showRightBar}
              btnColor={theme.lightblue}
              btnTxt={"See Detail"}
              showBtn={true}
              onPress={SeePostDetail}
            />
        );
      }
  
  
      return (
        <FlatList
          keyExtractor={item => item.id}
          data={props?.userJobList}
          renderItem={renderItem}
        />
      );
    }


  return (
    <SafeScrollView screenCol={theme.white} isDarkMode barCol={theme.purple}>

      <HeaderHomePage
        routeName={'ProviderAddJobStack'}
        nav={navigation}
        showBottomHomePageContent={true}
        height={130}
        loader={false}
      />

      <ScrollView>
      {renderListHeader("User List")}
      {PostItems()}
      


      </ScrollView>
    </SafeScrollView>
  );
};



const mapStateToProps = state => ({
  token: state.AuthReducer.token,
  userJobList: state.AuthReducer.userJobList
});

const mapDispatchToProp = {
  GetUserList: GetUserList,
  GetProfileData: GetProfileData
};

export default connect(mapStateToProps, mapDispatchToProp)(VendorsHome);
