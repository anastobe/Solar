import React,{ useEffect, useState } from 'react'
import { FlatList, Platform, Pressable, ScrollView, Text, View } from 'react-native'
import { Metrics } from '@/assets/metrics/metrics'
import theme from '@/assets/styles/theme'
import SafeScrollView from '@/components/safeScrollView'
import SettingHeader from '@/components/settingStackHeader'
import PasswordField from '@/components/passwordField'
import SelectRequirements from '@/components/selectRequirements'
import Button from '@/components/button'
import { RouteNames } from '@/constants'
import { useNavigation } from '@react-navigation/native'

const GetRequirements = () => {

  const navigation = useNavigation();

  const [password, setPassword] = useState('');
  const [hide, setHide] = useState(true);
  const [appliances, setAppliances] = useState({
    totalWatt: 0,
    item: [
    {
      id: 0,
      applianceCount: 0,
      applianceName: "Fan",
      watt: 100,
      totalwattofthisAppliance: 0
    },
    {
      id: 1,
      applianceCount: 0,
      applianceName: "Light LED",
      watt: 100,
      totalwattofthisAppliance: 0
    },
    {
      id: 2,
      applianceCount: 0,
      applianceName: "Microwave",
      watt: 1500,
      totalwattofthisAppliance: 0
    },
    {
      id: 3,
      applianceCount: 0,
      applianceName: "Iron",
      watt: 1000,
      totalwattofthisAppliance: 0
    },
    {
      id: 4,
      applianceCount: 0,
      applianceName: "Fridge",
      watt: 500,
      totalwattofthisAppliance: 0
    },
    {
      id: 5,
      applianceCount: 0,
      applianceName: "Light",
      watt: 30,
      totalwattofthisAppliance: 0
    },
    {
      id: 6,
      applianceCount: 0,
      applianceName: "Charger",
      watt: 50,
      totalwattofthisAppliance: 0
    },
    {
      id: 7,
      applianceCount: 0,
      applianceName: "Water Motor",
      watt: 1000,
      totalwattofthisAppliance: 0
    }


  ]});


  useEffect(() => {
    
    let total = 0
    appliances.item.map((v)=>{ 
      total += v.totalwattofthisAppliance
    })

    // Update the totalWatt in the state
    setAppliances(prevState => ({
      ...prevState,
      totalWatt: total
    }));


  }, [appliances.item]);



  function handleSetPassword(txt) {
    setPassword(txt);
    return
  }

  console.log("adsaddsa",appliances.totalWatt);

  function onPressIncr(index) {
      
      setAppliances(prevState => {
        const updatedAppliances = { ...prevState }; // Copy the appliances state
        const updatedItem = [...updatedAppliances.item]; // Copy the item array
        const currentObject = updatedItem[index]; // Access the first object in the array
        currentObject.applianceCount += 1;
        currentObject.totalwattofthisAppliance += currentObject.watt;
        updatedAppliances.item = updatedItem; // Update the item array in the appliances state
        return updatedAppliances; // Return the updated appliances state
      });
  }


  function onPressDecr(index) {

    setAppliances(prevState => {
      const updatedAppliances = { ...prevState }; // Copy the appliances state
      const updatedItem = [...updatedAppliances.item]; // Copy the item array
      const currentObject = updatedItem[index]; // Access the first object in the array
      currentObject.applianceCount -= 1;
      currentObject.totalwattofthisAppliance -= currentObject.watt;
      updatedAppliances.item = updatedItem; // Update the item array in the appliances state
      return updatedAppliances; // Return the updated appliances state
    });

  }

  function renderItem({item}) {
    return(
      <SelectRequirements 
      noItem={item?.applianceCount}
      itemName={item?.applianceName}
      onPressIncr={()=>onPressIncr(item.id)}
      onPressDecr={()=>onPressDecr(item.id)}
      />
    )    
  }

function ListHeaderComponent() {
  return(
    <View style={{ alignItems: 'flex-end', marginTop: 10, marginRight: 0 }} >
      <Text style={{ fontSize: 20 }} >Total Watt: {appliances.totalWatt}</Text>
    </View>
  )
}

function onClick() {
  navigation.navigate(RouteNames.getRequirementsDetail, { appliancesData: appliances.item})
  return
}

function renderBtn() {
  return (
    <View style={{ marginBottom: 20 }} >
      <Button
        width={Metrics.width - 40}
        onPress={onClick}
        distance={1}
        disabled={appliances.totalWatt == 0 ? true : false}
        marginHorizontal={20}
        title="Review"
        txtColor={theme.white}
        bgcolor={theme.lightblue}
        disabledColor={theme.white}
        />
        </View>
  );
}

  return (
    <SafeScrollView screenCol={theme.white} barCol={theme.white}  >
      <View style={{ marginHorizontal: 20 }} >
        <SettingHeader name="Enter Your Requirements" onPress={() => navigation.goBack()} />
        <PasswordField
            // marginTp={12}
            // heading="Password"
            value={password}
            onChangeText={handleSetPassword}
            placeholder="Search Your Electric Appliances"
            image={
              !hide
                ? "x-circle-fill"
                : "search"
            }
            // isInvalidPassword={isInvalidPassword}
            secureEntry={hide}
            tintColor={'#2E90BF'}
            onPressImg={() => setHide(!hide)}
          />

      </View>
      <ScrollView>
        <View style={{ justifyContent: "center", alignItems: "center" }} >

        <FlatList
            keyExtractor={item => item?.id}
            data={appliances.item}
            renderItem={renderItem}
            ListHeaderComponent={ListHeaderComponent}
          />


        </View>
      </ScrollView>
         {renderBtn()}
    </SafeScrollView>
  )
}

export default GetRequirements