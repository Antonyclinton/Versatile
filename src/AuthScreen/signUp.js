import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{useEffect} from 'react';
import {View,Text,Button} from 'react-native';



const SignUp =()=>{
    useEffect(()=>{
        y()
     })
    const Authenticate =async()=>{
        await AsyncStorage.setItem('Authenticated','true')
        console.log("gggg",await AsyncStorage.getItem('Authenticated'))
    }
    const y=async()=>{
        console.log("INTial",await AsyncStorage.getItem('Authenticated'))
    }
return(
    <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
    <Text>Sign Up Screen</Text>
    <Button title='Authenticate' onPress={()=> Authenticate()}></Button>
    </View>
)
}


export default SignUp