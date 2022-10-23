import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { MaterialCommunityIcons, Fontisto, Entypo } from "@expo/vector-icons";

const Detalle = () => {
  return (
    <ScrollView>
         <Text style={styles.SaveRecipes}>Recetas guardadas</Text>
      <View style={styles.container}>

        <View style={styles.TextVideo}>
          <Text style={styles.TextVideo1}>Video</Text>
          <Text style={styles.TextRecipe}>Recipe</Text>
        </View>

        <View style={styles.reseta}>
          <View>
            <Image
              source={require('../Image/Imagen1.jpg')}
              style={styles.img}
            />
            <View style={styles.bgfavorite}>
              <Fontisto name="favorite" style={styles.favorite} />
            </View>
            <Text style={styles.str}>
              <Entypo name="star" size={25} color="white" />
              4.4
            </Text>
            <Text style={styles.time}>5:10</Text>
            <View style={styles.bgplay}>
              <Fontisto name="play" style={styles.play} />
            </View>
          </View>
          <View style={styles.end}>
            <Text style={styles.text}>Como hacer un tostada</Text>
            <Entypo name="dots-three-horizontal" size={24} color="black" />
          </View>

          <View style={styles.user}>
            <Image
              source={{
                uri: "https://c4.wallpaperflare.com/wallpaper/264/180/931/alessandro-di-cicco-women-model-long-hair-wallpaper-preview.jpg",
              }}
              style={styles.userImg}
            />
            <Text style={styles.textUser}>By Alexandra Contreras</Text>
          </View>
        </View>

        <View style={styles.reseta}>
          <View>
            <Image
              source={require("../Image/Imagen2.jpg")}
              style={styles.img}
            />
            <View style={styles.bgfavorite}>
              <Fontisto name="favorite" style={styles.favorite} />
            </View>
            <Text style={styles.str}>
              <Entypo name="star" size={25} color="white" />
              4.4
            </Text>
            <Text style={styles.time}>5:10</Text>
            <View style={styles.bgplay}>
              <Fontisto name="play" style={styles.play} />
            </View>
          </View>
          <View style={styles.end}>
            <Text style={styles.text}>How to make sushi at home</Text>
            <Entypo name="dots-three-horizontal" size={24} color="black" />
          </View>

          <View style={styles.user}>
            <Image
            source={{
              uri: "https://st2.depositphotos.com/20363444/i/600/depositphotos_442183986-stock-photo-stylish-woman-headscarf-adjusting-sunglasses.jpg",
            }}
              style={styles.userImg}
            />
            <Text style={styles.textUser}>By Niki Samanta</Text>
          </View>
        </View>
        <View style={styles.reseta}>
          <View>
            <Image
              source={require("../Image/Imagen3.jpeg")}
              style={styles.img}
            />
            <View style={styles.bgfavorite}>
              <Fontisto name="favorite" style={styles.favorite} />
            </View>
            <Text style={styles.str}>
              <Entypo name="star" size={25} color="white" />
              4.4
            </Text>
            <Text style={styles.time}>5:10</Text>
            <View style={styles.bgplay}>
              <Fontisto name="play" style={styles.play} />
            </View>
          </View>
          <View style={styles.end}>
            <Text style={styles.text}>Indonesian 
chiken burger</Text>
            <Entypo name="dots-three-horizontal" size={24} color="black" />
          </View>

          <View style={styles.user}>
            <Image
            source={{
              uri: "https://img.freepik.com/foto-gratis/retrato-modelo-sonriente-hermoso-hombre-negocios-inconformista-que-lleva-ropa-blanca-casual-verano_158538-919.jpg?w=2000",
            }}
              style={styles.userImg}
            />
            <Text style={styles.textUser}>By James Wolden</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default Detalle;

const styles = StyleSheet.create({
  container: {    
    margin: 20,
  },
  SaveRecipes: {
    marginLeft:20,
    marginTop: 40,
    fontSize: 25,
    fontWeight: "bold",
  },
  TextVideo: {
    flexDirection: "row",
    marginVertical: 20,
  },
  TextVideo1: {
    backgroundColor: "#E23E3E",
    color: "white",
    fontSize: 18,
    borderRadius: 12,
    paddingHorizontal: "20%",
    padding: 10,
    textAlign: "center",
  },
  TextRecipe: {
    color: "#E23E3E",
    fontSize: 18,
    borderRadius: 12,
    paddingHorizontal: "20%",
    padding: 10,
    textAlign: "center",
  },
  reseta: {
    marginTop:12,
  },
  bgplay: {
    borderRadius: 50,
    padding: 23,
    backgroundColor: "rgba(25, 20, 20, 0.5)",
    position: "absolute",
    left: '42%',
    top: 60,
  },
  bgfavorite: {
    borderRadius: 50,
    backgroundColor: "rgb(250,250,250)",
    position: "absolute",
    left: '85%',
    top: 10,
  },
  play: {
    fontSize: 20,
    color: "white",
  },
  favorite: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 20,
    color: "black",
  },
  str: {
    fontSize: 20,
    color: "white",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(25,25,20,0.5)",
    width: 60,
    filter: 0,
    borderRadius: 8,
    padding: 2,
    position: "absolute",
    left: '5%',
    top: 10,
  },
  time: {
    fontSize: 20,
    color: "white",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(20, 20, 20,0.4)",
    borderRadius: 8,
    paddingVertical: 2,
    paddingHorizontal: 10,
    position: "absolute",
    left:'85%',
    top: 160,
  },
  end: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 20,
  },

  img: {
    width:'100%',
    height: 200,
    borderRadius: 10,
  },
  user: {
    flexDirection: "row",
  },
  userImg: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  textUser: {
    color: "#AAAAAA",
    margin: 10,
    fontSize: 18,
  },
});
