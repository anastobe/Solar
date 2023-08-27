import { FONT_FAMILY } from "@/constants/index";
import { Dimensions, Platform, StyleSheet } from "react-native";
const screenWidth = Dimensions.get('window').width;


export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  arrowimage: {
    color: '#090A0A',
    marginTop: 7,
    marginBottom: 7,
    height: 12,
    width: 14,
    // marginRight:70

  },
  searchtxt: {
    paddingLeft: 16.39,
    fontSize: 14,
    width: '90%',
    // lineHeight:24,
    height: 48,
    fontFamily: FONT_FAMILY.InterRegular
    // paddingVertical:12,

  },
  searchimg: {
    color: '#090A0A',
    marginTop: 15,
    height: 18,
    width: 18.48,

  },
  hidestyl: {
    borderColor: '#FF4A4A',
    borderWidth: 1,
    borderRadius: 8,
    height: 40,
    width: 120,
    // marginTop:15,

  },

  backleftBtn: {
    fontSize: 14,
    // paddingTop:8,
    // textAlign:'center',
    color: '#FF4A4A',
    fontFamily: FONT_FAMILY.InterMedium,
    fontSize: 14
  },

  containerrr: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  // requestreasonview:{
  //   backgroundColor:'white',
  //   flex:1,
  //   marginTop:10,


  // },

  messageRow: {
    flexDirection: "row",
    marginBottom: 24,
    justifyContent: 'space-between',
    marginTop: 18,
    // backgroundColor:'red',

  },

  messageTxt: {
    fontSize: 16,
    // fontFamily: "Inter, sans-serif",
    // fontWeight: "700",
    color: "rgba(9,10,10,1)",
    lineHeight: 26,
  },



  searchbar: {
    flexDirection: "row",
    height: 48,
    width: '100%',
    backgroundColor: '#f2f4f5',
    borderRadius: 8,
    // justifyContent:'space-between',

  },
  msgimagview: {
    marginTop: 107,
    backgroundColor: 'red',


  },
  msgview: {
    alignItems: 'center',
    //  backgroundColor:"red",

  },
  chatimg: {
    height: 200,
    width: 200,
    marginTop: 107,
    marginBottom: 32,


  },
  nomsg: {
    color: '#090A0A',
    textAlign: "center",
    fontSize: 24,
    fontFamily: FONT_FAMILY.InterBold,
    lineHeight: 34,
    // marginBottom:8,

  },
  msgempty: {
    color: '#72777A',
    textAlign: "center",
    fontSize: 14,
    marginTop: 8,
    fontFamily: FONT_FAMILY.InterRegular,
    lineHeight: 24


  },



  // container: {
  //   flex: 1,
  //   backgroundColor: 'white',
  // },

  // Appbar: {
  //   // flexDirection: "row",
  //   // justifyContent:'space-around',
  //   backgroundColor:'red',
  // },

  joboffer: {
    flexDirection: 'row',
    height: 56,
    backgroundColor: '#e6effd',
    marginHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  Messagetype: {
    alignSelf: 'center',
    height: 58,
    width: '90%',
    backgroundColor: '#F2F4F5',
    // marginHorizontal:16,
    borderRadius: 8,
    marginBottom: 30,
    borderColor: '#F2F4F5',
    borderWidth: 1,
    flexDirection: 'row',
    // justifyContent:"space-between",
  },

  inputContainerBottom: {
    flexDirection: 'row',
    backgroundColor: '#F2F4F5',
    borderColor: '#F2F4F5',
    borderRadius: 10,
    // marginHorizontal: 16,
    // height: 58,
    alignSelf: "center",
    width: screenWidth - 32,
    position: "absolute",
    bottom: 10,
  },
  inputText: {
    marginLeft: 16,
    fontSize: 15,
    width: screenWidth - 110 - 64,
    // backgroundColor: "red",
    // alignSelf: "center"
    marginVertical: Platform.OS === 'ios' ? 15 : null
  },
  inputTextBottom: {
    marginLeft: 16,
    fontSize: 15,
    width: screenWidth - 110 - 64,
    // backgroundColor: "red",
    // alignSelf: "center"
    marginVertical: Platform.OS === 'ios' ? 15 : null
  },
  clipIcon: {
    marginLeft: -15,
  },
  sendIcon: {
    borderRadius: 16,
    backgroundColor: '#0760F0',
    width: 32,
    height: 32,
  },
  sendIconInner: {
    width: 13.33,
    height: 13.33,
    tintColor: 'white',
    alignSelf: 'center',
    marginVertical: 10
  },
  chattingview: {
    backgroundColor: 'white',
    flex: 1,

  },
  appbarview: {
    height: 75,
    marginTop: 0,
    // backgroundColor:"indigo"

  },
  arrowview: {
    marginTop: 20,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 19,

  },
  chattingarrow: {
    marginTop: 18,
    color: '#090A0A',
    marginLeft: 5,
    height: 12,
    width: 14,

  },
  chattimg10: {
    marginLeft: 17,
    marginTop: 6,
    height: 36,
    width: 36,


  },
  name: {
    // marginTop:10,
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 50,
    color: '#000',
    lineHeight: 24,

  },
  followview: {
    flexDirection: 'row',
    // marginTop:5,
    // backgroundColor:'white',
  },
  followtxt: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#aab1b5',
    lineHeight: 24,


  },
  space: {
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: 4,

  },
  ratingimg: {
    height: 14,
    width: 14,
    marginTop: 4,


  },
  snapcontainer: {
    height: 36,
    width: 36,
    borderColor: '#FFFC00',
    marginTop: 9,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  meetcontainer: {
    height: 36,
    width: 36,
    borderColor: '#0760F0',
    marginTop: 9,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  snapchatimg: {
    height: 16,
    width: 15.9,
  },
  meetimg: {
    height: 10,
    width: 15,

  },
  cupimg: {
    height: 24,
    width: 24,

  },
  joboffertxt: {
    color: '#0760F0',
    marginLeft: 12,
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 24,

  },
  linewidth: {
    borderBottomWidth: 1,
    borderColor: '#F2F4F5',
    // marginBottom:24,

  },
  // linewidthh:{
  //   marginTop:10,
  //   borderWidth:.2,
  //   borderColor:'#F2F4F5',

  // },
  msginputview: {
    flexDirection: 'row',
    // justifyContent:"space-between",
    marginHorizontal: 16,
    // backgroundColor:'red',

  },
  msginput: {
    width: 195,
    color: '#000',
    // marginRight:40,
    fontWeight: "bold",
    // marginTop:3,
    fontSize: 14,
    // backgroundColor:'red',


  },
  locationimg: {
    marginTop: 20,
    height: 21,
    width: 21,
    marginLeft: 20,
    // marginRight:5,


  },
  fileimg: {
    marginTop: 20,
    height: 18,
    width: 17,
    marginLeft: 23.7,
    // marginRight:5,


  },
  sendimg: {
    // marginRight:20,
    marginTop: 13,
    height: 32,
    width: 32,
    marginLeft: 24,
    // marginRight:20,

  },
  chattinguserview: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 16,
    marginTop: 24,
    marginRight: 125,

  },
  mechattinguserview: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 16,
    marginLeft: 125,

  },
  chatttimg: {
    height: 30,
    width: 30,
    borderRadius: 30
  },
  msguser: {
    color: '#090A0A',
    padding: 10,

  },
  timeview: {
    justifyContent: 'flex-end',
    marginRight: 10,

  },
  timetxt: {
    marginLeft: 10,
    fontSize: 12,
    color: '#aab1b5',


  },
  userwall: {
    height: 120,
    width: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  timetxtt: {
    marginLeft: 10,
    fontSize: 12,
    color: '#aab1b5',

  },
  Mtime: {
    marginRight: 8,
    fontSize: 12,
    color: '#aab1b5',
  },
  timevieww: {
    marginTop: 60,
    flexDirection: 'row',
  },
  timetxttt: {
    marginRight: 10,
    marginTop: 30,
    fontSize: 12,
    color: '#aab1b5',
  },
  msgvieww: {
    //   marginLeft:80,
    backgroundColor: '#0760F0',
    // height:90,
    // width:'65%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    textAlign: 'center',
    // padding:5,
    //   marginRight:40,


  },
  msgtxt: {
    color: '#090A0A',
    padding: 10,
    color: 'white',

  },
  msgtime: {
    marginLeft: 10,
    marginTop: 40,
    fontSize: 12,
    color: '#aab1b5',

  },
  imgview: {
    height: 110,
    width: '82%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,



  },
  imgg: {
    // marginRight:20,
    marginLeft: 10,
    height: 110,
    width: 250,
    // marginBottom:10,
    justifyContent: "flex-end"
  },
  msgtext: {
    backgroundColor: '#F2F4F5',
    textAlign: 'center',
    borderTopEndRadius: 8,
    borderBottomEndRadius: 8,
    borderTopLeftRadius: 8,



  },
  userchatimageview: {
    justifyContent: 'flex-end',
  },
  chatimgview: {
    justifyContent: 'flex-end',
  },
  chatttimeview: {
    justifyContent: 'flex-end',
  },
  maptime: {
    justifyContent: 'flex-end',
  },

  mechatimageview: {
    justifyContent: 'flex-end',
    // marginTop:40,

  },

  mechatttimg: {
    marginLeft: 10,
    height: 30,
    width: 30,
  },
  metimevieww: {
    // marginTop:40,
    // flexDirection:'row',
    // backgroundColor:'red',
    justifyContent: 'flex-end',
    marginRight: 10,
  },
  metimetxttt: {
    marginLeft: 0,
    // marginTop:60,
    fontSize: 12,
    color: '#aab1b5',


  },



  // container: {
  //   flex: 1,
  // },

  locationviewe: {
    display: "flex",
    backgroundColor: '#ffffff',
    height: 60,
    justifyContent: "center"


  },
  messageRoww: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: 'space-between',


  },

  locatxt: {
    fontSize: 16,
    fontFamily: "Inter, sans-serif",
    fontWeight: "700",
    color: "rgba(9,10,10,1)",
    paddingTop: 10,
    // marginLeft:60,
  },
  mapbottemsheet: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",

  },
  payment: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  paymenttxt: {
    fontWeight: 'bold',
    color: '#090A0A',
    marginLeft: 16,
    fontSize: 24,
    marginRight: 20,
  },
  addpayment: {
    color: '#72777A',
    marginLeft: 16,
    marginTop: 10,
    fontSize: 14,
    marginBottom: 20,
  },
  cardtxt: {
    fontWeight: '600',
    color: '#090A0A',
    marginLeft: 16,
    fontSize: 14,
  },
  // cardnumberfeildview:{
  //   marginHorizontal:15,
  //   marginTop:20,

  // },
  // cvvcodefeildview:{
  //   marginHorizontal:16,
  //   marginTop:20,
  //   flexDirection:"row",
  //   justifyContent:'space-between',

  // },
  // cvvcodebtn:{
  //   width:'47%',
  // },
  orview: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 15,
  },
  paypalview: {
    marginTop: 10,

  },

  usernextbtn: {
    marginTop: 57,

  },
  paymentview: {
    flexDirection: 'row',

  },



  // dashline:{
  //   marginHorizontal:20,
  //   flexDirection:'row',
  //   marginTop:20,
  //   borderWidth:1,
  //   borderStyle: 'dashed',
  //   borderColor:'gray',

  // },


  // inf:{
  //   marginLeft:20,
  //   color: '#090A0A',
  //   fontSize:16,
  //   fontWeight:'bold',

  // },
  // Ppayment:{
  //   marginLeft:20,
  //   color: '#090A0A',
  //   fontSize:16,
  //   fontWeight:'bold',

  // },
  // price:{
  //   color:'#090A0A',
  //   fontSize:14,
  //   fontWeight:"bold",


  // },
  // sub:{
  //   color:'#72777A',
  //   fontSize:14,

  // },
  // containner:{
  //     backgroundColor:'#F2F4F5',
  //     height:70,
  //     width:'90%',
  //     borderRadius:8,
  //     marginHorizontal:20,
  //     borderWidth:1,
  //     borderColor:'#E3E5E5',


  // },
  text: {
    marginRight: 5,
    color: '#090A0A',
    textAlign: 'center',
    marginTop: 15,
    fontWeight: FONT_FAMILY.InterSemiBold,

  },
  // Inflnimag:{
  //     height:40,
  //     width:40,
  //     marginRight:10,
  //     marginTop:5,

  // },
  // sendofferview:{
  //   marginTop:20,
  // },
  // addcard:{
  //   fontSize:16,
  //   fontWeight:"bold",
  //   color: '#090A0A',
  //   textAlign:'left',
  // },
  Addcardd: {
    marginTop: 74,

  },
  // borderwidth :{
  //     marginTop:15,
  //     borderwidth:1,
  //     backgroundColor:'#090A0A',
  //     height:5,
  //     width:50,
  //     alignSelf:'center',
  //     borderRadius:2,

  // },
  // share:{
  //    marginTop:20,
  //    marginLeft:20,

  // },
  v1: {
    height: 15,
    width: 23,
    color: '#090A0A',
    marginTop: 2,
    fontSize: 10,
    fontWeight: "bold",
    color: 'white',


  },
  //  visacardbtnvieww:{
  //   flexDirection:'row',
  // },
  // addcardbottomsheet:{
  //   flex:1,
  //   backgroundColor:'red',

  // },

  // infloview:{
  //   marginTop:30,
  // },
  // inflovieww:{
  //   marginTop:37,

  // },
  // inflobottom:{
  //   marginTop:11,
  // },



  // jobofferr:{
  //   height:250,
  //   width:260,
  //   justifyContent:'center',

  // },
  // Joboffertxt:{
  //   color:'#090A0A',
  //   textAlign:"center",
  //   fontSize:24,
  //   fontWeight:"bold",
  //   marginTop:56,

  // },
  // jobohomeview:{
  //   marginTop:252,

  // },
  refundbtn: {
    marginTop: 250,
  },
  refunbtnn: {
    marginTop: 260,
  },
  containerr: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 5,

  },
  btnsubmit: {
    marginTop: 24,

  },
  Ratebtn: {
    marginTop: 22,
  },
  shareLocation: {
    marginLeft: 16,
  },
  sharetxt: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: FONT_FAMILY.InterBold,
    color: '#090A0A',
    lineHeight: 26,

  },
  sharerow: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 15,
  },
  iconview: {
    backgroundColor: "#F2F4F5",
    height: 40,
    width: 40,
    borderRadius: 20,
    alignSelf: 'center',
  },
  locaticon: {
    marginLeft: 11,
    height: 18,
    width: 18,
    marginTop: 11,
  },
  sharetxtt: {
    marginLeft: 12,
    fontSize: 14,
    color: '#000000',
    marginTop: 8,
    fontFamily: FONT_FAMILY.InterMedium,
    lineHeight: 24,
  },

  inputStyle: {
    width: '80%',
    height: 44,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#DBDBD6',
  },

  ////////////////////////////Swipe///////////////////////////////////

  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },
  backRightBtnLeft: {
    backgroundColor: 'blue',
    right: 75,
  },
  backTextWhite: {
    backgroundColor: 'red',

  },
  rowBack: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
  },


  ///////Personlist ///////

  item: {
    flexDirection: 'row',
    marginTop: 24,
    height: 50,
    // justifyContent:"space-between",
  },
  itemPhoto: {
    width: 50,
    height: 50,
    borderRadius: 35,

  },
  itemInfo: {
    // alignSelf:"flex-end",
    // flexDirection:'row',
    alignItems: 'flex-end',
    marginTop: 8
    // backgroundColor:'indigo',

  },
  name1: {
    color: '#090A0A',
    fontFamily: FONT_FAMILY.InterBold,
    fontsize: 14,
    lineHeight: 24,
  },
  messag1: {
    fontFamily: FONT_FAMILY.InterMedium,
    fontsize: 12,
    color: '#252d2d',
    marginLeft: 14,
    marginBottom: 2,

  },
  timetext: {
    // marginRight:0,

  },
  notify: {
    height: 16,
    width: 16,
    marginLeft: 5,
    marginTop: 4,
    // backgroundColor:'red',


  },
  online: {
    width: 8,
    height: 8,
    marginRight: 4,
    resizeMode: "contain",
    top: -5

  },


})