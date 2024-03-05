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
      <Text style={{ fontSize: 20, color: "#000" }} >Total Watt: {appliances.totalWatt}</Text>
    </View>
  )
}

function onClick() {
  navigation.navigate(RouteNames.getRequirementsDetail, { appliancesData: appliances.item})
  return
}

function renderBtn() {

  function Price() {
  if (appliances.totalWatt < 10) {
      return {
        price: 0,
        battery: 0,
        pannel: 0,
        extraExpense: 0,
        days: 0
      }
    }  
  else if (appliances.totalWatt < 200) {
    return {
      price: 30000 + 15000,
      battery: 1,
      pannel: 1,
      extraExpense: 15000,
      days: 1
    }
  }
  else if (appliances.totalWatt < 500) {
    return {
      price: 30000 + 15000,
      battery: 1,
      pannel: 1,
      extraExpense: 15000,
      days: 1
    }
  }
  else if (appliances.totalWatt < 800) {
    return {
      price: 60000 + 15000,
      battery: 1,
      pannel: 2,
      extraExpense: 15000,
      days: 1
    }
  }
  else if (appliances.totalWatt < 1100) {
    return {
      price: 60000 + 30000,
      battery: 2,
      pannel: 3,
      extraExpense: 30000,
      days: 1
    }
  }
  else if (appliances.totalWatt < 1400) {
    return {
      price: 90000 + 30000,
      battery: 2,
      pannel: 3,
      extraExpense: 30000,
      days: 1
    }
  }
  else if (appliances.totalWatt < 1700) {
    return {
      price: 90000 + 30000,
      battery: 2,
      pannel: 4,
      extraExpense: 30000,
      days: 1
    }
  }
  else if (appliances.totalWatt < 2000) {
    return {
      price: 120000 + 30000,
      battery: 2,
      pannel: 4,
      extraExpense: 30000,
      days: 1
    }
  }
  else if (appliances.totalWatt < 2300) {
    return {
      price: 150000+45000,
      battery: 3,
      pannel: 5,
      extraExpense: 45000,
      days: 2
    }
  }
  else if (appliances.totalWatt < 2600) {
    return {
      price: 180000+45000,
      battery: 3,
      pannel: 6,
      extraExpense: 45000,
      days: 2
    }
  }
  else if (appliances.totalWatt < 2900) {
    return {
      price: 180000+45000,
      battery: 3,
      pannel: 6,
      extraExpense: 45000,
      days: 2
    }
  }
  else if (appliances.totalWatt < 3200) {
    return {
      price: 180000+60000,
      battery: 4,
      pannel: 6,
      extraExpense: 60000,
      days: 2
    }
  }
  else if (appliances.totalWatt < 3500) {
    return {
      price: 180000+60000,
      battery: 4,
      pannel: 6,
      extraExpense: 60000,
      days: 2
    }
  }
  else if (appliances.totalWatt < 3800) {
    return {
      price: 210000+60000,
      battery: 200,
      pannel: 7,
      extraExpense: 60000,
      days: 2
    }
  }
  else if (appliances.totalWatt < 4100) {
    return {
      price: 210000+75000,
      battery: 5,
      pannel: 7,
      extraExpense: 75000,
      days: 3
    }
  }
  else if (appliances.totalWatt < 4400) {
    return {
      price: 240000+75000,
      battery: 5,
      pannel: 8,
      extraExpense: 75000,
      days: 3
    }
  }
  else if (appliances.totalWatt < 4700) {
    return {
      price: 270000+75000,
      battery: 5,
      pannel: 9,
      extraExpense: 75000,
      days: 3
    }
  }
  else if (appliances.totalWatt < 5000) {
    return {
      price: 270000+75000,
      battery: 5,
      pannel: 9,
      extraExpense: 75000,
      days: 3
    }
  }
  else if (appliances.totalWatt < 5300) {
    return {
      price: 300000+90000,
      battery: 6,
      pannel: 10,
      extraExpense: 90000,
      days: 3
    }
  }
  else if (appliances.totalWatt < 5600) {
    return {
      price: 300000+90000,
      battery: 6,
      pannel: 11,
      extraExpense: 90000,
      days: 3
    }
  }
  else if (appliances.totalWatt < 5900) {
    return {
      price: 330000+90000,
      battery: 6,
      pannel: 11,
      extraExpense: 90000,
      days: 3
    }
  }
  else if (appliances.totalWatt < 6200) {
    return {
      price: 330000+105000,
      battery: 7,
      pannel: 11,
      extraExpense: 105000,
      days: 3
    }
  }
  else if (appliances.totalWatt < 6500) {
    return {
      price: 360000+105000,
      battery: 7,
      pannel: 12,
      extraExpense: 105000,
      days: 3
    }
  }
  else if (appliances.totalWatt < 6800) {
    return {
      price: 360000+105000,
      battery: 7,
      pannel: 12,
      extraExpense: 105000,
      days: 3
    }
  }
  else if (appliances.totalWatt < 7100) {
    return {
      price: 390000+120000,
      battery: 8,
      pannel: 13,
      extraExpense: 120000,
      days: 3
    }
  }
  else if (appliances.totalWatt < 7400) {
    return {
      price: 390000+120000,
      battery: 200,
      pannel: 13,
      extraExpense: 120000,
      days: 4
    }
  }
  else if (appliances.totalWatt < 7700) {    
    return {
      price: 420000+120000,
      battery: 8,
      pannel: 14,
      extraExpense: 120000,
      days: 4
    }
  }
  else if (appliances.totalWatt < 8000) {
    return {
      price: 420000+120000,
      battery: 8,
      pannel: 14,
      extraExpense: 120000,
      days: 4
    }
  }
  else if (appliances.totalWatt < 8300) {
    return {
      price: 450000+135000,
      battery: 9,
      pannel:15,
      extraExpense: 135000,
      days: 4
    }
  }
  else if (appliances.totalWatt < 8600) {
    return {
      price: 450000+135000,
      battery: 9,
      pannel: 15,
      extraExpense: 135000,
      days: 4
    }
  }
  else if (appliances.totalWatt < 8900) {
    return {
      price: 480000+135000,
      battery: 9,
      pannel: 16,
      extraExpense: 135000,
      days: 4
    }
  }
  else if (appliances.totalWatt < 9200) {
    return {
      price: 510000+150000,
      battery: 10,
      pannel: 17,
      extraExpense: 150000,
      days: 4
    }
  }
  else if (appliances.totalWatt < 9500) {
    return {
      price: 540000+150000,
      battery: 10,
      pannel: 18,
      extraExpense: 150000,
      days: 5
    }
  }
  else if (appliances.totalWatt < 9800) {
    return {
      price: 540000+150000,
      battery: 10,
      pannel: 19,
      extraExpense: 150000,
      days: 5
    }
  }

  else  {
    return {
      price: "Not Available",
      battery: "#",
      pannel: "#",
      extraExpense: "#",
      days: "#" 
    }
  }


  }

  console.log("Price===>",Price());
  

  return (
    <View style={{ backgroundColor: theme.inputPlaceholder, height: 170, alignItems: "center", borderTopLeftRadius: 20, borderTopRightRadius: 20  }} >

      <View style={{ flexDirection: "row", width: '100%', justifyContent: "center", marginTop: 10 }} >
        <View style={{ backgroundColor: theme.purple, marginTop: 20, borderRadius: 20 }} >
          <Text style={{ color: theme.white, fontSize: 20, marginHorizontal: 20, marginVertical: 10 }} >PRICE: {Price()?.price}</Text>
        </View>

        <View style={{ position: "absolute", right: 10,  width: 60,  marginTop: 5}} >
          <Text style={{ color: theme.white, backgroundColor: theme.purple, borderRadius: 20,  width: 60, textAlign: "center", paddingVertical: 5 }} >Days: {Price()?.days}</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-around", width: '100%', marginTop: 20 }} >

        <View style={{ alignItems: "center", justifyContent: "center"  ,backgroundColor: theme.purple, width: 90, borderRadius: 20,height: 50 }} >
          <Text style={{  color: theme.white }} >BATTERY</Text>
          <Text style={{  color: theme.white }} >{Price()?.battery}</Text>
        </View>

        <View style={{ alignItems: "center", justifyContent: "center"  ,backgroundColor: theme.purple, width: 90, borderRadius: 20,height: 50 }} >
          <Text style={{  color: theme.white }} >PANELS</Text>
          <Text style={{  color: theme.white }} >{Price()?.pannel}</Text>
        </View>

        <View style={{ alignItems: "center", justifyContent: "center"  ,backgroundColor: theme.purple, width: 90, borderRadius: 20,height: 50 }} >
          <Text style={{  color: theme.white }} >EXTRA EXP</Text>
          <Text style={{  color: theme.white }} >{Price()?.extraExpense}</Text>
        </View>
  
      </View>


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
