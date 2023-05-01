import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignUp from './signUp';
import Login from './login';
import Welcome from './welcomePage';

const Stack = createNativeStackNavigator();

const AuthNavigator =()=>{
return(
    <Stack.Navigator>
    <Stack.Screen name="Welcome" options={{ headerShown: false }} component={Welcome}/>
    <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUp}/>
    <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
  </Stack.Navigator>
)
}


export default AuthNavigator