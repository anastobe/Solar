import API from '@/APICall/api';
import ToastAlert from '@/components/ToastAlert';
import { Alert } from 'react-native';
import ActionType from '../ActionType/actionType';

export const RegisterApi = data => {
  return dispatch => {
    return API('register', data, 'post').then(response => {
       if (response.data.status === false) {
        ToastAlert({text1: response.data.message, type: 'error'});
        return false;
       } else {
        ToastAlert({text1: response.data.message, type: 'success'});
        // dispatch({type: ActionType.SIGN_UP, payload: response.user});
        // dispatch({type: ActionType.TYPE, payload: 'user'});
        // dispatch({type: ActionType.TOKEN, payload: response.token});
        // dispatch({type: ActionType.BASE_URL, payload: response.base_url});
        return true;
       }
      })
      .catch(error => {
        return false;
      });
  };
};

export const LoginApi = (data,navigation) => {

  return dispatch => {
    return API('login', data, 'post', false).then(response => {
      if (response.data.status === false) {
        ToastAlert({text1: response.data.message, type: 'error'});
        return false;
       } else {
        ToastAlert({text1: response.data.message, type: 'success'});
        dispatch({type: ActionType.TOKEN, payload: response.data.token});
        // dispatch({type: ActionType.SIGN_UP, payload: response.user});
        // dispatch({type: ActionType.TYPE, payload: 'user'});
        // dispatch({type: ActionType.BASE_URL, payload: response.base_url});
        return response;
       }
      })
      .catch(error => {
        return false;
      });
  
  };
};


export const GetProfileData = (token) => {

  return dispatch => {
    return API('loggeduser', null, 'get', token).then(response => {

      // setTimeout(() => {
      //   console.log("get profile",response?.data)
      // }, 4000);

      if (response?.data?.status) {
        dispatch({type: ActionType.GET_PROFILE, payload: response?.data?.user});
      } else {
        ToastAlert({text1: "Could not get Profile Data", type: 'error'});
      }})
      .catch(error => {
        return false;
      });
  
  };
};

// export const Edit_Profile = (data,token) => {
//   return dispatch => {
//     return API('updateProfile', data, 'post', token).then(response => {
//       if (response?.data?.status === true) {
//         dispatch({type: ActionType.EDITPROFILE, payload: true});
//         ToastAlert({text1: response.data.message, type: 'success'});
//         return true;
//       } else {
//         ToastAlert({text1: "Could Not Update Profile", type: 'error'});
//         return false;
//        }
//       })
//       .catch(error => {
//         return false;
//       });
  
//   };
// };


export const Edit_Profile = (data,token) => {
  return dispatch => {
    return API('updateProfile', data, 'put', token).then(response => {

      // console.log("--------",response);
      
      
      // if (response?.data?.status === true) {
      //   dispatch({type: ActionType.EDITPROFILE, payload: true});
      //   ToastAlert({text1: response.data.message, type: 'success'});
      //   return true;
      // } else {
      //   ToastAlert({text1: "Could Not Update Profile", type: 'error'});
      //   return false;
      //  }
      })
      .catch(error => {
        return false;
      });
  
  };
};

// ************************ User Side ***************************

export const AddUserJob = (data,token) => {

  return dispatch => {
    return API('user-add-job', data, 'post', token).then(response => {

      console.log("AddUserJob===>",response?.data);

      // dispatch({type: ActionType.EDITPROFILE, payload: "support"});
      if (response?.data?.status === false) {
        ToastAlert({text1: response?.data?.message, type: 'error'});
        return false;
       } else {
        ToastAlert({text1: response?.data?.message, type: 'success'});
        return true;
       }
      })
      .catch(error => {
        console.log("add vendor job cath is running ==>",error);
        return false;
      });
  };
};


export const GetUserList = (token) => {

  return dispatch => {
    return API('view-user-jobs', null, 'get', token).then(response => {
      if (response?.data?.status) {
        dispatch({type: ActionType.GET_USER_LIST, payload: response?.data?.userJobs});
      } else {
        ToastAlert({text1: "Could not get User Job List Data", type: 'error'});
      }})
      .catch(error => {
        return false;
      });
  
  };
};




// ************************ provider Side ***************************


export const GetVendorsList = (token) => {

  return dispatch => {
    return API('view-vendor-jobs', null, 'get', token).then(response => {
      if (response?.data?.status) {
        dispatch({type: ActionType.GET_VENDOR_LIST, payload: response?.data?.vendorJobs});
      } else {
        ToastAlert({text1: "Could not get Vendor List Data", type: 'error'});
      }})
      .catch(error => {
        return false;
      });
  
  };
};


export const GetFamousVendors = (token) => {
  return dispatch => {
    return API('vendors', null, 'get', token).then(response => {
      if (response?.data?.status) {
        dispatch({type: ActionType.FAMOUS_VENDORS, payload: response?.data?.users});
        return true;
      } else {
        ToastAlert({text1: "Could not get Famous Vendor", type: 'error'});
        return false;
      }})
      .catch(error => {
        return false;
      });
  };
};

export const AddVendorJob = (data,token) => {

  return dispatch => {
    return API('vendor-add-job', data, 'post', token).then(response => {
      // dispatch({type: ActionType.EDITPROFILE, payload: "support"});
      if (response?.data?.status === false) {
        ToastAlert({text1: response?.data?.message, type: 'error'});
        return false;
       } else {
        ToastAlert({text1: response?.data?.message, type: 'success'});
        return true;
       }
      })
      .catch(error => {
        console.log("add vendor job cath is running ==>",error);
        return false;
      });
  };
};

export const Logout = () => {
  return dispatch => {
    dispatch({type: ActionType.LOGOUT});
  };
};
