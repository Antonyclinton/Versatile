import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput,Image,Picker } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import SearchPicker from '../component/searchpicker';


const Home = () => {
  let items = [
    {
      id: 1,
      name: 'JavaScript',
    },
    {
      id: 2,
      name: 'Java',
    },
    {
      id: 3,
      name: 'Ruby',
    },
    {
      id: 4,
      name: 'React Native',
    },
    {
      id: 5,
      name: 'PHP',
    },
    {
      id: 6,
      name: 'Python',
    },
    {
      id: 7,
      name: 'Go',
    },
    {
      id: 8,
      name: 'Swift',
    },
  ];
    let [activeIndex, setIndex] = useState(false)
    const [selectedItem,setSelectedItem] = useState('')
    return (
      <View style={{alignItems:"center"}}>{console.log(selectedItem)}
      <SearchPicker data={items} selectedItem={(item)=> console.log(item)}/>
      </View>
    )
}


export default Home