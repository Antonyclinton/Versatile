import React, { useEffect } from 'react'
import {View,Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './src/HomeScreen';
import AuthNavigator from './src/AuthScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen'

const App=()=>{
  
  useEffect(()=>{
    SplashScreen.hide();
  })
  let Initial = true
  return (
    <NavigationContainer>
      {Initial?<AuthNavigator/>:
      <MainScreen/>}
    </NavigationContainer>
  );

}

export default App