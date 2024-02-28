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
import Header from '@/components/header'

const CalculateExpense = () => {

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
  const [appliancesFiltered, setAppliancesFiltered] = useState(appliances)



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



  function handleSetPassword(text) {

    if (text) {
      const newData = appliances.item.filter(
        function (item) {
          const itemData = item.applianceName
            ? item.applianceName.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
      });
      setAppliancesFiltered({
        ...appliances,
        item: newData,
      });
      setPassword(text);
    } else {
      setAppliancesFiltered({
        ...appliances,
        item: appliances.item,
      });
      setPassword(text);
    }
    
    // const filtered = appliances.item.filter(appliance =>
    //   appliance.applianceName.toLowerCase().includes(txt.toLowerCase())
    // );
    // if (filtered) {      
    //   setAppliances({
    //     ...appliances,
    //     item: filtered,
    //   });
    // }
    // else{
    //   setAppliances({
    //     ...appliances,
    //     item: appliances.item,
    //   });
    // }      
    // console.log("pppp=====>",filtered);
    
    // setPassword(txt);
    // return
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

  function Price() {
  if (appliances.totalWatt < 200) {
    return {
      price: 15000,
      battery: 100,
      pannel: 1,
      extraExpense: 8,
      days: 1
    }
  }
  else if (appliances.totalWatt < 600) {
    return {
      price: 30000,
      battery: 200,
      pannel: 1,
      extraExpense: 8,
      days: 1
    }
  }
  else if (appliances.totalWatt < 1000) {
    return {
      price: 50000,
      battery: 200,
      pannel: 2,
      extraExpense: 8,
      days: 1
    }
  }
  else if (appliances.totalWatt < 1400) {
    return {
      price: 70000,
      battery: 200,
      pannel: 3,
      extraExpense: 8,
      days: 1
    }
  }
  else if (appliances.totalWatt < 1800) {
    return {
      price: 90000,
      battery: 200,
      pannel: 3,
      extraExpense: 8,
      days: 2
    }
  }
  else if (appliances.totalWatt < 2200) {
    return {
      price: 110000,
      battery: 200,
      pannel: 4,
      extraExpense: 8,
      days: 2
    }
  }
  else if (appliances.totalWatt < 2600) {
    return {
      price: 130000,
      battery: 200,
      pannel: 4,
      extraExpense: 8,
      days: 2
    }
  }
  else if (appliances.totalWatt < 3000) {
    return {
      price: 150000,
      battery: 200,
      pannel: 5,
      extraExpense: 8,
      days: 2
    }
  }
  else if (appliances.totalWatt < 3500) {
    return {
      price: 175000,
      battery: 200,
      pannel: 6,
      extraExpense: 8,
      days: 2
    }
  }
  else if (appliances.totalWatt < 4000) {
    return {
      price: 200000,
      battery: 200,
      pannel: 7,
      extraExpense: 8,
      days: 2
    }
  }
  else if (appliances.totalWatt < 4500) {
    return {
      price: 225000,
      battery: 200,
      pannel: 8,
      extraExpense: 8,
      days: 3
    }
  }
  else if (appliances.totalWatt < 5000) {
    return {
      price: 250000,
      battery: 200,
      pannel: 8,
      extraExpense: 8,
      days: 3
    }
  }
  else if (appliances.totalWatt < 5500) {
    return {
      price: 300000,
      battery: 200,
      pannel: 9,
      extraExpense: 8,
      days: 3
    }
  }
  else if (appliances.totalWatt < 6000) {
    return {
      price: 350000,
      battery: 200,
      pannel: 10,
      extraExpense: 8,
      days: 3
    }
  }


  else  {
    return {
      price: 0,
      battery: 0,
      pannel: 0,
      extraExpense: 0,
      days: 0 
    }
  }


  }

  console.log("Price===>",Price());
  

  return (
    <View style={{ marginBottom: 20, backgroundColor: theme.white, height: 100 }} >
      <Text>price: {Price().price}</Text>
      <Text>Battery: {Price().battery}</Text>
      <Text>Panels: {Price().pannel}</Text>
      <Text>Extra Expense: {Price().extraExpense}</Text>
      <Text>Approx Days: {Price().days}</Text>
    </View>
  );
}

  return (
    <SafeScrollView screenCol={theme.white} barCol={theme.white}  >
      <View style={{ marginHorizontal: 20 }} >
        <SettingHeader name="Price Evaluation" onPress={() => navigation.goBack()} />
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
            data={appliancesFiltered.item}
            renderItem={renderItem}
            ListHeaderComponent={ListHeaderComponent}
          />


        </View>
      </ScrollView>
         {renderBtn()}
    </SafeScrollView>
  )
}

export default CalculateExpense
