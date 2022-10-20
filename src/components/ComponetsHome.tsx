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
          <Entypo name="star" style={styles.str} />
            <Image
              source={{
                uri: "https://assets.unileversolutions.com/recipes-v2/231719.jpg",
              }}
              style={styles.img}
            />
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
    padding:20,
    backgroundColor: 'rgba(12, 12, 12, 0.5)',
    position: "absolute",
    left: 115,
    top: 60,
  },
  play: {
    fontSize: 25,
    color: "white",
  },
  str: {
    fontSize:50,
    color:'black',
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    width: "30%",
    borderRadius: 15,
    position: 'absolute',
    left: 20,
    top: 20
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
