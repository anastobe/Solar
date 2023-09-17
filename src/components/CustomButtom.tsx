import React from "react";
import { Pressable, Text, View, StyleSheet, TouchableOpacity } from "react-native";

const CustomButton = ({ title, onPress = () => { }, disabled, heights, widths, btnOpacity }) => {
    return (
        <TouchableOpacity activeOpacity={btnOpacity} disabled={disabled} style={[disabled ? styles.DisabledButton : styles.Button, {height: heights, width: widths}]} onPress={onPress}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={styles.ButtonText}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    
    Button: {
        backgroundColor: '#0760F0',
        borderRadius: 8,
    },
    DisabledButton: {
        backgroundColor :'#E3E5E5',
        borderRadius: 8,
    },
    ButtonText: {
        color: 'white',
        fontSize: 15,
        // marginVertical: 18,
        textAlign: 'center',
    }, 

  });

  

