import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import theme from '@/assets/styles/theme';
import MaskInput from 'react-native-mask-input';

const InputFieldMask = props => {
  return (
    <View style={styles.container}>
      <View>{props.icon}</View>
      <MaskInput
        mask={props.mask}
        maxLength={props.maxLen}
        editable={props.editable}
        placeholderTextColor={props.placeholderTextColor}
        style={[styles.input,{ height: props.height }]}
        {...props}
      />
      {props.rightIcon ? (
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}
          onPress={props.right_btn_press}>
          {props.rightIcon}
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default InputFieldMask;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    borderBottomColor: theme.inputPlaceholder,
    borderBottomWidth: 1,
  },
  input: {
    marginLeft: 14,
    width: '80%',
    color: 'black',
    // height: 50,
    fontSize: 15,
  },
});
