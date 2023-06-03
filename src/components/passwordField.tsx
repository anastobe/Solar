import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  TouchableWithoutFeedback,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
// import styles from '@/assets/styles/authstyles/login'
import theme from '@/assets/styles/theme';
import {FONT_FAMILY} from '@/constants';
import {Metrics} from '@/assets/metrics/metrics';
import {ScrollView} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';

export default function PasswordField({...props}) {
  const {
    marginTp,
    heading,
    keyboardType,
    placeholder,
    image,
    value,
    secureEntry,
    onPressImg,
    tintColor,
    maxlen,
    inputRef = () => {},
    onSubmitEditing = () => {},
    onEndEditing = () => {},
    blurSubmit,
    onChangeText = () => {},
    invalid,
    selection,
    multiline,
    numberOfLines,
    textAlignTopSty,
    onBlur,
    onFocus,
  } = props || {};

  return (
    <View style={{marginTop: marginTp}}>
      <Text style={styles.text}>{heading}</Text>
      <Pressable>
        <View
          style={[
            styles.inputFieldView,
            {borderColor: invalid ? theme.red : theme.grey},
          ]}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{flexGrow: 1}}>
            <TextInput
              placeholder={placeholder}
              placeholderTextColor={theme.lightgrey}
              returnKeyType={'next'}
              keyboardType={keyboardType}
              value={value}
              multiline={multiline}
              numberOfLines={numberOfLines}
              // textAlignVertical={'top'}
              onChangeText={onChangeText}
              secureTextEntry={secureEntry}
              style={[styles.inputInner,textAlignTopSty]}
              ref={inputRef}
              onSubmitEditing={onSubmitEditing}
              blurOnSubmit={blurSubmit}
              selection={selection}
              maxLength={maxlen}
              onFocus={onFocus}
              onEndEditing={onEndEditing}
              onBlur={onBlur}
            />
          </ScrollView>
          <Pressable onPress={onPressImg} style={[styles.pwdImageView]}>
        <Octicons 
          name={image} 
          size={22} 
          color={"black"} 
        />
          </Pressable>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginLeft: 10,
    marginBottom: 8,
    fontFamily: FONT_FAMILY.MontserratSemiBold,
    color: theme.black,
  },
  inputFieldView: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: theme.grey,
    borderRadius: 14,
    height: 56,
    alignItems: 'center',
  },
  inputInner: {
    paddingLeft: 11,
    fontFamily: FONT_FAMILY.MontserratMedium,
    fontSize: 14,
    width: Metrics.width - 80,
    // backgroundColor: "red",
    color: theme.black,
    height: 53,
  },
  pwdImageView: {
    position: 'absolute',
    right: 0,
    alignItems: 'center',
    width: 40,
    justifyContent: 'center',
  },
  pwdImage: {
    width: 14,
    height: 16,
    resizeMode: 'contain',
  },
});
