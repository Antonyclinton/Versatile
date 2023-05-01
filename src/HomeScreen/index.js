import React from 'react'
import {View,Text} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './stackNavigator'
import Profile from './profile'


const Drawer = createDrawerNavigator();
const MainScreen=()=>{
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={StackNavigator} />
        <Drawer.Screen name="Notifications" component={Profile} />
      </Drawer.Navigator>
  );

}

export default MainScreen