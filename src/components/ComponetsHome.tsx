import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Feather } from '@expo/vector-icons';

export default function HomeComponets() {
  return (
    <View style ={styles.row}>
        <View style={styles.carrucel}>
        <Text style={styles.title}>En Tendencia 🔥</Text>
        <TouchableOpacity>
          <Text style={styles.All}>See all  <Feather name="arrow-right" size={24} /></Text>
        </TouchableOpacity>
        </View>

      <ScrollView horizontal={true}>

      </ScrollView>
    </View>
  );
}
const styles =StyleSheet.create({
row:{
    marginLeft:20,
    },
title:{
    fontSize:25,    
    fontWeight:'bold',
},
carrucel:{
  flexDirection:'row',  
  justifyContent:'space-between',
},
All: {
    fontWeight:'bold',
    textAlign: "center",
    marginHorizontal: 4,
    fontSize: 20,
    paddingVertical: 5, 
    paddingHorizontal: 20,
    color: "#E23E3E",
  },
}) 