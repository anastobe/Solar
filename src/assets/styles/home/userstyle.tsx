import { Shadows } from '@/constants/index';
import {Dimensions, StyleSheet} from 'react-native';

let screenWidth = Math.round(Dimensions.get('window').width);
let screenHeight = Math.round(Dimensions.get('window').height);

export const styles = StyleSheet.create({

    mediaOptRound: {
        width: 83,
        height: 83,
        borderRadius: 50,
        borderWidth: 8,
        borderColor: '#542068',
        zIndex: 9999,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',

        // shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

        shadowColor: '#000',
      },
      publiqer:{
        width: 68,
        height: 68,
        borderColor: 'purple',
        borderWidth: 3,
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 7,


        // shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

        shadowColor: '#000',
      },
      topPopularPubliqer:{
        height: 100,
        width: screenWidth,
        // justifyContent: 'center',
        paddingLeft: 10,
        marginBottom: 5,
        marginTop: 15
      },


      //placeholder

    usrTopSkel:{ 
        flexDirection: "row", 
        marginTop: 10
    },
    user:{ 
        width: 60, 
        height: 60, 
        borderRadius: 50, 
        backgroundColor: "blue", 
        marginHorizontal: 10 
    }

});
