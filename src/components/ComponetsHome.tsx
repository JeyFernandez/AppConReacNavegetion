import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Feather, Entypo, Fontisto } from "@expo/vector-icons";


export default function HomeComponets() {
  return (
    <View style={styles.row}>
      <View style={styles.carrucel}>
        <Text style={styles.title}>En Tendencia 🔥</Text>
        <TouchableOpacity>
          <Text style={styles.All}>
            See all <Feather name="arrow-right" size={24} />
          </Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView horizontal={true}>
        <View style={styles.reseta}>
          <View>

            <Image
              source={{
                uri: "https://assets.unileversolutions.com/recipes-v2/231719.jpg",
              }}

              style={styles.img}
            />
            <View style={styles.bgfavorite} >
            <Fontisto name="favorite" style={styles.favorite} />
            </View>
            <Text style={styles.str}><Entypo name="star" size={25} color='white'/>4.4</Text>
            <Text style={styles.time} >5:10</Text>
            <View style={styles.bgplay} >
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
                uri: "https://c4.wallpaperflare.com/wallpaper/264/180/931/alessandro-di-cicco-women-model-long-hair-wallpaper-preview.jpg",
              }}
              style={styles.userImg}
            />
            <Text style={styles.textUser}>By Alexandra Contreras</Text>
          </View>
        </View>

        {/*  */}
        <View style={styles.reseta}>
          <View>

            <Image
              source={{
                uri: "https://static-sevilla.abc.es/media/gurmesevilla/2014/06/receta-pescado-plancha.jpg",
              }}
              style={styles.img}
            />
            <View style={styles.bgfavorite} >
            <Fontisto name="favorite" style={styles.favorite} />
            </View>
            <Text style={styles.str}><Entypo name="star" size={25} color='white'/>4.4</Text>
            <Text style={styles.time} >5:10</Text>
            <View style={styles.bgplay} >
              <Fontisto name="play" style={styles.play} />
            </View>
          </View>

          <View style={styles.end}>
            <Text style={styles.text}>How to make fish at home</Text>
            <Entypo name="dots-three-horizontal" size={24} color="black" />
          </View>

          <View style={styles.user}>
            <Image
              source={{
                uri: "https://i.pinimg.com/originals/39/73/69/39736983ce547825d986a456aa73cfe7.jpg",
              }}
              style={styles.userImg}
            />
            <Text style={styles.textUser}>By Carlos Fonseca</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    marginLeft: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  carrucel: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  All: {
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 4,
    fontSize: 20,
    paddingVertical: 5,
    paddingHorizontal: 20,
    color: "#E23E3E",
  },
  reseta: {
    marginRight: 20,
  },
  bgplay: {
    borderRadius:50,
    padding:23,
    backgroundColor: 'rgba(25, 20, 20, 0.5)',
    position: "absolute",
    left: 115,
    top: 60,
  },
  bgfavorite: {
    borderRadius:50,
    backgroundColor: 'rgb(250,250,250)',
    position: "absolute",
    left: 255,
    top: 10,
  },
  play: {
    fontSize: 20,
    color: "white",
  },
  favorite: {    
    paddingVertical:10,
    paddingHorizontal:15,
    fontSize: 20,
    color: "black",
  },
  str: {
    fontSize:20,
    color:'white',
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: 'rgba(25,25,20,0.5)',
    width: "20%",
    filter:0,
    borderRadius: 8,
    padding:2,
    position: 'absolute',
    left: 10,
    top: 10
  },
  time: {
    fontSize:20,
    color:'white',
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: 'rgba(20, 20, 20,0.4)',
    borderRadius: 8,
    paddingVertical:2,
    paddingHorizontal:10,
    position: 'absolute',
    left: 240,
    top: 160
  },
  end: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 20,
  },

  img: {
    width: 300,
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
