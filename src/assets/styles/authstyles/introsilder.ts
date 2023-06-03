import {Metrics} from '@/assets/metrics/metrics';
import { FONT_FAMILY } from '@/constants';
import {Dimensions} from 'react-native';

//---------IntroSlider Start-----------//
let screenWidth = Math.round(Dimensions.get('window').width);
let screenHeight = Math.round(Dimensions.get('window').height);

export default {
  activTab_Style: {
    marginTop: 90 + 30 + 20,
    zIndex: 99999,
    width: 16,
    height: 8,
    //   borderRadius: 7.5,
    backgroundColor: '#2790BF',
    //   shadowColor: "black",
    //   shadowOffset: {
    //       width: 0,
    //       height: 2,
    //   },
    //   shadowOpacity: 0.25,
    //   shadowRadius: 3.84,
    //   elevation: 5,
  },
  unactivTab_Style: {
    marginTop: 90 + 30 + 20,
    zIndex: 99999,
    width: 8,
    height: 8,
    //   borderRadius: 7.5,
    backgroundColor: '#fff',
    //   shadowColor: "#000",
    //   shadowOffset: {
    //       width: 0,
    //       height: 2,
    //   },
    //   shadowOpacity: 0.25,
    //   shadowRadius: 3.84,
    //   elevation: 5,
  },

  introSlider_skipCont: {
    top: 10,
    width: '15%',
    position: 'absolute',
    zIndex: 100,
    right: 0,
  },

  introSlider_introImageStyle: {
    width: '90%',
    resizeMode: 'contain',
    height: '90%',
    alignSelf: 'center',
  },

  introSlider_textContiner: {
    marginBottom: 200,
    justifyContent: 'center',
  },

  introSlider_introTitleStyle: {
    // fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 10,
    color: '#fff',
    textAlign: 'center',
  },

  introSlider_introText1: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
    // paddingBottom: 20,
  },

  introSlider_introText2: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
    width: 300,
  },
  introSlider_nextBtn: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 30,
  },

  //======>
  introSliderBackImg: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  introSlider_imageStyle: {
    width: 270,
    height: 170,
    position: 'absolute',
    bottom: 60,
    alignSelf: 'center',
  },

  // support View
  contentTopView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  //render content
  content_TopCont: {
    alignItems: 'center',
    marginTop: 10,
    height: 200,
  },

  btnCont: {
    height: 52,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: Metrics.width - 33 - 33,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: '#C4C4C4',
  },
  forwardIconImg: {
    width: 48,
    height: 48,
    marginLeft: 7,
    marginTop: 7,
  }

}