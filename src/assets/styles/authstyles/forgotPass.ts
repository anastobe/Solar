import {Metrics} from '@/assets/metrics/metrics';
import {FONT_FAMILY} from '@/constants';
import {Platform, StyleSheet} from 'react-native';
import theme from '../theme';

export default StyleSheet.create({
  logoView: {
    alignItems: 'center',
  },
  ForgetTxt: {
    fontFamily: FONT_FAMILY.MontserratSemiBold,
    fontSize: 24,
    color: theme.lightblue,
    textAlign: 'center',
  },
  DontWorrTxt: {
    fontFamily: FONT_FAMILY.MontserratRegular,
    fontSize: 14,
    color: theme.lightblue,
    marginTop: 12,
    textAlign: 'center',
  },
  // 2790BF
  btnFloat: {
    width: Metrics.width,
    backgroundColor: theme.white,
    bottom: 0,
    paddingBottom: 5,
    paddingTop: 2,
  },

  //PassVerification
  passVerificationMainView: {
    flex: 1,
    backgroundColor: theme.white,
  },
  topImgView: {
    alignSelf: 'center',
    marginTop: 80,
  },
  topImg: {
    resizeMode: 'contain',
  },
  headingView: {
    alignSelf: 'center',
  },
  headingText: {
    fontFamily: FONT_FAMILY.MontserratSemiBold,
    fontSize: 24,
    color: theme.lightblue,
  },
  otpView: {
    marginTop: 12,
    backgroundColor: theme.tealGreen,
    width: Metrics.width - 20 - 20,
    alignSelf: 'center',
    borderRadius: 15,
  },
  otpInputView: {
    marginTop: 21,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  otpInputStyles: {
    width: '100%',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: FONT_FAMILY.MontserratMedium,
    borderRadius: 10,
    color: theme.black,
    marginVertical: Platform.OS === 'ios' ? 15 : 0,
  },
  emailView: {
    alignSelf: 'center',
    marginVertical: 10,
  },
  emailText: {
    fontFamily: FONT_FAMILY.MontserratMedium,
    fontSize: 14,
    color: theme.white,
  },
  afterEmailView: {
    alignSelf: 'center',
  },
  afterEmailText: {
    fontFamily: FONT_FAMILY.MontserratRegular,
    fontSize: 14,
    color: theme.white,
  },
  resendText: {
    fontFamily: FONT_FAMILY.MontserratBold,
    fontSize: 14,
    color: theme.white,
  },
  timerView: {
    marginRight: 27,
    marginBottom: 9,
  },
  timerText: {
    fontFamily: FONT_FAMILY.MontserratMedium,
    fontSize: 10,
    color: theme.white,
    textAlign: 'right',
  },
  btnView: {
    position: 'absolute',
    bottom: 10,
    width: Metrics.width,
    borderRadius: 20,
    alignSelf: 'center',
    // marginTop: Metrics.height - 550
  },

  //ResetPass
  resetPassMainView: {
    flex: 1,
    backgroundColor: theme.white,
  },
  resetPwdView: {
    marginLeft: 20,
  },
  resetPwdText: {
    fontFamily: FONT_FAMILY.MontserratSemiBold,
    fontSize: 18,
    color: theme.lightblue,
  },
  pwdHintView: {
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
  },
  pwdHintText: {
    fontFamily: FONT_FAMILY.MontserratMedium,
    fontSize: 14,
    color: theme.darkgrey,
  },
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
    borderRadius: 50
  },
  crossImg: {
    width: 26,
    height: 26
  },
  pwdResetView: {
    marginTop: 37,
    marginHorizontal: 60,
    marginBottom: 20
  },
  pwdResetText: {
    fontFamily: FONT_FAMILY.MontserratSemiBold,
    fontSize: 22,
    textAlign: 'center',
    color: theme.black
  },
  successView: {
    marginHorizontal: 20,
    alignSelf: 'center'
  },
  successText: {
    fontFamily: FONT_FAMILY.MontserratRegular,
    fontSize: 12,
    color: theme.black,
    textAlign: 'center'
  }
});
