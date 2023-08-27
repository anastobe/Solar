import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Metrics } from '@/assets/metrics/metrics'
import theme from '@/assets/styles/theme'
import SafeScrollView from '@/components/safeScrollView'

const AddLoads = () => {
  return (
    <SafeScrollView screenCol={theme.white} barCol={theme.white}  >
      <ScrollView>
        <Text>AddLoads page</Text>
      </ScrollView>
    </SafeScrollView>
  )
}

export default AddLoads