import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo, } from "@expo/vector-icons";




export default function Perfil() {
  return (
    <View style={styles.princpal}>

      <View style={styles.principal1}>
        <Text style={styles.Profile}>
          Mi Perfil
          <Entypo name="dots-three-horizontal" size={24} color="black" />
        </Text>

      </View>

      <View style={styles.Profile1}>
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


      <Text style={styles.Profile}>Fredys Cubas</Text>

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
        <View>
         
        </View>
        
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  vista: {
    backgroundColor: "gray",
    height: "700",
  },

  star: {
    backgroundColor: '#90A4AE',
    borderRadius: 5,

  },

  princpal: {
    justifyContent: 'space-between',
    height: "2000",
  },

  Profile: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: "space-between",
  },

  Profile1: {
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: "space-between",

  },

  Profile2: {
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingBottom: 300,

  },

  principal1: {
    flexDirection: 'row',
    justifyContent: "space-between",
  },

  imgProfile: {
    width: 90,
    height: 90,
    borderRadius: 100,
    margin: 20,
  },

  edit: {

    marginRight: "5%",
    marginTop: 40,
  },

  edit1: {
    textAlign: "center",
    fontSize: 20,
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: '#ffff',
    borderRadius: 10,
    borderwidth: 10,

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
    marginTop: 20,
    paddingBottom: '100%',
    justifyContent: "center",
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
