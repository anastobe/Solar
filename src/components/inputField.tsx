import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';
// import styles from '@/assets/styles/authstyles/login'
import theme from '@/assets/styles/theme';
import {FONT_FAMILY} from '@/constants/index';
import {Metrics} from '@/assets/metrics/metrics';

export default function InputField({...props}) {
  const {
    heading,
    placeholder,
    margTp,
    maxlen,
    value,
    secureEntry,
    keyboardType,
    inputRef = () => {},
    onSubmitEditing = () => {},
    blurSubmit,
    onChangeText = () => {},
    image,
    onPress = () => {},
    disabled,
    invalid,
    autoCapital,
    selection,
    width
  } = props || {};

  return (
    <View style={{marginTop: margTp}}>
      <Text style={styles.text}>{heading}</Text>
      <Pressable
        onPress={onPress}
        style={[
          styles.inputFieldView,
          {borderColor: invalid ? theme.red : theme.greyC, width: width},
        ]}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={theme.lightgrey}
          returnKeyType={'next'}
          value={value}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          secureTextEntry={secureEntry}
          style={styles.inputInner}
          ref={inputRef}
          maxLength={maxlen}
          onSubmitEditing={onSubmitEditing}
          blurOnSubmit={blurSubmit}
          editable={disabled}
          autoCapitalize={autoCapital}
          selection={selection}
        />
        {image && (
          <Pressable onPress={onPress} style={styles.imgView}>
            <Image
              source={image}
              style={{width: 13, height: 12, resizeMode: 'contain'}}
            />
          </Pressable>
        )}
        {/* this view becouse when click on mm/dd/yyyy date picker  not open  */}
        {disabled && (
          <View
            style={{
              width: '100%',
              height: 55,
              backgroundColor: 'transparent',
              position: 'absolute',
            }}
          />
        )}
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
    fontSize: 14
  },
  inputFieldView: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 14,
    height: 56,
    alignItems: 'center',
  },
  inputInner: {
    marginLeft: 6,
    fontFamily: FONT_FAMILY.MontserratMedium,
    fontSize: 14,
    // backgroundColor: "red",
    width: Metrics.width - 45,
    color: theme.black,
    height: 53,
  },
  imgView: {
    width: 50,
    height: 50,
    position: 'absolute',
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
