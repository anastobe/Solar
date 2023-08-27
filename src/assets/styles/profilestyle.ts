import {FONT_FAMILY} from '@/constants/index';
import {StyleSheet} from 'react-native';
import {Metrics} from '@/assets/metrics/metrics';
import theme from '@/assets/styles/theme';

export default StyleSheet.create({
  headerView: {
    // marginHorizontal: 20,
    // marginTop: 24,
    // backgroundColor: "red"
  },
  modalView: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    flex: 1,
  },
  modalSubViewTwo: {
    backgroundColor: theme.white,
    borderRadius: 10,
    alignSelf: 'center',
    // height: 100,
    width: Metrics.width - 30 - 30,
  },
  powerImg: {
    width: 22,
    height: 22,
    tintColor: theme.black,
    resizeMode: 'contain'
  },
  signOutText: {
    color: theme.black,
    marginLeft: 7,
    fontSize: 16,
    fontFamily: FONT_FAMILY.MontserratMedium,
  },
  surityText: {
    color: theme.black,
    marginLeft: 12,
    fontFamily: FONT_FAMILY.MontserratMedium,
    fontSize: 14,
  },
  yesNoView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 10,
    marginRight: 15,
  },
  yesTextView: {
    width: 50,
    height: 30,
    justifyContent: 'center',
  },
  yesText: {
    color: theme.black,
    fontFamily: FONT_FAMILY.MontserratBold,
    fontSize: 14,
    textAlign: 'center',
  },
  cancelTextView: {
    width: 60,
    height: 30,
    justifyContent: 'center',
  },
  cancelText: {
    color: theme.black,
    fontFamily: FONT_FAMILY.MontserratBold,
    fontSize: 14,
  },
  topView: {
    flexDirection: 'row',
    marginTop: 25,
    marginHorizontal: 20,
  },
  imgView: {
    // marginHorizontal: 20,
    // backgroundColor: "red"
  },
  manImg: {
    width: 95,
    height: 95,
    borderRadius: 50,
  },
  cameraView: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 29,
    height: 29,
    backgroundColor: theme.white,
    borderRadius: 20,
  },
  btnShadow: {
    width: 29,
    height: 29,
    borderRadius: 20,
  },
  cameraImg: {
    width: 12,
    height: 10,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: 9,
  },
  topTextView: {
    justifyContent: 'center',
    marginLeft: 28,
    // backgroundColor: "blue",
  },
  nameText: {
    fontFamily: FONT_FAMILY.MontserratRegular,
    fontSize: 23,
    color: theme.black,
  },
  noText: {
    fontFamily: FONT_FAMILY.MontserratSemiBold,
    fontSize: 12,
    color: theme.tealGreen,
  },
  patientText: {
    fontFamily: FONT_FAMILY.MontserratSemiBold,
    fontSize: 12,
    color: theme.tealGreen,
  },
  afterTopView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 36,
    // backgroundColor: "red",
    // justifyContent: 'space-between'
    // marginHorizontal: 20
  },
  afterTopSubView: {
    width: Metrics.width / 3,
    height: 55 + 14,
    // marginHorizontal: 20
  },
  afterTopTextView: {
    width: 42,
    height: 42,
    backgroundColor: theme.skyBlue2,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  afterTopText: {
    fontFamily: FONT_FAMILY.MontserratSemiBold,
    fontSize: 17,
    color: theme.black,
  },
  afterTopSubViewTwo: {
    marginTop: 10,
  },
  afterTopTextTwo: {
    fontFamily: FONT_FAMILY.MontserratMedium,
    fontSize: 12,
    color: theme.darkgreytxt,
    textAlign: 'center',
  },
  barView: {
    height: 55,
    width: 1,
    backgroundColor: theme.disablegrey,
    // alignItems: 'center',
    marginTop: 14,
  },
  flatlistMain: {
    flexDirection: 'row',
    width: Metrics.width - 40,
    alignItems: 'center',
    marginHorizontal: 20,
    // backgroundColor: "red",
    justifyContent: 'space-between',
    marginTop: 15,
  },
  flatlistHeadingView: {
    marginLeft: 30,
    justifyContent: 'center',
  },
  flatlistHeadingText: {
    fontFamily: FONT_FAMILY.MontserratMedium,
    fontSize: 15,
    color: theme.black,
  },
  horizontalLine: {
    width: Metrics.width - 40,
    borderWidth: 0.5,
    borderColor: theme.disablegrey,
    alignSelf: 'center',
    marginTop: 10,
  },
  profileView: {
    marginHorizontal: 20,
    marginTop: 30,
    // backgroundColor: "red",
    // marginBottom: 12
  },
  profileText: {
    fontFamily: FONT_FAMILY.MontserratMedium,
    fontSize: 18,
    color: theme.black,
  },
  prefView: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  prefText: {
    fontFamily: FONT_FAMILY.MontserratMedium,
    fontSize: 18,
    color: theme.black,
  },
  mainImgView: {
    backgroundColor: theme.skyBlue2,
    width: 42,
    height: 42,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainImg: {
    width: 17,
    height: 19,
    resizeMode: 'contain',
  },
  arrowImgView: {
    width: 20,
    height: 30,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  arrowImg: {
    width: 8,
    height: 14,
  },

  //Payment Method
  newCardHeading: {
    fontFamily: FONT_FAMILY.MontserratBold,
    fontSize: 16,
    color: theme.black,
    marginLeft: 10,
  },
  cardTypeHeading: {
    fontFamily: FONT_FAMILY.MontserratRegular,
    fontSize: 14,
    color: '#72777A',
    lineHeight: 24,
    marginTop: 16,
    // backgroundColor: "red"
  },
  toggleButton: {
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 24,
  },
  visaButton: {
    textAlign: 'center',
    // padding: 10,
    marginVertical: 10,
    marginHorizontal: 7,
    fontFamily: FONT_FAMILY.MontserratBold,
    fontSize: 14,
  },
  visaIcon: {
    width: 20,
    height: 40,
    tintColor: 'white',
  },
  masterButton: {
    textAlign: 'center',
    marginVertical: 15,
    marginLeft: 14,
    borderRadius: 8,
    fontFamily: FONT_FAMILY.MontserratRegular,
    fontSize: 14,
  },
  cardNoText: {
    fontFamily: FONT_FAMILY.MontserratSemiBold,
    fontSize: 14,
    color: theme.black,
    marginBottom: 8,
    marginLeft: 10,
  },
  numberInputView: {
    borderWidth: 1,
    height: 60,
    borderRadius: 14,
  },
  PayCardCon: {
    height: 86,
    width: Metrics.width - 40,
    backgroundColor: theme.Cultured,
    alignSelf: 'center',
    marginTop: 25,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  inLine: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  payImg: {
    width: 56,
    height: 64,
    borderRadius: 50,
  },
  dateTxt: {
    fontSize: 14,
    fontFamily: FONT_FAMILY.MontserratRegular,
    color: 'rgba(0, 0, 0, 0.48)',
  },
  payNameTxt: {
    fontSize: 18,
    fontFamily: FONT_FAMILY.MontserratRegular,
    color: theme.GrayBlack,
    lineHeight: 22,
    marginTop: 4,
  },
  dollTxt: {
    fontSize: 18,
    fontFamily: FONT_FAMILY.MontserratRegular,
    color: theme.black,
  },
  margLft: {
    marginLeft: 20,
    marginTop: 10,
  },
  payHistryTxt: {
    fontSize: 18,
    color: theme.GrayBlack,
    fontFamily: FONT_FAMILY.MontserratRegular,
  },

  //Modal
  modalMainView: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    flex: 1,
  },
  modalSubView: {
    height: 187,
    backgroundColor: theme.white,
    borderRadius: 20,
    marginHorizontal: 20,
    paddingHorizontal: 5,
  },
  crossImgView: {
    position: 'absolute',
    right: 10,
    top: -15,
    backgroundColor: theme.white,
    borderRadius: 50,
  },
  crossImg: {
    width: 26,
    height: 26,
  },
  bookingScheduledView: {
    marginTop: 37,
    marginHorizontal: 50,
    marginBottom: 20,
  },
  bookingScheduledText: {
    fontFamily: FONT_FAMILY.MontserratSemiBold,
    fontSize: 22,
    textAlign: 'center',
    color: theme.black,
  },
  successView: {
    marginHorizontal: 20,
    alignSelf: 'center',
  },
  successText: {
    fontFamily: FONT_FAMILY.MontserratRegular,
    fontSize: 12,
    color: theme.black,
    textAlign: 'center',
  },
});
