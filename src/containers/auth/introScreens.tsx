import React, {FC, useEffect, useRef, useState} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  Dimensions,
  ImageBackground,
  ActivityIndicator,
  TouchableOpacity,
  StatusBar,
  Platform,
  PixelRatio,
  Animated,
  Easing,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {SafeAreaView} from 'react-native-safe-area-context';
import {general_style} from '@/assets/styles/generalStyle';
import styles from '@/assets/styles/authstyles/introsilder';
// import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Svg, {G, Circle} from 'react-native-svg';
import {introslidesdata} from '@/utils/data';
import {Metrics} from '@/assets/metrics/metrics';
import theme from '@/assets/styles/theme';
import {FONT_FAMILY, RouteNames} from '@/constants';
import Lottie from 'lottie-react-native';

const IntroScreens = () => {
  const navigation = useNavigation();

  const animationRef = useRef<Lottie>(null);

  const slider = useRef();

  const size = 62;
  const strokeWidth = 2.2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const upperbackContainer =
    Metrics.height < 600 ? Metrics.height / 2 - 70 : Metrics.height / 2 - 90;
  const upperInsideImgContainer =
    Metrics.height < 600 ? Metrics.height / 2 - 60 : Metrics.height / 2 - 80;
  const DiscriptionHeight = 60;
  const [index, setindex] = useState(0);
  const [strokeWidthvalue, setstrokeWidthvalue] = useState(1);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => {
    animationRef.current?.play();
  }, []);

  const OnDone = () => {
    navigation.navigate(RouteNames.optionScreen);
    return;
  };

  const GoToNext = () => {
    if (index == 0) {
      slider.current.goToSlide(index + 1, true);
      setstrokeWidthvalue(50);
    }
    if (index == 1) {
      slider.current.goToSlide(index + 1, true);
      setstrokeWidthvalue(100);
    }
    if (index == 2) {
      slider.current.goToSlide(index + 1, true);
      setstrokeWidthvalue(200);
    }
    if (index == 3) {
      slider.current.goToSlide(index + 1, true);
      // setstrokeWidthvalue(250);
    }
  };

  const goSkip = () => {
    navigation.navigate(RouteNames.optionScreen);
  };

  useEffect(() => {
    if (index == 0) {
      setstrokeWidthvalue(50);
      setTitle('Let’s start living\nhealthy & well with\nus right now!');
      setDesc(
        'We can recommend you best\nspecialist for your health so he can help\nout you in your medical issues.',
      );
    } else if (index == 1) {
      setstrokeWidthvalue(100);
      setTitle('Health checks &\nconsultations easily\nanywhere anytime');
      setDesc(
        'Now you can get consultancy to your best\nconsultant easily at your home within your\nsuitable time.',
      );
    } else if (index == 2) {
      setstrokeWidthvalue(150);
      setTitle('Get instant consult\nfrom your preferred\ndoctor');
      setDesc(
        'Now you can speak to your preferred doctor\nwithin 1 minute through chat/voice call/\n video call',
      );
    } else if (index == 3) {
      setTitle('Thousand of doctors &\nexperts to help your\nhealth!');
      setDesc(
        'You will get the most accurate information\nabout any diseases from top-class doctors',
      );
    }
  }, [index]);

  const RenderContent = () => {
    return (
      <View>
        <Text
          style={[
            general_style.font24Semi,
            {
              color: '#fff',
              textAlign: 'center',
            },
          ]}>
          {title}
        </Text>

        <View>
          <Text
            style={[
              general_style.font14Reg,
              {
                color: theme.lightWhite,
                textAlign: 'center',
                lineHeight: 18,
                marginTop: 14,
                marginBottom: 30,
                height: DiscriptionHeight,
                // backgroundColor: "red"
              },
            ]}>
            {desc}
          </Text>
        </View>
      </View>
    );
  };

  const RenderButton = () => {
    return index == 3 ? (
      <View style={{marginTop: 14}}>
        <View style={{height: 52}} />
      </View>
    ) : (
      <View>
        <View>
          <Svg width={size} height={size}>
            <G rotation={'-90'} origin={center}>
              <Circle
                stroke={'#2790BF'}
                cx={center}
                cy={center}
                r={radius}
                strokeWidth={strokeWidth}
              />
              <Circle
                stroke="#fff"
                cx={center}
                cy={center}
                r={radius}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={index == 0 ? -50 : index == 1 ? -95 : -140}
                // strokeDashoffset={strokeWidthvalue}
              />
            </G>
          </Svg>
        </View>

        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            GoToNext();
          }}
          style={{position: 'absolute'}}>
          <Image
            style={styles.forwardIconImg}
            source={require('@/assets/images/roundForwardIcon.png')}
          />
          {/* <Text
            onPress={() => {
              goSkip();
            }}
            style={[
              general_style.font20Semi,
              { 
              color: "#fff",
              top: 12,
              alignSelf: 'center',
              marginLeft: 10
             }]}>
            Skip
          </Text> */}

          {/* <Text style={{
                textAlign: 'center', 
                fontFamily: FONT_FAMILY.InterBold, 
                fontSize: 12, 
                marginTop: 5, 
                position: "absolute",
                bottom: Platform.OS == "ios" ? 20 : 10, 
                // left:  Platform.OS == "ios" ? 20 : 10 , 
                color: "#fff"}}>
                    v{VersionInfo.appVersion}
            </Text> */}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar
        backgroundColor={'#fff'}
        barStyle="dark-content"
        translucent={true}
      />
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <View
          style={{
            height: upperbackContainer,
          }}>
          <AppIntroSlider
            data={introslidesdata}
            ref={slider} // the ref
            renderItem={({item}) => {
              return (
                <View
                  key={item?.key}
                  style={{
                    height: Metrics.height / 2 - 90,
                    // backgroundColor: "red",
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {index == 3 ? null : (
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => {
                        goSkip();
                      }}
                      style={{
                        borderWidth: 1,
                        width: 51,
                        height: 25,
                        alignSelf: 'flex-end',
                        borderColor: theme.lightgrey,
                        borderRadius: 20,
                        right: 20,
                        top: 5,
                        position: 'absolute',
                        zIndex: 99999,
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={[
                          general_style.font20Semi,
                          {
                            color: theme.lightgrey,
                            alignSelf: 'center',
                            fontFamily: FONT_FAMILY.MontserratBold,
                            fontSize: 12,
                          },
                        ]}>
                        Skip
                      </Text>
                    </TouchableOpacity>
                  )}

                  <Lottie
                    autoPlay
                    loop
                    style={[{alignSelf: 'center'}, item.size]}
                    source={item.jsonFile}
                    ref={animationRef}
                  />
                </View>
              );
            }}
            onSlideChange={e => {
              setindex(e);
            }}
            bottomButton={false}
            showNextButton={false}
            showDoneButton={false}
            activeDotStyle={styles.activTab_Style}
            dotStyle={styles.unactivTab_Style}
          />
        </View>

        <View
          style={{
            flex: 1,
            width: Metrics.width,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            zIndex: -999,
            backgroundColor: theme.tealGreen,
          }}>
          <View style={styles.contentTopView}>
            <View>{RenderContent()}</View>
            <View>{RenderButton()}</View>
          </View>

          {index == 3 ? (
            <View
              style={{
                position: 'absolute',
                bottom: Metrics.height < 615 ? 30 : 75,
                alignSelf: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  OnDone();
                }}
                activeOpacity={0.8}
                style={styles.btnCont}>
                <Text
                  style={{
                    fontFamily: FONT_FAMILY.MontserratSemiBold,
                    fontSize: 16,
                    color: theme.lightblue,
                  }}>
                  Get Started
                </Text>
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default IntroScreens;
