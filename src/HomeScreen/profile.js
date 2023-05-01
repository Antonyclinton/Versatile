import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native';



const Profile =()=>{
    let [activeIndex, setIndex] = useState(0)
return(
    <View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={["Primary", "Document", "Parent", "Other", "Other1", "Other2"]}
                horizontal={true}
                renderItem={({ item, index }) =>
                    <View style={{ borderBottomWidth: 2, paddingHorizontal: 40, paddingVertical: 15, borderBottomWidth: 4, borderBottomColor: activeIndex == index ? "black" : "#FFF", marginRight: 10 }}>
                        <TouchableOpacity onPress={() => setIndex(index)}><Text style={{color: item == "Primary"?"green":null }}>{item}</Text></TouchableOpacity>
                    </View>} />

            <View style={{ marginTop: 20, backgroundColor: "#FFF", height: "90%", borderTopLeftRadius: 50, borderTopRightRadius: 50, padding: 10,shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.58,
shadowRadius: 16.00,

elevation: 24, }}>
                <FlatList
                showsVerticalScrollIndicator={false}
                    data={["Name", "Father", "Mother", "Gender", "Qualification","a","d","r","fd"]}
                    renderItem={({ item, index }) =>
                        <View>
                            <Text style={{ marginLeft: 17, marginTop: 10,fontWeight:"700",fontSize:15 }}>{item}</Text>
                            <TextInput style={{ borderColor: "black", borderWidth: 1, width: "90%", marginLeft: 15, borderRadius: 12, marginTop: 10, backgroundColor: "#FFF",shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.34,
shadowRadius: 6.27,

elevation: 10, }} /></View>
                    }
                    ListFooterComponent={() => <View style={{ marginTop: 30, flexDirection: "row", alignSelf: "center" }}><TouchableOpacity style={{ backgroundColor: "#8095bd", padding: 10, marginRight: 10, borderRadius: 10,width:"42%"  }}><Text style={{ color: "#FFF",textAlign:"center",fontWeight:"bold" }}>Save and Close</Text></TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "#8095bd", padding: 10, marginLeft: 10, borderRadius: 10,width:"42%" }}><Text style={{ color: "#FFF",textAlign:"center",fontWeight:"bold" }}>Save And Continue</Text></TouchableOpacity>
                    </View>} />
            </View>

        </View>
)
}


export default Profile