// import React, { useRef } from 'react'
// import { FlatList, ScrollView, Text, View } from 'react-native'
// import { Metrics } from '@/assets/metrics/metrics'
// import theme from '@/assets/styles/theme'
// import SafeScrollView from '@/components/safeScrollView'
// import SettingHeader from '@/components/settingStackHeader'
// import { useNavigation } from '@react-navigation/native'
// import CalanderBoxImg from '@/components/calanderBoxImg'

import React, {useEffect, useRef, useState, memo} from 'react';
import styles from '@/assets/styles/home/jobDetailAndPayment';
import theme from '@/assets/styles/theme';
import Header from '@/components/header';
import SafeScrollView from '@/components/safeScrollView';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Pressable,
  ScrollView,
  Alert,
} from 'react-native';
import {FONT_FAMILY, RouteNames} from '@/constants';
import {scheduleData} from '@/utils/data';
import {Metrics} from '@/assets/metrics/metrics';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import {connect, useDispatch} from 'react-redux';
import CalanderBox from '@/components/calanderBox';
import CalanderBoxImg from '@/components/calanderBoxImg';
import SettingHeader from '@/components/settingStackHeader';
import DatePicker from 'react-native-date-picker';
import JobCard from '@/components/jobCard';
import Button from '@/components/button';
import JobCardAppliancesDetail from '@/components/jobCardAppliancesDetail';


const JobDetailAndPayment = (props) => {

  const {data} = props?.route?.params

    const dispatch = useDispatch();

    var currdate = new Date().getDate();
    var currmonth = new Date().getMonth();
    var curryear = new Date().getFullYear();
  
    function daysInThisMonth() {
      var now = new Date();
      return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    }    
  
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
  
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const dayNames = [];
  
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const formatter = new Intl.DateTimeFormat('en-US', {weekday: 'long'});
      const dayName = formatter.format(date);
      dayNames.push({name: dayName});
    }
  
    const FlatlistRef = useRef();
    const navigation = useNavigation();
  
    const [statecurrdate, setstatecurrdate] = useState(new Date().getDate());
    const [statecurrmonth, setstatecurrmonth] = useState(new Date().getMonth());
    const [statecurryear, setstatecurryear] = useState(new Date().getFullYear());
  
    const [schedule, setschedule] = useState();
    const [appoinmentData, setAppoinmentData] = useState();
    const [selectedBocId, setSelectedBocId] = useState();
    const [selectedAppId, setSelectedAppId] = useState();
    const [show, setShow] = useState(false);
  
    useEffect(() => {
      setschedule(scheduleData);
    }, [scheduleData]);
  
    const selectedBox = (id, date) => {
      setstatecurrdate(date);
      setSelectedBocId(id);
    };
  
    const selAppoinBox = id => {
      setSelectedAppId(id);
    };
  
    function openCalander() {
      setShow(true);
    }
  
    const SaveDate = date => {
      setTimeout(() => {
      let dateinFormat = moment(date).format('MM-DD-YYYY').toString()?.split('-');
      let dd = dateinFormat[1];
  
      setShow(false);
      setstatecurrdate(dd);
      setSelectedBocId(dd - 1);
      FlatlistRef.current.scrollToIndex({index: dd - 2});
      
    }, 200)
      // setShowcal(false);
    };
  
    function onPressSelectBox(id, date) {
      selectedBox(id, date);
    }
  
    const Schedules = () => {
      const renderIten = ({item}) => {
        const {id, day, date} = item;
  
        if (date + 1 > currdate) {
          return (
            <CalanderBox
              id={id}
              onPressSelectBox={() => onPressSelectBox(id, date)}
              selectBoxContSty={[
                styles.schCont,
                {
                  backgroundColor:
                    selectedBocId == id ? theme.lightblue : theme.skyBlue2,
                },
              ]}
              selectBoxContDate={[
                styles.schtxtDate,
                {color: selectedBocId == id ? theme.white : theme.lightBlack},
              ]}
              date={date}
              selectBoxContDay={[
                styles.schtxtname,
                {color: selectedBocId == id ? theme.white : theme.lightBlack},
              ]}
              day={day}
            />
          );
        } else {
          return null;
        }
      };
  
      return (
        <View style={{flexDirection: 'row'}}>
          <CalanderBoxImg
            onPress={openCalander}
            imgshow={require('@/assets/images/patient.png')}
          />
          <FlatList
            ref={FlatlistRef}
            data={
              //as per number of days in Months
              currmonth == 3 ||
              currmonth == 5 ||
              currmonth == 8 ||
              (currmonth == 10 && dayNames)
                ? schedule?.slice(0, 30)
                : currmonth == 1
                ? schedule?.slice(0, 29)
                : schedule?.slice(0, 31)
            }
            initialNumToRender={31}
            keyExtractor={item => item.id.toString()}
            renderItem={renderIten}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
          />
        </View>
      );
    };

    function onClick() {
        navigation.navigate(RouteNames.paymentDone)
    }

    function renderBtn() {
        return (
          <View
            style={{
                width: Metrics.width,
                backgroundColor: theme.white,
                bottom: 15,
                paddingTop: 2,
                position: 'absolute', 
            }} >
            <Button
              width={Metrics.width - 40}
              onPress={onClick}
              distance={1}
              disabled={false}
              marginHorizontal={20}
              title="I Like Offer And Proceed Payment"
              txtColor={theme.white}
              bgcolor={theme.lightblue}
              disabledColor={theme.white}
            />
          </View>
        );
      }


//user
  const Message = () => {
    // return alert("user")

    if (data?._id) {  //login hone k baad ya api se ara hoga
      navigation.navigate('ChatScreen', {
        itemData: {
          fullName: data.name,
          firebase_id: data?.firebase_id,
          profile: "props?.base_url+"/"+cardInfo?.user?.profile_image",
          device_token: "xyz token",
        }
      })
    }
    else {
      alert({ text1: 'Something Wrong!' })
    }

    // navigation.navigate(RouteNames.chatTabStack)      
      
    }

  return (
    <SafeScrollView screenCol={theme.white} barCol={theme.white}  >
      <View style={{ marginHorizontal: 20 }} >
        <SettingHeader name="Job Detail And Payment" onPress={() => navigation.goBack()} />
      </View>
      <ScrollView>

      <View style={{ alignItems: "flex-end", margin: 15 }} >
          <TouchableOpacity onPress={()=>{ Message() }} style={{ width: 150, height: 50, backgroundColor: theme.darkgrey, borderRadius: 10, justifyContent: 'center', alignItems: "center" }} >
            <Text style={{ color: theme.white, fontSize: 15, fontFamily: FONT_FAMILY.MontserratSemiBold }} >Send Message ></Text>  
          </TouchableOpacity>
        </View>

        {/* <View style={{ marginTop: 20 }} >
      {Schedules()}
        </View> */}
        <JobCardAppliancesDetail
            marginTop={10}
            data={data}
            pakageHeading={"Pakage Detail:"}
            paymentView={true}
          />



      </ScrollView>
          {/* {renderBtn()} */}

      <DatePicker
          modal
          open={show}
          mode={'date'}
          minimumDate={new Date(curryear, currmonth, currdate)}
          maximumDate={new Date(curryear, currmonth, daysInThisMonth())}
          // date={date}  //yy/mm/dd
          date={new Date(statecurryear, statecurrmonth, statecurrdate)} //yy/mm/dd
          onConfirm={date => {
            SaveDate(date);
          }}
          onCancel={() => {
            setShow(false);
          }}
        />

    </SafeScrollView>
  )
}


const mapStateToProps = state => ({
  token: state.AuthReducer.token,
  profileData: state.AuthReducer.profileData
});

const mapDispatchToProps = {

};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(JobDetailAndPayment);
