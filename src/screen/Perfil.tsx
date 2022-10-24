<<<<<<< HEAD
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Entypo, } from "@expo/vector-icons";
import PerfilComponets from "../components/PerfilComponets";



=======
import {View,Text } from 'react-native';
>>>>>>> f52e1ea2e1afaf552a7fcf5899f7735f4ec33249
export default function Perfil() {
  return (
    <ScrollView>
      <View>
        <View style={styles.principal1}>
          <Text style={styles.Profile}>
            Mi Perfil
          </Text>
          <View style={styles.principal2}>
            <Entypo name="dots-three-horizontal" size={24} color="black" />
          </View>
        </View>

        <View style={styles.Profil}>
          <Image
            style={styles.imgProfile}
            source={{
              uri: "https://images6.alphacoders.com/126/1260492.png",
            }}
          />
          <View style={styles.edit}>
            <TouchableOpacity>
              <Text style={styles.edit1}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.Profile3}>Michell Luna</Text>

        <View style={styles.text1}>
          <Text style={styles.text1}>Hola buenas tardes mi nombre es Freddy cubas
            Un gusto conocerlos</Text>


        </View>
        <View style={styles.text2}>

          <View>
            <Text style={styles.text1}>Recipe</Text>
            <Text style={styles.text3}> 3</Text>
          </View>

          <View>
            <Text style={styles.text1}>Videos</Text>
            <Text style={styles.text3}> 13</Text>
          </View>

          <View>
            <Text style={styles.text1}>Followers</Text>
            <Text style={styles.text3}> 14K</Text>
          </View>

          <View>
            <Text style={styles.text1}>Followin</Text>
            <Text style={styles.text3}> 120</Text>
          </View>
        </View>

        <View style={styles.Buttons0}>
          <View style={styles.Buttons}>
            <TouchableOpacity>
              <View>
                <Text style={styles.text4}>Video</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>

              <View>
                <Text style={styles.text5}>Recipe</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <PerfilComponets />
      </View>

    </ScrollView>

  );
}
const styles = StyleSheet.create({
  principal2: {
    position: 'absolute',
    marginLeft: '80%',
    marginTop: 15,
  },
  vista: {
    backgroundColor: "gray",
    height: "700",
  },

  star: {
    backgroundColor: '#90A4AE',
    borderRadius: 5,

  },

  Profile: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: "space-between",
    left: 30,
  },

  Profile1: {
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: "space-between",

  },

  Profile3: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: "space-between",
    left: 30,
  },

  Profile2: {
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingBottom: 300,

  },

  principal1: {
    flexDirection: 'row',

  },

  imgProfile: {
    width: 90,
    height: 90,
    borderRadius: 100,
    margin: 20,
  },

  edit: {
    marginTop: 40,
    marginRight: "12%",
    height: 33,
    width: '10%',
    borderRadius: 5,
    borderStyle: 'solid 1px',
    borderColor: '#000'
   
    
  },

  edit1: {
    textAlign: "center",
    fontSize: 20,
  },

  text1: {
    color: "#AAAAAA",
    margin: 10,
    fontSize: 18,
  },

  text2: {
    flexDirection: "row",
    marginTop: 1,
    color: "#AAAAAA",
    marginLeft: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderColor: "#AAAAAA",
  },


  text3: {
    color: "#000",
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
  },

  Buttons: {
    justifyContent: 'space-between',
    marginTop: 20,
    marginLeft: '30%',
    marginRight: '40%',
    flexDirection: "row",
  },

  Buttons0: {
    justifyContent: 'center',
    marginTop: 20,
    flexDirection: "row",
  },

  text4: {
    fontSize: 20,
    color: "red",
    marginHorizontal: 40,
  },

  text5: {
    fontSize: 20,
    color: "#ffff",
    marginHorizontal: 40,
    backgroundColor: 'red',
    width: 100,
    height: 35,
    borderRadius: 10,
    textAlign: "center",

  },

  img: {
    width: 300,
    height: 200,
    borderRadius: 20,
    marginHorizontal: 20,

  },

});
