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
} from 'react-native';
// import styles from '@/assets/styles/settingStyle'
import RBSheet from 'react-native-raw-bottom-sheet';
import CustomButton from '@/components/button';
// import FloatingLabel from '@/components/floatingLabel';
// import { cardData, paymentData } from '@/utils/data/data';
// import SettingHeader from '@/components/settingStackHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
// import { addCard, delCard } from '@/redux/actions/user.action';
import {useDispatch, useSelector} from 'react-redux';
import theme from '@/assets/styles/theme';
import InputField from '@/components/inputField';

const PaymentDone = ({navigation}) => {
  const [isSelect, setIsSelect] = useState(true);
  const [number, setNumber] = useState('');
  const [isInvalidNumber, setIsInvalidNumber] = useState(false);
  const [name, setName] = useState('');
  const [isInvalidName, setIsInvalidName] = useState(false);
  const [cvv, setCvv] = useState();
  const [expDate, setExpDate] = useState('');
  const [card, setIsCard] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [delIndex, setDelIndex] = useState(null);
  console.log(number.length, 'No');

  // const userCards = useSelector(({ userReducer }) => userReducer.cards)
  const dispatch = useDispatch();

  const refRBSheet = useRef();

  const addElement = () => {
    if (number.length < 19) {
      // showMessage({
      // message: "Please enter number",
      // type: "default",
      // backgroundColor: "#0760F0",
      // color: "white",
      // });
      alert('Please enter number');
      setIsInvalidNumber(true);
      refRBSheet.current.open();
      return;
    } else if (name.length < 3) {
      // showMessage({
      // message: "Enter atleast 3 alphabets",
      // type: "default",
      // backgroundColor: "#0760F0",
      // color: "white",
      // });

      alert('Enter atleast 3 alphabets');
      setIsInvalidName(true);
      refRBSheet.current.open();
      return;
    } else if (cvv.length < 3 && cvv.length > 3) {
      // showMessage({
      // message: "Cvv must be of 3 digits",
      // type: "default",
      // backgroundColor: "#0760F0",
      // color: "white",
      // });
      alert('Cvv must be of 3 digits');
      setIsInvalidCvv(true);
      refRBSheet.current.open();
      return;
    } else {
      // var newArray = [...exampleState, {
      // number: number,
      // name: name,
      // exp: expDate
      // }];
      // setExampleState(newArray);
      let CardDetails = {
        number: number,
        name: name,
        exp: expDate,
      };
      // dispatch(addCard(CardDetails))
      setNumber('');
      setName('');
      setCvv('');
      setExpDate('');
      refRBSheet.current.close();
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
    // dispatch(delCard(delIndex))
    setModalVisible(false);
  };

  const renderItem = ({item, index}) => {
    return (
      <View>
        <View style={styles.Paymentcard}>
          <ImageBackground source={require('@/assets/images/card.png')}>
            <Image
              source={require('../../assets/images/user.png')}
              style={styles.masterCardIcon}
            />
            <Text style={styles.cardNo}>{item.number}</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <View style={styles.topBottomContainer}>
                <Text style={styles.cardHolder}>Card holder</Text>
                <Text style={styles.cardName}>{item.name}</Text>
              </View>
              <View style={styles.bottomContainer}>
                <Text style={styles.cardExp}>Expiry</Text>
                <Text style={styles.cardExpDate}>{item.exp}</Text>
              </View>
              <View>
                <Image
                  source={require('@/assets/images/chip.png')}
                  style={styles.cardChip}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
        <Pressable
          onPress={() => {
            setModalVisible(true);
            setDelIndex(index);
          }}>
          <Image
            source={require('@/assets/images/patient.png')}
            style={{
              width: 20,
              height: 20,
              alignSelf: 'flex-end',
              tintColor: 'black',
            }}
          />
        </Pressable>
      </View>
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
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.6)'}}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.textStyle}>
                Do you want to delete this card?
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
                    setDelIndex(null);
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
      <View style={{flex: 1}}>
        {/* <SettingHeader name={'Payments'} onPress={() => navigation.navigate('Setting')} /> */}
        <Text style={styles.cardText}>Card</Text>
        <FlatList
          // data={userCards}
          data={[{id: 1}]}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
        <View style={{height: '8%', marginBottom: 10}}>
          <CustomButton
            title={'Add new card'}
            onPress={() => refRBSheet.current.open()}
            heights={56}
            widths={'100%'}
          />
        </View>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={false}
          customStyles={{
            wrapper: {
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
            },
            draggableIcon: {
              backgroundColor: '#000',
              width: 50,
            },
            container: {
              height: 450,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            },
          }}>
          <View style={{marginHorizontal: 10}}>
            <Text style={styles.newCardHeading}>Add new card</Text>
            <Text style={styles.cardTypeHeading}>Card type</Text>
            <View style={styles.toggleButton}>
              <Pressable
                onPress={() => {
                  setIsSelect(true);
                }}
                style={{flexDirection: 'row'}}>
                <Text
                  style={[
                    styles.visaButton,
                    {
                      backgroundColor: isSelect ? '#0760F0' : '#F2F4F5',
                      color: isSelect ? 'white' : 'black',
                    },
                  ]}>
                  Visa Card
                </Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  setIsSelect(false);
                }}>
                <Text
                  style={[
                    styles.masterButton,
                    {
                      backgroundColor: !isSelect ? '#0760F0' : '#F2F4F5',
                      color: !isSelect ? 'white' : 'black',
                    },
                  ]}>
                  Master Card
                </Text>
              </Pressable>
            </View>

            <InputField
              placeholderTextColor={theme.lightblue}
              placeholder="Number"
              onChangeText={handleSetNumber}
              value={number}
              keyboardType={'numeric'}
            />

            <InputField
              placeholderTextColor={theme.lightblue}
              placeholder="Card holder's name"
              onChangeText={handleSetName}
              value={name}
              keyboardType={'default'}
            />

            {/* <FloatingLabel name={'Number'} value={number} onChangeText={handleSetNumber} mask="9999 9999 9999 9999" keyboardType="numeric" isInvalidNumber={isInvalidNumber} />
<FloatingLabel name={"Card holder's name"} value={name} onChangeText={handleSetName} isInvalidName={isInvalidName} /> */}
            <View style={{flexDirection: 'row'}}>
              <View style={{width: '48%', marginRight: '3%'}}>
                <InputField
                  placeholderTextColor={theme.lightblue}
                  placeholder="CVV code"
                  onChangeText={setCvv}
                  value={cvv}
                  keyboardType={'numeric'}
                />
                {/* <FloatingLabel name={"CVV code"} value={cvv} onChangeText={setCvv} mask="999" width={50} keyboardType="numeric" /> */}
              </View>
              <View style={{width: '49%'}}>
                <InputField
                  placeholderTextColor={theme.lightblue}
                  placeholder="Expiration Date"
                  onChangeText={setExpDate}
                  value={expDate}
                  keyboardType={'numeric'}
                />

                {/* <FloatingLabel name={"Expiration Date"} value={expDate} onChangeText={setExpDate} mask="99/99" keyboardType="numeric" /> */}
              </View>
            </View>
            <View style={{height: '15%'}}>
              <CustomButton
                title={'Add card'}
                disabled={!name || !number || !cvv || !expDate}
                onPress={() => [setIsCard(false), addElement()]}
                heights={56}
                widths={'100%'}
              />
            </View>
          </View>
        </RBSheet>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  //Payment
  paymentContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  Paymentcard: {
    backgroundColor: '#0760F0',
    padding: 20,
    borderRadius: 8,
    height: 184,
    marginVertical: 24,
  },
  masterCardIcon: {
    width: 38,
    height: 22,
    tintColor: 'white',
    // backgroundColor: 'rgba(255,255,255,0.5)',
    alignSelf: 'flex-end',
  },
  cardText: {
    fontSize: 16,
    color: 'black',
    marginVertical: 20,
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
    width: 160,
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
    width: 160,
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
delIcon: {
    width: 20,
    height: 20,
    alignSelf: 'flex-end',
    tintColor: 'black',
    marginTop: -5,
},
delView: {
    flexDirection: 'row',
    marginTop: -13,
    justifyContent: 'space-between'
},


});

export default PaymentDone;
