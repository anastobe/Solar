import React, { useEffect, useRef, useState } from 'react'
import { View, Text, Image, Pressable, TextInput, Button, FlatList, StatusBar, Modal, ImageBackground, StyleSheet, BackHandler } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import CreditCard from '@/components/CreditCard';
import CustomButton from '@/components/CustomButtom';
import { connect, useDispatch } from 'react-redux';
import ToastAlert from '@/components/ToastAlert';
import { CONTINUE_PAYMENT, GetProfileData } from '@/Redux/Action/AuthActions/authActions';
import { useNavigation } from '@react-navigation/native';
import SettingHeader from '@/components/settingStackHeader';
import ActionType from '@/Redux/Action/ActionType/actionType';
import { RouteNames } from '@/constants';
import SimpleLoader from '@/components/simpleLoader';

var stripe = require('stripe-client')('pk_test_51O0AnUHvsswwFzcdOfhLuJmLfGUGoekoIgUdhOdZrNurhKoKjcSfWzmHbI4ytL7hE5hwTyMPOov2VRcOHaigvAji00Js1TZJzo');

const ProceedPayment = ({ ...props }) => {

    const navigation = useNavigation();
    const [load, setload] = useState(false);
    const [pageLoader, setPageLoader] = useState(false);
    const dispatch = useDispatch();

    var signupData = props.signupData

    const {
        cardData,
        pkgId,
        upgradeType
    } = props.route.params || {}

    useEffect(() => {
        const backAction = () => {
          navigation.goBack();
          // navigation.closeDrawer();
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          'hardwareBackPress',
          backAction,
        );
    
        return () => backHandler.remove();
      }, []);

    let ExpDate = cardData.exp.split("-")
    let F_ExpDate_MM = ExpDate[1]
    let F_ExpDate_YY = ExpDate[0]

    let cardNum = cardData.number
    let cardNum_result = cardNum.replace(/-/g, "");

    let cvc = cardData.cvv;

    let name = cardData.name;

    
    var information = {
      card: {
        number: cardNum_result,
        exp_month: F_ExpDate_MM,
        exp_year: F_ExpDate_YY,
        cvc: cvc,
        name: name
      }
    }    

    console.log("[[[]]]--->",props?.profileData);
    

    const ApiCall = async (item) => {

      var card = await stripe.createToken(item);
      var token = card.id;

      let dataF = new FormData();
      dataF.append('package_id', pkgId);
      dataF.append('stripe_token', token);

      console.log("=response=",token);
      if (token) {
        ToastAlert({text1: 'Transaction Successfull', type: 'success'});
        setload(true)

      let data = {
        payment: true
      }
      let response = await props.CONTINUE_PAYMENT(props?.profileData?._id, data, props.token);
      if (response) {
        await props.GetProfileData(props.token);
        setload(false)
        navigation.navigate(RouteNames.providerBottomTabs)
      }  

      }
      else{
        ToastAlert({text1: "Error, Invalid Credientials", type: 'error'});
      }

      // return

      // let data = {
      //   payment: true
      // }
      // let response = await props.CONTINUE_PAYMENT(props?.profileData?._id, data, props.token);
      // if (response) {
      //   navigation.navigate(RouteNames.providerBottomTabs)
      // }        

      };


    return (
        <SafeAreaView style={styles.container}>       

          <View style={{ marginHorizontal: 15 }} >
          <SettingHeader name="Continue Payment" onPress={() => navigation.goBack()} />
           <CreditCard
            // onPress={()=>CreditCardNavigation(cardData)}
            activOpacty={1}
            cardPic={require('@/assets/images/card.png')}
            visaPic={require('@/assets/images/VisaCard.png')}
            masterPic={require('@/assets/images/masterCard.png')}
            number={cardData.number}
            name={cardData.name}
            exp={cardData.exp}
            cvv={cardData.cvv}
            chippic={require('@/assets/images/chip.png')}
            showBin={false}
            itemId={cardData.id}
            // sectedInd={Index}
            // onPressTrash={()=>onPressTrash(cardData)}
           />
          </View>

            {/* <SpinLoader handleSpinner={pageLoader} /> */}
            
          <View style={{ marginTop: 40, marginHorizontal: 15, position: "absolute", width: '90%', bottom: 20 }}>
                <CustomButton btnOpacity={0.5} title={'Continue'} disabled={false} 
                onPress={() => { 
                    ApiCall(information);
                    }} heights={56} widths={'100%'} />
            </View>

            <SimpleLoader loader={load}  />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff"
    },
    cardText: {
        marginTop: 15,
        fontSize: 20,
        color: 'black',
        fontWeight: "600",
        textDecorationLine: "underline"
    },

});

  
const mapStateToProp = state => ({
    token: state.AuthReducer.token,
    signupData: state.AuthReducer.signupData,
    profileData: state.AuthReducer.profileData,

  });
  
  const mapDispatchToProp = {
    CONTINUE_PAYMENT: CONTINUE_PAYMENT,
    GetProfileData: GetProfileData


  };
  
  export default connect(mapStateToProp, mapDispatchToProp)(ProceedPayment);
