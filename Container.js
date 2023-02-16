import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator} from '@react-navigation/drawer'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Icon from 'react-native-vector-icons/MaterialIcons'

import Login from './src/Inmakes/Login'
import OtpPage from './src/Inmakes/OtpPage'
import Registration from './src/Inmakes/Registration'
import SchoolBoard from './src/Inmakes/SchoolBoard'
import AppDesc1 from './src/Inmakes/AppDesc1'

const Stack=createStackNavigator()
// const Drawer=createDrawerNavigator()
// const Tab=createMaterialTopTabNavigator()
// const BottomTab=createBottomTabNavigator()

function MyStack(){
    return(
        <Stack.Navigator>
          <Stack.Screen
            name='Login'
            component={Login}
            options={{headerShown:false}}
          />
          <Stack.Screen
            name='OtpPage'
            component={OtpPage}
            options={{headerShown:false}}
          />
          <Stack.Screen
            name='Registration'
            component={Registration}
            options={{headerShown:false}}
          />
              <Stack.Screen
            name='SchoolBoard'
            component={SchoolBoard}
            options={{headerShown:false}}
          />
           <Stack.Screen
            name='AppDesc1'
            component={AppDesc1}
            options={{headerShown:false}}
          />
      
           </Stack.Navigator>
  )
}
export default function Container(){
    return(
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
    )
  }