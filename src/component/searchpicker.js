import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput,Image,Picker } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';


const SearchPicker = (props) => {
    let [items,setItem] = useState(props.data)
    let [activeIndex, setIndex] = useState(false)
    return (
      <View>
      <TextInput style={{borderColor:"black",borderWidth:1,width:355}} 
      placeholder="useless placeholder"
      onFocus={()=> setIndex(true)}
      onBlur={()=> setIndex(false)}
      onPressIn={()=> console.log("unfocused")}
      />
      <View style={{height:200}}>
      {activeIndex?<FlatList data={items} renderItem={({item,index})=> <TouchableOpacity style={{borderColor:"black",borderWidth:2,width:355,padding:10,borderTopColor:"#FFF"}} onPress={()=> console.log(item)}>
          <Text>{item.name}</Text>
          </TouchableOpacity>}/>:null}</View>
      </View>
    )
}


export default SearchPicker