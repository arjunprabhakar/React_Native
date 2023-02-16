import React from "react"
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator} from '@react-navigation/drawer'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Icon from 'react-native-vector-icons/MaterialIcons'


import Login from './src/Login'
import Flexbox from './src/Flexbox'
import Home from './src/Drawer/Home'
import Profile from './src/Drawer/Profile'
import DrawerContent from './src/Drawer/DrawerContent'
import Settings from "./src/Drawer/Settings"
import About from "./src/Drawer/About"
import Cart from "./src/Tab/Cart"
import Category from "./src/Tab/Category"
import Order from "./src/Tab/Order"
import Search from "./src/Tab/Search"
import Call from "./src/BottomTab/Calls"
import Chat from "./src/BottomTab/Chat"
import Status from "./src/BottomTab/Status"


const Stack=createStackNavigator()
const Drawer=createDrawerNavigator()
const Tab=createMaterialTopTabNavigator()
const BottomTab=createBottomTabNavigator()
function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name='Login'
        component={Login}
        options={{headerShown:false}}
      />
      <Stack.Screen
        name='Flexbox'
        component={Flexbox}
        options={{headerShown:false}}
      />
      <Stack.Screen 
      name='Drawer' 
      component={MyDrawer}
      options={{headerShown:false}}/>
      <Stack.Screen
       name='Tab'
       component={MyTab}
       options={{headerShown:false}}
       />
      <Stack.Screen
      name='MyTab'
      component={MyBottomTab}
      options={{headerShown:false}}
      />

    </Stack.Navigator>
  )
}

function MyDrawer(){
  return(
    <Drawer.Navigator
    drawerContent={(props)=><DrawerContent {...props}/>}>
      <Drawer.Screen name='Home' component={Home}/>
      <Drawer.Screen name='Profile' component={Profile}/>
      <Drawer.Screen name='About' component={About}/>
      <Drawer.Screen name='Settings' component={Settings}/>
    </Drawer.Navigator>
  )
}

function MyTab(){
  return(
    <Tab.Navigator
    screenOptions={{
      tabBarLabelStyle:{fontSize:14},
      tabBarItemStyle:{width:100},
      tabBarStyle:{backgroundColor:'#5CC8EE'}
    }}>
      <Tab.Screen 
           name='Cart'
           component={Cart}
           options={{
            tabBarActiveTintColor:'#8EF584',
            tabBarInactiveTintColor:'gray',
            tabBarIcon:({focused})=> 
            focused?<Icon name='call' size={24} color='#8EF584'/>:<Icon name='shopping-cart' size={24} color='gray'/>
           }}/>
      <Tab.Screen
           name='User'
           component={Category}
           options={{
            tabBarActiveTintColor:'#8EF584',
            tabBarInactiveTintColor:'gray',
            tabBarIcon: ({focused})=> 
            focused ? <Icon name='category' size={24} color='#8EF584'/> : <Icon name='category' size={24} color='gray'/>
           }}/>
      <Tab.Screen
           name='Order'
           component={Order} 
           options={{   
           tabBarActiveTintColor:'#8EF584',
           tabBarInactiveTintColor:'gray',
           tabBarIcon: ({focused})=> 
           focused ? <Icon name='shopping-bag' size={24} color='#8EF584'/> : <Icon name='shopping-bag' size={24} color='gray'/>
          }}/>
      <Tab.Screen
           name='Search'
           component={Search}
           options={{  
           tabBarActiveTintColor:'#8EF584',
           tabBarInactiveTintColor:'gray', 
           tabBarIcon: ({focused})=> 
           focused ? <Icon name='search' size={24}  color='#8EF584'/> : <Icon name='search' size={24}  color='gray'/>
          }}/>
    </Tab.Navigator>
  )
}
function MyBottomTab(){
  return(
    <BottomTab.Navigator
      screenOptions={{
        tabBarLabelStyle:{fontSize:12},
        tabBarItemStyle:{width:100},
        tabBarStyle:{backgroundColor:'#fff'}
      }}>  
      <BottomTab.Screen
      name='Call'
      component={Call}
      options={{
        tabBarActiveTintColor:'green',
        tabBarInactiveTintColor:'gray',
        tabBarIcon: ({focused})=> 
           focused ? <Icon name='call' size={24} color='#8EF584'/> : <Icon name='call' size={24} color='gray'/>
          }}/>

<BottomTab.Screen
      name='Chat'
      component={Chat}
      options={{
        tabBarActiveTintColor:'green',
        tabBarInactiveTintColor:'gray',
        tabBarIcon: ({focused})=> 
           focused ? <Icon name='chat' size={24} color='#8EF584'/> : <Icon name='chat' size={24} color='gray'/>
          }}/>

<BottomTab.Screen
      name='sStatus'
      component={Status}
      options={{
        tabBarActiveTintColor:'green',
        tabBarInactiveTintColor:'gray',
        tabBarIcon: ({focused})=> 
           focused ? <Icon name='timelapse' size={24} color='#8EF584'/> : <Icon name='timelapse' size={24} color='gray'/>
          }}/>
    </BottomTab.Navigator>
  ) 
}
export default function App(){
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}