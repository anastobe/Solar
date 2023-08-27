import SettingHeader from '@/components/settingStackHeader';
import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Pdf from 'react-native-pdf';
import { useNavigation } from '@react-navigation/native';

const PdfView = ({...props}) => {

        const source = { uri: props?.route?.params, cache: true };
        const navigation = useNavigation();

        //const source = require('./test.pdf');  // ios only
        //const source = {uri:'bundle-assets://test.pdf' };
        //const source = {uri:'file:///sdcard/test.pdf'};
        //const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};
        //const source = {uri:"content://com.example.blobs/xxxxxxxx-...?offset=0&size=xxx"};
        //const source = {uri:"blob:xxxxxxxx-...?offset=0&size=xxx"};

        return (
            <View style={{ flex: 1, backgroundColor: "#fff" }}>

                <View style={{ marginHorizontal: 16 }} >
                <SettingHeader name='' onPress={() => navigation.goBack()}  />
                </View>

                <Pdf
                    source={source}
                    onLoadComplete={(numberOfPages,filePath) => {
                        console.log(`Number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages) => {
                        console.log(`Current page: ${page}`);
                    }}
                    onError={(error) => {
                        console.log(error);
                    }}
                    onPressLink={(uri) => {
                        console.log(`Link pressed: ${uri}`);
                    }}
                    onPageSingleTap={()=>{ console.log("pressed"); }}	
                    style={[styles.pdf,{ backgroundColor: "#fff" }]}/>

            </View>
        )
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});

export default PdfView;