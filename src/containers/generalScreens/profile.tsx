import { Metrics } from '@/assets/metrics/metrics'
import theme from '@/assets/styles/theme'
import SafeScrollView from '@/components/safeScrollView'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'

const Profile = () => {
  return (
    <SafeScrollView screenCol={theme.white} barCol={theme.white}  >
      <ScrollView>
        <Text>profile page</Text>
      </ScrollView>
    </SafeScrollView>
  )
}

export default Profile