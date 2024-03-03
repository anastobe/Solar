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
import { RefreshControl } from 'react-native';

const VendorsHome = props => {

  const navigation = useNavigation()
  const Focus= useIsFocused()
  const [pageLoader, setPageLoader] = useState(false);

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
  
        console.log("---",item);

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
          // refreshing={false}
          // onRefresh={()=>{ props.GetUserList(props?.token) }}
          // onEndReached={()=>{console.log("load more data")}}
          // onEndReachedThreshold={0}
        />
      );
    }

    async function OnActivityRefresh() {
      setPageLoader(true);

      let res = await props.GetUserList(props?.token);
      if (res) {
        setPageLoader(false);
      } else {
        setPageLoader(false);
      }

    }

  return (
    <SafeScrollView screenCol={theme.white} isDarkMode barCol={theme.purple}>

      <HeaderHomePage
        routeName={'ProviderAddJobStack'}
        nav={navigation}
        showDrawerIcon={true}
        showBottomHomePageContent={true}
        height={130}
        loader={false}
      />

      <ScrollView 
          refreshControl={
            <RefreshControl
              refreshing={pageLoader}
              onRefresh={OnActivityRefresh}
            />
          }
        >
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
