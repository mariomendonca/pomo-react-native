import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './screens/Home'

export default function Routes() {
  const { Screen, Navigator } = createBottomTabNavigator()
  return (
    <NavigationContainer>
      <Navigator>
        <Screen component={Home} name='Home'/>
      </Navigator>
    </NavigationContainer>
  )
}