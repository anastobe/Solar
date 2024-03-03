import {View, ActivityIndicator} from 'react-native';
import React from 'react';
import {colors} from '../assets/theme';

const SimpleLoader = ({loader, height}) => {
  return (
    <>
      {loader ? (
        <View
          style={{
            height: '100%',
            width: '100%',
            position: "absolute",
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "rgba(0,0,0,0.5)"
          }}>
          <ActivityIndicator size={'large'} color={'white'} />
        </View>
      ) : null}
    </>
  );
};

export default SimpleLoader;
