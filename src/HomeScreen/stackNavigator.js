import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTab from './tabNavigator';

const Stack = createNativeStackNavigator();

const StackNavigator =()=>{
return(
    <Stack.Navigator>
    <Stack.Screen name="HomeComponent" options={{ headerShown: false }} component={BottomTab} />
  </Stack.Navigator>
)
}


export default StackNavigator