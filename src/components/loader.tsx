import theme from '@/assets/styles/theme';
import React from 'react';
import {ActivityIndicator, View} from 'react-native';

const Loader = ({...props}) => {
  const {handle} = props || {};

  return (
    <>
      {handle && (
        <View
          style={{
            position: 'absolute',
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.2)',
            zIndex: 999,
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" color={theme.lightblue} />
        </View>
      )}
    </>
  );
};
export default Loader;
