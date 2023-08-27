import Toast from 'react-native-toast-message';

const Tost = ({text1, text2=null, type=null, position, topOffset}) => {
  Toast.show({
    type: type,
    position: position ? position : 'top',
    text1: text1,
    text2: text2,
    visibilityTime: 4000,
    autoHide: true,
    topOffset: topOffset ? topOffset : 50,
    bottomOffset: 50,
  });
};
export default Tost;
