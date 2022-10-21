import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,ScrollView } from "react-native";
import Input from "../components/Imput";
import HomeComponets from "../components/ComponetsHome";
import Popular from "../components/PopularCategory";
export default function Home() {
  return (
    <View style={styles.containerNav}>
      <ScrollView>
      <StatusBar
        animated={true}
        backgroundColor='white' />
      <View >
        <Text style={styles.title}>Encotrar las mejores</Text>
        <Text style={styles.title}>Recetas para cocinar</Text>
      </View>
      <Input />
      <View>
      <HomeComponets />
      <Text style={styles.title1}>Categoria Popular</Text>
      <Popular/>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerNav: {
    backgroundColor:'white',
    flex: 1,
    paddingTop: 60,
  }, 

  title: {
    color: "bold",
    fontWeight: "bold",
    marginLeft: 20,
    fontSize: 25,
  },
  title1:{
    marginLeft: 20,
    marginTop:22,
    fontWeight:'bold',
    fontSize:25,
  },
});
