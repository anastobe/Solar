// @flow
import {Platform, Alert, Linking, PermissionsAndroid} from 'react-native';
// import DataHandler from '@/services/mainServices/dataHandler.service';
import { useSelector } from 'react-redux';
export const TIME1 = 'HH:mm';


class Util {
//   getCurrentUserAccessToken = () => {
//     return DataHandler?.getStore()?.getState()?.user?.currToken
//   }

//   updateCurrentUserAccessToken(token, refresh_token) {
//     let store = DataHandler.getStore();
//     let user = store.getState().user || {};
//     console.log('useruser', user.userDetail.uuid);
//     // store.dispatch(userSigninSuccess(user.userDetail.uuid, token, refresh_token));
//   }

//   userIsServiceProvider() {
//     return (
//       DataHandler.getStore().getState().user.data.user_type ===
//       'service provider'
//     );
//   }

  getCurrentDate() {
    var currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth());
    var formatDate = `${currentDate.getFullYear()}-${
      currentDate.getMonth() + 1 < 10
        ? `0${currentDate.getMonth() + 1}`
        : currentDate.getMonth() + 1
    }-${('0' + currentDate.getDate()).slice(-2)}`;
    return formatDate;
  }
  getErrorText(error) {
    if (error instanceof Array) {
      if (error.length > 0) return error[0];
    } else {
      return error;
    }
    return '';
  }

  isNumber(val) {
    return /^\d+$/.test(val);
  }

  openLinkInBrowser(url) {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: ");
      }
    });
  }

  generateGetParameter(obj) {
    let final = '?';
    for (const key in obj) {
      final = `${final}${key}=${obj[key]}&`;
    }
    final = final.slice(0, -1);
    return final;
  }

  validateEmail = email => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };

  isUpper = str => {
    return str.toLowerCase() != str;
  };
  // function to format seconds to proper time duration
  GetDurationFormat = duration => {
    let time = duration / 1000;
    let minutes = Math.floor(time / 60);
    let timeForSeconds = time - minutes * 60;
    let seconds = Math.floor(timeForSeconds);
    let secondsReadable = seconds > 9 ? seconds : `0${seconds}`;
    return `${minutes}:${secondsReadable}`;
  };
}

export default new Util();
