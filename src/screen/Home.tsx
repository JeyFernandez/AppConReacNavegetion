import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Input from "../components/Imput";
import HomeComponets from "../components/ComponetsHome";
export default function Home() {
  return (
    <View style={styles.containerNav}>
      <StatusBar
        animated={true}
        backgroundColor='white' />
      <View >
        <Text style={styles.title}>Encotrar las mejores</Text>
        <Text style={styles.title}>Recetas para cocinar</Text>
      </View>
      <Input />
      <HomeComponets />
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
});
