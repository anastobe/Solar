import ActionType from '../Action/ActionType/actionType';

const initialState = {
  AuthLoader: false,
  signupData: {},
  isLogin: 'auth',
  token: '',
  id: '',
  type: '',
  profile_path: '',
  isVerified: false,
  Temp_detail: {},
  otpId: '',
  base_url: '',
  profileData: {},
  editProfile: {},
  vendorList: [],
  famousVendors: [],
  userJobList: [],
  cards: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SIGN_UP:
      return {...state, signupData: action.payload};
    case ActionType.TOKEN:
      return {...state, token: action.payload};
    case ActionType.PROFILE_PATH:
      return {...state, profile_path: action.payload};
    case ActionType.BASE_URL:
      return {...state, base_url: action.payload};
    case ActionType.TYPE:
      return {...state, type: action.payload};
    case ActionType.IS_LOGIN:
      return {...state, isLogin: action.payload};
    case ActionType.IS_VERIFIED:
      return {...state, isVerified: action.payload};
    case ActionType.TEMP_DETAIL:
      return {...state, Temp_detail: action.payload};
    case ActionType.OTPID:
      return {...state, otpId: action.payload};
    case ActionType.GET_PROFILE:
      return {...state, profileData: action.payload};
    case ActionType.EDITPROFILE:
      return {...state, editProfile: action.payload};
    case ActionType.GET_VENDOR_LIST:
      return {...state, vendorList: action.payload};
    case ActionType.FAMOUS_VENDORS:
      return {...state, famousVendors: action.payload};
    case ActionType.GET_USER_LIST:
      return {...state, userJobList: action.payload};
    case ActionType.ADD_CARD:
      return {...state, cards: [...state.cards, action.payload]};
    case ActionType.REMOVE_ADD_CARD:
      return {...state, cards: action.payload};
      

    case ActionType.LOGOUT:
      return {
        ...state,
        // AuthLoader: false,
        // signupData: {},
        isLogin: 'auth',
        // token: '',
        // id: '',
        // type: '',
        // profile_path: '',
        // isVerified: false,
        // Temp_detail: {},
        // otpId: '',
        // base_url: '',
        // profileData: {},
        // editProfile: {},
        // vendorList: [],
        // GetFamousVendors: []
      };
    default:
      return state;
  }
};
