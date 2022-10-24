import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
  } from "react-native";
  import { Feather, Entypo, Fontisto } from "@expo/vector-icons";
  
  
  export default function ResientesHome() {
    return (
      <View style={styles.row}>
        <View style={styles.carrucel}>
          <Text style={styles.title}>Resientes</Text>
          <TouchableOpacity>
            <Text style={styles.All}>
              See all <Feather name="arrow-right" size={24} />
            </Text>
          </TouchableOpacity>
          {/*  */}
        </View>
        <ScrollView horizontal={true}>
          <View style={styles.reseta}>
            <View>
              <Image
                source={{
                  uri: "https://www.tastingtable.com/img/gallery/heres-how-hamburgers-got-their-name/l-intro-1653066580.jpg",
                }}
                style={styles.img}
              />
            </View>
            <View style={styles.end}>
              <Text style={styles.text}>Indonesian </Text>
              <Text style={styles.text}>chiken burger</Text>
              <Text style={styles.textBy}>By Adriana Curl</Text>
            </View>
          </View>
          {/*  */}
          <View style={styles.reseta}>
            <View>
              <Image
                source={{
                  uri: "https://www.ilovecakes.fr/wp-content/uploads/2011/08/pancakes-ultimes-ilovecakes.jpg",
                }}
                style={styles.img}
              />
            </View>
            <View style={styles.end}>
              <Text style={styles.text}>Home made </Text>
              <Text style={styles.text}>cute pancake</Text>
              <Text style={styles.textBy}>By James Wolden</Text>
            </View>
          </View>
          {/*  */}
          <View style={styles.reseta}>
            <View>
              <Image
                source={{
                  uri: "https://static.diabetesfoodhub.org/system/thumbs/system/images/recipes/1753-espanol-diabetic-paella-quinua-mariscos_latin-comfort-foods_013019_3885281428.jpg",
                }}
                style={styles.img}
              />
            </View>
            <View style={styles.end}>
              <Text style={styles.text}>Home made </Text>
              <Text style={styles.text}>seafood fried </Text>
              <Text style={styles.textBy}>By Roberta</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    row: {
        marginTop:20,
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
    end: {
      margin: 10,
      justifyContent: "space-between",
    },
    text: {
      fontSize: 20,
    },
    textBy: {
      fontSize: 15,
      color:'#AAAAAA',
    },
  
    img: {
      width: 180,
      height: 200,
      borderRadius: 10,
    },
  });
  