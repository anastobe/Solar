import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {Metrics} from '@/assets/metrics/metrics';
import theme from '@/assets/styles/theme';
import SafeScrollView from '@/components/safeScrollView';
import SettingHeader from '@/components/settingStackHeader';
import PasswordField from '@/components/passwordField';
import SelectRequirements from '@/components/selectRequirements';
import Button from '@/components/button';
import {FONT_FAMILY, RouteNames} from '@/constants';
import {useNavigation} from '@react-navigation/native';
import JobCardAppliancesDetail from '@/components/jobCardAppliancesDetail';
import CostDetail from '@/components/costDetail';
import InputField from '@/components/inputField';
import {showMessage} from 'react-native-flash-message';
import {connect, useSelector} from 'react-redux';
import {
  AddUserJob,
  AddVendorJob,
  LoginApi,
} from '@/Redux/Action/AuthActions/authActions';

const GetRequirementsDetail = ({...props}) => {
  const {appliancesData} = props.route.params;

  const navigation = useNavigation();
  const islogin = useSelector(state => state?.AuthReducer?.isLogin);

  const [isState, setIsState] = useState({
    userImg: 'will see',
    title: '',
    name: props?.profileData?.name,
    description: '',
    cost: 10,
    panel: 10,
    battery: 10,
    area: 10,
    extraExpense: 10,
    ttklWatts: 10,
    daysForInstalation: 10,
  });

  console.log("---",props.profileData);
  

  async function onClickProvider() {
    if (isState.title == '') {
      showMessage({
        message: 'Enter Title',
        type: 'default',
        backgroundColor: theme.lightblue,
        color: theme.white,
        statusBarHeight: StatusBar.currentHeight,
      });
    } else if (isState.description == '') {
      showMessage({
        message: 'Enter Description',
        type: 'default',
        backgroundColor: theme.lightblue,
        color: theme.white,
        statusBarHeight: StatusBar.currentHeight,
      });
    } else if (isState.cost == 0) {
      showMessage({
        message: 'Enter Cost In PKR',
        type: 'default',
        backgroundColor: theme.lightblue,
        color: theme.white,
        statusBarHeight: StatusBar.currentHeight,
      });
    } else if (isState.panel == 0) {
      showMessage({
        message: 'Enter No Of Panels',
        type: 'default',
        backgroundColor: theme.lightblue,
        color: theme.white,
        statusBarHeight: StatusBar.currentHeight,
      });
    } else if (isState.battery == 0) {
      showMessage({
        message: 'Enter No Of Battery',
        type: 'default',
        backgroundColor: theme.lightblue,
        color: theme.white,
        statusBarHeight: StatusBar.currentHeight,
      });
    } else if (isState.area == 0) {
      showMessage({
        message: 'Enter Area in sq-feet',
        type: 'default',
        backgroundColor: theme.lightblue,
        color: theme.white,
        statusBarHeight: StatusBar.currentHeight,
      });
    } else if (isState.extraExpense == 0) {
      showMessage({
        message: 'Enter Extra Expense',
        type: 'default',
        backgroundColor: theme.lightblue,
        color: theme.white,
        statusBarHeight: StatusBar.currentHeight,
      });
    } else if (isState.ttklWatts == 0) {
      showMessage({
        message: 'Enter Total Watts',
        type: 'default',
        backgroundColor: theme.lightblue,
        color: theme.white,
        statusBarHeight: StatusBar.currentHeight,
      });
    } else if (isState.daysForInstalation == 0) {
      showMessage({
        message: 'Enter No Of Days',
        type: 'default',
        backgroundColor: theme.lightblue,
        color: theme.white,
        statusBarHeight: StatusBar.currentHeight,
      });
    } else {
      let data = {
        userImg: 'userImg',
        name: isState.name,
        title: isState.title,
        description: isState.description,
        noofpanels: isState.panel,
        battery: isState.battery,
        price: isState.cost,
        area: isState.area,
        extraExpense: isState.extraExpense,
        ttklWatts: isState.ttklWatts,
        daysForInstalation: isState.daysForInstalation,
      };

      let response = await props.AddVendorJob(data, props.token);
      console.log('add job response ==>', response);

      if (response) {
        navigation.navigate(RouteNames.providerBottomTabs)
      }
    }

    // navigation.navigate(RouteNames.homeTabStack)
    return;
  }

  async function onClickUser() {

    if (isState.title == '') {
      showMessage({
        message: 'Enter Title',
        type: 'default',
        backgroundColor: theme.lightblue,
        color: theme.white,
        statusBarHeight: StatusBar.currentHeight,
      });
    } else if (isState.description == '') {
      showMessage({
        message: 'Enter Description',
        type: 'default',
        backgroundColor: theme.lightblue,
        color: theme.white,
        statusBarHeight: StatusBar.currentHeight,
      });
    } 
    else{
      
    let data = {
      userImg: 'userImg',
      name: isState.name,
      title: isState.title,
      description: isState.description,
      List: appliancesData,
    };

    console.log('in psgr response of user add job==>', data);
    if (data?.List?.length > 0) {
      let response = await props.AddUserJob(data, props.token);


      if (response) {
        navigation.goBack()
      }
    }


  }
}

  function renderBtn() {
    return (
      <View style={{marginBottom: 20}}>
        <Button
          width={Metrics.width - 40}
          onPress={() => {
            islogin == 'provider' ? onClickProvider() : onClickUser();
          }}
          distance={1}
          disabled={false}
          marginHorizontal={20}
          title="Post Job"
          txtColor={theme.white}
          bgcolor={theme.lightblue}
          disabledColor={theme.white}
        />
      </View>
    );
  }

  function InputFieldsRender() {
    return (
      <View>

        <InputField
          margTp={5}
          heading="Cost in PKR"
          autoCapital={'none'}
          blurOnSubmit={false}
          placeholder="Approximate Cost"
          value={isState.cost}
          onChangeText={text => setIsState({...isState, cost: text})}
          keyboardType={'numeric'}
        />

        <InputField
          margTp={10}
          heading="Approx No of Panel"
          autoCapital={'none'}
          blurOnSubmit={false}
          placeholder="Approximate Panels"
          value={isState.panel}
          onChangeText={text => setIsState({...isState, panel: text})}
          keyboardType={'numeric'}
        />

        <InputField
          margTp={10}
          heading="Approx No of Battery"
          autoCapital={'none'}
          blurOnSubmit={false}
          placeholder="Approximate Battery"
          value={isState.battery}
          onChangeText={text => setIsState({...isState, battery: text})}
          keyboardType={'numeric'}
        />

        <InputField
          margTp={10}
          heading="Approx No of Area in sq-Feet"
          autoCapital={'none'}
          blurOnSubmit={false}
          placeholder="Approximate Area"
          value={isState.area}
          onChangeText={text => setIsState({...isState, area: text})}
          keyboardType={'numeric'}
        />

        <InputField
          margTp={10}
          heading="Approx Extra Expense"
          autoCapital={'none'}
          blurOnSubmit={false}
          placeholder="Approximate Extra Expense"
          value={isState.extraExpense}
          onChangeText={text => setIsState({...isState, extraExpense: text})}
          keyboardType={'numeric'}
        />

        <InputField
          margTp={10}
          heading="Approx Total Watts"
          autoCapital={'none'}
          blurOnSubmit={false}
          placeholder="Approx Total Watts"
          value={isState.ttklWatts}
          onChangeText={text => setIsState({...isState, ttklWatts: text})}
          keyboardType={'numeric'}
        />

        <InputField
          margTp={10}
          heading="Approx Days For Installation"
          autoCapital={'none'}
          blurOnSubmit={false}
          placeholder="Approx Days"
          value={isState.daysForInstalation}
          onChangeText={text =>
            setIsState({...isState, daysForInstalation: text})
          }
          keyboardType={'numeric'}
        />
      </View>
    );
  }

  return (
    <SafeScrollView screenCol={theme.white} barCol={theme.white}>
      <View style={{marginHorizontal: 20}}>
        <SettingHeader
          name="Your Appliances Detail"
          onPress={() => navigation.goBack()}
        />
      </View>
      <ScrollView contentContainerStyle={{paddingBottom: 50}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          {/* <CostDetail titleL={"Estimate Appliances:"} titleR={""} ttlWatt={"200"} /> */}

          <JobCardAppliancesDetail
            data={appliancesData}
            marginTop={25}
            pakageHeading={'Pakage Detail:'}
          />

<InputField
          margTp={5}
          heading="Enter Title"
          autoCapital={'none'}
          blurOnSubmit={false}
          placeholder="Title of your Business"
          value={isState.title}
          onChangeText={text => setIsState({...isState, title: text})}
          // keyboardType={'numeric'}
        />

        <InputField
          margTp={5}
          heading="Enter Description"
          autoCapital={'none'}
          blurOnSubmit={false}
          placeholder="Description of your Business"
          value={isState.description}
          onChangeText={text => setIsState({...isState, description: text})}
          // keyboardType={'numeric'}
        />

          {islogin == 'provider' ? 
          <>
          {InputFieldsRender()}
          </> : null}
        </View>
      </ScrollView>
      {renderBtn()}
    </SafeScrollView>
  );
};

const mapStateToProps = state => ({
  token: state.AuthReducer.token,
  profileData: state.AuthReducer.profileData
});

const mapDispatchToProps = {
  AddVendorJob: AddVendorJob,
  AddUserJob: AddUserJob,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GetRequirementsDetail);
