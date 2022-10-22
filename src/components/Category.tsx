import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { FontAwesome5, Entypo, Fontisto } from "@expo/vector-icons";

function Category() {
  return (
    <View style={styles.breackfast}>
      <View style={styles.container2}>x
        <View style={styles.circle}>
          <Image
            style={styles.breack}
            source={{
              uri: "https://cdn.immieats.com/ee52ac03-5070-4a6d-8d56-0804ae15cd3d/-/format/auto/-/quality/better/-/max_icc_size/10/-/resize/1000x/"}}
          />
        </View>
        <View style={styles.txt2}>
          <Text style={styles.txt}>Pepper aweetcorn</Text>
          <Text style={styles.txt}>ramen</Text>
        </View>
        <View>
          <Text style={styles.time}> Time</Text>
        </View>
        <View>
          <Text style={styles.time2}> 10 Mins</Text>
          <View style={styles.fevt}>
            <FontAwesome5 name="bookmark" size={20} color="gray" />
          </View>
        </View>
      </View>
{/*  */}
      <View style={styles.container2}>
        <View style={styles.circle}>
          <Image
            style={styles.breack}
            source={{
              uri: "https://cdn.immieats.com/ee52ac03-5070-4a6d-8d56-0804ae15cd3d/-/format/auto/-/quality/better/-/max_icc_size/10/-/resize/1000x/"}}
          />
        </View>
        <View style={styles.txt2}>
          <Text style={styles.txt}>Pepper aweetcorn</Text>
          <Text style={styles.txt}>ramen</Text>
        </View>
        <View>
          <Text style={styles.time}> Time</Text>
        </View>
        <View>
          <Text style={styles.time2}> 10 Mins</Text>
          <View style={styles.fevt}>
            <FontAwesome5 name="bookmark" size={20} color="gray" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  breackfast: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 30,
  },
  container2: {
    marginTop: 20,
    marginHorizontal: 10,
    backgroundColor: "#dcdcdc",
    width: 160,
    height: 180,
    borderRadius: 15,
  },
  breack: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  circle: {
    backgroundColor: "#F1F1F1",
    width: 100,
    height: 100,
    alignItems: "center",
    borderRadius: 50,
    position: "absolute",
    left: 30,
    top: -50,
    marginTop: 10,
  },
  txt2: {
    alignItems: "center",
    position: "absolute",
    left: 25,
    top: 60,
  },
  txt: {
    fontSize: 15,
    fontWeight: "bold",
    color: "gray",
  },
  time: {
    fontSize: 15,
    color: "gray",
    top: 130,
    left: 10,
  },
  time2: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
    top: 130,
    left: 10,
  },
  fevt: {
    backgroundColor: "white",
    width: "15%",
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    position: "absolute",
    right: 10,
    top: 120,
  },
});
export default Category;
