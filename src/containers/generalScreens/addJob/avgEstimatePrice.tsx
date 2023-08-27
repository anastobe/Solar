import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Metrics } from '@/assets/metrics/metrics'
import theme from '@/assets/styles/theme'
import SafeScrollView from '@/components/safeScrollView'
import CostDetail from '@/components/costDetail'
import SettingHeader from '@/components/settingStackHeader'
import { useNavigation } from '@react-navigation/native'
import Button from '@/components/button'
import { RouteNames } from '@/constants'

const AvgEstimatePrice = () => {

    const navigation = useNavigation();

    function renderBtn() {
        return (
          <View style={{ marginBottom: 20 }} >
            <Button
              width={Metrics.width - 40}
              onPress={()=>{ navigation.navigate(RouteNames.homeTabStack) }}
              distance={1}
              disabled={false}
              marginHorizontal={20}
              title="Post Job (on select cng back color and post job) "
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
            <SettingHeader name="Select Pakage" onPress={() => navigation.goBack()} />
        </View>
      <ScrollView>
      <CostDetail titleL={"Estimate Cost:"} titleR={"Pakage1"} ttlWatt={"200"} />
      <CostDetail titleL={"Estimate Cost:"} titleR={"Pakage2"} ttlWatt={"300"} />
      <CostDetail titleL={"Estimate Cost:"} titleR={"Pakage3"} ttlWatt={"450"} />
      <CostDetail titleL={"Estimate Cost:"} titleR={"Pakage4"} ttlWatt={"620"} />

      </ScrollView>
      {renderBtn()}
    </SafeScrollView>
  )
}

export default AvgEstimatePrice