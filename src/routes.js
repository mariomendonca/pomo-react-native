import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons, AntDesign, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

import colors from './styles/Colors'

import Home from './screens/Home/Home'
import Settings from './screens/Settings/Settings'

export default function Routes() {
  const { Screen, Navigator } = createBottomTabNavigator()

  return (
    <NavigationContainer>
      <Navigator
        tabBarOptions={{
          style: {
            height: 60,
            borderTopWidth: 0,
            backgroundColor: colors.primary
          },
          labelStyle: {
            fontSize: 10,
            fontFamily: 'DMSans_700Bold'
          },
          activeTintColor: colors.green,
          inactiveTintColor: colors.gray
        }}
      >
        <Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <AntDesign 
                name={focused ? 'clockcircle' : 'clockcircleo'}
                color={color} 
                size={26} />
            ),
          }}
        />
        <Screen
          name="Report"
          component={Settings}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <MaterialIcons
                name={focused ? 'insert-chart' : 'insert-chart-outlined'} 
                color={color} 
                size={26} />
              // <Ionicons 
              //   name={focused ? 'stats-chart' : 'stats-chart-outline'} 
              //   color={color} 
              //   size={26} />
            ),
          }}
        />
        <Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome5 
                name={focused ? 'user-alt' : 'user'}
                color={color} 
                size={26} />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}