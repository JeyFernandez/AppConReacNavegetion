import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
  } from "react-native";
  import { Feather, Entypo, Fontisto } from "@expo/vector-icons";
  
  
  export default function CreadoresPopulares() {
    return (
      <View style={styles.row}>
        <View style={styles.carrucel}>
          <Text style={styles.title}>Creadores Populares</Text>
          <TouchableOpacity>
            <Text style={styles.All}>
              See all <Feather name="arrow-right" size={24} />
            </Text>
          </TouchableOpacity>
          {/*  */}
        </View>
        <ScrollView horizontal={true}>
          <View style={styles.creadores}>
          <Image
                source={{
                  uri: "https://p1.pxfuel.com/preview/129/82/484/stylish-boy-fashion-man-s-fashion-blurry-background-royalty-free-thumbnail.jpg",
                }}
                style={styles.img}
              />
            <Text style={styles.text}>Troyan</Text>
              <Text style={styles.text}>Smith</Text>
          </View>
          {/*  */}
          <View style={styles.creadores}>
          <Image
                source={{
                  uri: "https://st2.depositphotos.com/1008939/10985/i/600/depositphotos_109850280-stock-photo-handsome-man-in-profile.jpg",
                }}
                style={styles.img}
              />
              <Text style={styles.text}>James</Text>
              <Text style={styles.text}>Wolden</Text>
          </View>
          {/*  */}
          <View style={styles.creadores}>
          <Image
                source={{
                  uri: "https://concepto.de/wp-content/uploads/2014/03/modelo-e1551453273683.jpg",
                }}
                style={styles.img}
              />
            <Text style={styles.text}>Niki</Text>
              <Text style={styles.text}>Samanta</Text>
          </View>
          {/*  */}
          <View style={styles.creadores}>
          <Image
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShTsB8mvNkg3GXS7x3vo9b4NTsIymiEGBr7SeroIuUzbLvjUnANyKM1UpbygA2jOXRJcI&usqp=CAU",
                }}
                style={styles.img}
              />
              <Text style={styles.text}>Roberta</Text>
              <Text style={styles.text}>Any</Text>
          </View>
          {/*  */}
          
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
    creadores: {
      marginRight: 20,
      alignItems:'center',
    },
    text: {
      fontSize: 18,
    },
  
    img: {
      width: 80,
      height: 80,
      borderRadius: 100,
    },
  });
  