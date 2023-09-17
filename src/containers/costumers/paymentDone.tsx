import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  Button,
  FlatList,
  StatusBar,
  Modal,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
  Alert,
} from 'react-native';
// import styles from '@/assets/styles/settingStyle'
import RBSheet from 'react-native-raw-bottom-sheet';
import CustomButton from '@/components/CustomButtom';
// import FloatingLabel from '@/components/floatingLabel';
// import { cardData, paymentData } from '@/utils/data/data';
// import SettingHeader from '@/components/settingStackHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
// import { addCard, delCard } from '@/redux/actions/user.action';
import {connect, useDispatch, useSelector} from 'react-redux';
import theme from '@/assets/styles/theme';
import InputField from '@/components/inputField';
import InputFieldMask from '@/components/InputFieldMask';
import Octicons from 'react-native-vector-icons/Octicons';
import DatePicker from 'react-native-date-picker';
import ToastAlert from '@/components/ToastAlert';
import {
  addCard,
  removeaddCard,
} from '@/Redux/Action/AuthActions/authActions';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import CreditCard from '@/components/CreditCard';
import EmptyData from '@/components/EmptyData';
import SettingHeader from '@/components/settingStackHeader';

const PaymentDone = props => {

  // const pkgId = props?.route?.params?.id;
  // const upgradeType = props?.route?.params?.upgradeType;

  const dispatch = useDispatch();
  const refRBSheet = useRef();
  const flatListRef = useRef();
  const navigation = useNavigation();

  const yourDate = new Date();
  var NewDate = moment(yourDate, 'DD-MM-YYYY').format();
  var F_NewDate = NewDate.split('T')[0];

  const [number, setNumber] = useState('');
  const [isInvalidNumber, setIsInvalidNumber] = useState(false);
  const [name, setName] = useState('');
  const [isInvalidName, setIsInvalidName] = useState(false);
  const [cvv, setCvv] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [delIndexNumber, setDelIndexNumber] = useState('');
  const [Index, setIndex] = useState('');
  const [date, setDate] = useState(F_NewDate);
  const [show, setShow] = useState(false);

  let mySavedCards = props.userCards;
  let myEnteredNumber = delIndexNumber;

  console.log("----",mySavedCards);
  

  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      navigation.closeDrawer();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const addElement = () => {
    if (number?.length < 19) {
      ToastAlert({text1: 'Please enter 16 digit number', type: 'error'});
      // setIsInvalidNumber(true)
      refRBSheet.current.open();
      return;
    } else if (name.length < 3) {
      ToastAlert({text1: 'Please enter your correct name', type: 'error'});
      // setIsInvalidName(true)
      refRBSheet.current.open();
      return;
    } else if (cvv?.length < 3 && cvv.length > 3) {
      ToastAlert({text1: 'Cvv must be of 3 digits', type: 'error'});
      // setIsInvalidCvv(true)
      refRBSheet.current.open();
      return;
    } else if (F_NewDate == date) {
      ToastAlert({text1: 'Please select correct Expiry Date', type: 'error'});
      // setIsInvalidCvv(true)
      refRBSheet.current.open();
      return;
    } else {
      const CardDetails = {
        id: props?.userCards?.length + 1,
        number: number,
        name: name,
        exp: date,
        cvv: cvv,
      };

      //check card is already there or not with same credientials
      const result = mySavedCards?.find(
        obj => obj?.number === CardDetails?.number,
      );
      if (result) {
        Alert.alert('Card Already Present With This Card Number');
      } else {
        dispatch(addCard(CardDetails));
        setNumber('');
        setName('');
        setCvv('');
        setDate(F_NewDate);
        refRBSheet.current.close();
        setTimeout(() => {
          flatListRef.current?.scrollToEnd({animated: false});
        }, 1000);
      }
    }
  };

  const handleSetNumber = myNo => {
    setNumber(myNo);
    if (isInvalidNumber && number.length >= 18) {
      setIsInvalidNumber(false);
    }
  };

  const handleSetName = inputName => {
    setName(inputName);
    if (isInvalidName && name.length >= 2) {
      setIsInvalidName(false);
    }
  };

  const deleteFunc = () => {
    const filteredArray = mySavedCards.filter(
      obj => obj.number !== myEnteredNumber,
    );
    dispatch(removeaddCard(filteredArray));
    setModalVisible(false);
  };

  const showCal = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  function CreditCardNavigation(item) {
    setIndex(item.id);
    setTimeout(() => {
      navigation.navigate('ProceedPayment', {
        cardData: item,
        pkgId: '1',
        upgradeType: 'paid',
      });
    }, 1000);
    return;
  }

  function onPressTrash(item) {
    setModalVisible(true);
    setDelIndexNumber(item.number);
  }

  function ListEmptyComponent() {
    return (
      <EmptyData
        pos={'center'}
        txt={'No Card Is Added'}
        iconName={'hourglass'}
      />
    );
  }

  const renderItem = ({item, index}) => {
    return (
      <CreditCard
        activOpacty={0.8}
        onPress={() => CreditCardNavigation(item)}
        cardPic={require('@/assets/images/card.png')}
        visaPic={require('@/assets/images/VisaCard.png')}
        masterPic={require('@/assets/images/masterCard.png')}
        number={item.number}
        name={item.name}
        exp={item.exp}
        cvv={item.cvv}
        chippic={require('@/assets/images/chip.png')}
        showBin={true}
        itemId={item.id}
        sectedInd={Index}
        onPressTrash={() => onPressTrash(item)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.paymentContainer}>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={{backgroundColor: 'rgba(0,0,0,0.6)', flex: 1}}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.textStyle}>
                Do you want to delete this card?
              </Text>
              <Text style={styles.textStyle}>
                Card Number: {delIndexNumber}
              </Text>
              <View style={{flexDirection: 'row', marginVertical: 10}}>
                <Pressable style={styles.deleteButton} onPress={deleteFunc}>
                  <Text style={{color: 'white', textAlign: 'center'}}>
                    Delete
                  </Text>
                </Pressable>
                <Pressable
                  style={styles.cancelButton}
                  onPress={() => {
                    setModalVisible(false);
                    setDelIndexNumber('');
                  }}>
                  <Text style={{color: 'white', textAlign: 'center'}}>
                    Cancel
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <View style={{flex: 1, marginHorizontal: 20}}>

      <SettingHeader name="Add Card" onPress={() => navigation.goBack()} />

        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", justifyContent: "flex-end", marginBottom: 5 }} >
            
                <TouchableOpacity style={ styles.cardTextXtraStyle }  activeOpacity={0.6} onPress={()=>{ refRBSheet.current.open() }} >
                <Text style={[styles.cardText,{ color: "#fff" }]}>Add Cards</Text>
                </TouchableOpacity>
                </View>

        <FlatList
          ref={flatListRef}
          contentContainerStyle={{paddingBottom: 30}}
          data={mySavedCards}
          ListEmptyComponent={ListEmptyComponent}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
          {/* <View style={{  marginBottom: 10 }}>
            <CustomButton distance={1} title={'Continue'} onPress={() => { Alert.alert("move to next page") }} heights={56} widths={'100%'} />
          </View> */}
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            wrapper: {
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
            },
            draggableIcon: {
              backgroundColor: '#000',
              width: 50,
            },
            container: {
              height: 380,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            },
          }}>
          <View style={{marginHorizontal: 15, marginTop: 5}}>
            <Text style={styles.newCardHeading}>Add new card</Text>

            <InputFieldMask
              maxLen={19}
              height={55}
              placeholderTextColor={theme.darkgrey}
              placeholder="Number"
              onChangeText={handleSetNumber}
              icon={<Octicons name="credit-card" size={22} color="black" />}
              value={number}
              mask={[
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                '-',
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                '-',
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                '-',
                /\d/,
                /\d/,
                /\d/,
                /\d/,
              ]}
              keyboardType={'numeric'}
            />

            <InputFieldMask
              height={55}
              icon={<Octicons name="person" size={22} color="black" />}
              placeholderTextColor={theme.darkgrey}
              placeholder="Card holder's name"
              onChangeText={handleSetName}
              value={name}
              maxlen={20}
              keyboardType={'default'}
              mask={[
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
              ]}
            />

            <View style={{flexDirection: 'row'}}>
              <View style={{width: '48%', marginRight: '3%'}}>
                <InputFieldMask
                  height={55}
                  maxLen={3}
                  icon={<Octicons name="note" size={22} color="black" />}
                  placeholderTextColor={theme.darkgrey}
                  placeholder="CVV code"
                  onChangeText={setCvv}
                  value={cvv}
                  mask={[/\d/, /\d/, /\d/, /\d/, /\d/]}
                  keyboardType={'numeric'}
                />
              </View>
              <View style={{width: '49%'}}>
                <TouchableOpacity
                  onPress={() => {
                    showCal(show);
                  }}>
                  <View
                    style={{
                      width: '100%',
                      height: 56,
                      flexDirection: 'row',
                      alignItems: 'center',
                      borderBottomColor: theme.darkgrey,
                      borderBottomWidth: 1,
                    }}>
                    <Octicons name="calendar" size={22} color="black" />
                    <View style={{marginLeft: 10}}>
                      {F_NewDate == date ? (
                        <Text style={{color: theme.darkgrey}}>
                          Expiration Date
                        </Text>
                      ) : (
                        <Text style={{color: '#000'}}>{date}</Text>
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginTop: 40}}>
            <CustomButton title={'Add card'} disabled={!name || !number || !cvv ||(F_NewDate == date)} 
              distance={1}
              onPress={() => { 
                addElement()
            }} heights={56} widths={'100%'} />
            </View>
          </View>
        </RBSheet>

        <DatePicker
          modal
          open={show}
          mode={'date'}
          // maximumDate={new Date()}
          minimumDate={new Date()}
          date={new Date()}
          onConfirm={date => {
            var NewDate = moment(date, 'DD-MM-YYYY').format();
            var F_NewDate = NewDate.split('T')[0];

            console.log('/////', F_NewDate);

            setDate(F_NewDate);
            setShow(false);
          }}
          onCancel={() => {
            setShow(false);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  //Payment
  paymentContainer: {
    flex: 1,
    backgroundColor: "white",
    // marginHorizontal: 10,
  },
  Paymentcard: {
    backgroundColor: '#0760F0',
    padding: 20,
    borderRadius: 8,
    height: 210,
    marginTop: 15,
    // marginVertical:10
  },
  masterCardIcon: {
    width: 38,
    height: 22,
    tintColor: 'white',
    // backgroundColor: 'rgba(255,255,255,0.5)',
    alignSelf: 'flex-end',
  },
  cardText: {
    // marginTop: 15,
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  cardTextXtraStyle: {
    width: 140,
    height: 35,
    backgroundColor: '#0760F0',
    color: '#fff',
    textAlign: 'center',
    borderRadius: 10,
    // paddingTop: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardNo: {
    color: 'white',
    fontSize: 20,
    marginVertical: 20,
  },
  cardHolder: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 12,
  },
  cardExp: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 12,
  },
  cardName: {
    color: 'white',
    fontSize: 12,
  },
  cardExpDate: {
    color: 'white',
    fontSize: 12,
  },
  cardChip: {
    width: 32,
    height: 25,
  },
  newCardHeading: {
    fontSize: 16,
    color: 'black',
    marginBottom: 20
  },
  cardTypeHeading: {
    fontSize: 14,
    color: '#72777A',
    lineHeight: 24,
    marginTop: 10,
  },
  toggleButton: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  visaButton: {
    textAlign: 'center',
    padding: 10,
    width: 130,
    borderRadius: 8,
    marginHorizontal: 7,
    fontSize: 14,
    fontWeight: '700',
  },
  visaIcon: {
    width: 20,
    height: 40,
    tintColor: 'white',
  },
  masterButton: {
    textAlign: 'center',
    padding: 10,
    width: 130,
    borderRadius: 8,
    fontStyle: 'normal',
    fontSize: 14,
    fontWeight: '700',
  },
  Button: {
    backgroundColor: '#0760F0',
    height: 56,
    marginVertical: 10,
    borderRadius: 8,
  },
  ButtonText: {
    color: 'white',
    fontSize: 15,
    marginVertical: 18,
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  modalText: {
    color: '#EA1D25',
  },
  textStyle: {
    lineHeight: 44,
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
  deleteButton: {
    backgroundColor: '#FF4A4A',
    borderWidth: 2,
    borderRadius: 8,
    padding: 10,
    width: '45%',
    borderColor: 'transparent',
    marginHorizontal: 10,
  },
  cancelButton: {
    backgroundColor: '#0760F0',
    borderWidth: 2,
    borderRadius: 8,
    padding: 10,
    width: '45%',
    borderColor: 'transparent',
  },
});

const mapStateToProp = state => ({
  userCards: state?.AuthReducer?.cards,
});

const mapDispatchToProp = {};

export default connect(mapStateToProp, mapDispatchToProp)(PaymentDone);




// import React from 'react'
// import { Text, View } from 'react-native'

// const PaymentDone = () => {
//   return (
//     <View>
//       <Text>
//       PaymentDone
//       </Text>
//     </View>
//   )
// }

// export default PaymentDone
