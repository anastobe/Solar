import theme from '@/assets/styles/theme'
import { RouteNames } from '@/constants'
import { Logout } from '@/Redux/Action/AuthActions/authActions'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { Image } from 'react-native-svg'
import { connect } from 'react-redux'
import SafeScrollView from './safeScrollView'

const DrawerView = ({...props}) => {

    const {data} = props || {}

    const navigation = useNavigation()

    function DrawerProfile(params) {
        return(
            <View style={{ alignItems: 'center', height: 100, backgroundColor: theme.purple, justifyContent: 'center'  }} >

            {/* <View style={{ height: 100, width: 100, justifyContent: "center", alignItems: 'center' , borderColor: "#fff", borderWidth: 1, borderRadius: 50, }} >
            <Image style={{
          width: 92,
          height: 92,
           resizeMode: 'contain',
           tintColor: 'white'
         }}
         source={require("@/assets/images/person.png")}
       />
            </View> */}
            <TouchableOpacity onPress={()=>{ navigation.navigate('ProfileTab') }} style={{ alignItems: 'center'}}  >
                <Text style={{ color: theme.white, fontSize: 18 }} >DR: Anas Ahmed</Text>
                <Text style={{ color: theme.white, fontSize: 18 }} >View Profile</Text>
            </TouchableOpacity>
      
      
          </View>
        )
    }

    function HandleNav(nav) {
        navigation.navigate(nav)
    }

    const Menus = () =>{

        function renderItem({item}) {
         return(
             <View style={{ height: 50, borderBottomWidth: 1, borderBottomColor: theme.black ,justifyContent: "center", paddingLeft: 20 }} >
              <TouchableOpacity onPress={()=>HandleNav(item?.nav)} >
                 <Text style={{ color: theme.black }} >{item?.screenName}</Text>
              </TouchableOpacity>
 
 
             </View>
         )   
        } 
 
         return(
         <FlatList
             scrollEnabled={true}
             data={data}
             renderItem={renderItem}
             keyExtractor={item => `${item.id}`}
           />
         )
     }

  return (
    <SafeScrollView screenCol={theme.white} barCol={theme.white}  >
      {DrawerProfile()}
      {Menus()}

    </SafeScrollView>
  )
}



const mapStateToProps = state => ({
  token: state.AuthReducer.token,
  profileData: state.AuthReducer.profileData

});

const mapDispatchToProp = {
  Logout: Logout
};

export default connect(mapStateToProps, mapDispatchToProp)(DrawerView);
