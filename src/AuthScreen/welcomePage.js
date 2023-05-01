import React,{useState} from 'react';
import {View,Text,Button,TouchableOpacity,TextInput,Image,StyleSheet} from 'react-native';
import { MaskedTextInput,MaskedText } from "react-native-mask-text";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
export default Welcome =(props)=>{
  const [value, setValue] = useState(false);
  let o=3
return(
    <View style={{justifyContent:"center",alignItems:"center",flex:1,backgroundColor:"#FFF"}}>
    <View style={{marginBottom:25}}>
      <Image source={require('../../assests/images/versatileText.png')}/>
    </View>
    <View>
      <TextInput style={styles.inputBox}/>
      <TextInput style={styles.inputBox}/>
      <TouchableOpacity style={styles.submitButton}>
        <Text>Login</Text>
      </TouchableOpacity>
      <View style={{flexDirection:"row"}}>
      <TouchableOpacity>
      <Text>Forgot Password? </Text>
</TouchableOpacity>
<TouchableOpacity>
  <Text>Sign up</Text>
</TouchableOpacity>
      </View>
      
     
    </View>
    </View>
)
}

const styles = StyleSheet.create({
  inputBox : {
    marginBottom:15,
    width:330,
    borderRadius:15,
    backgroundColor: "#E5E5E5"
  },
  submitButton:{
    backgroundColor: "#002db3",
    padding:10,
    borderRadius:10
  }
})
