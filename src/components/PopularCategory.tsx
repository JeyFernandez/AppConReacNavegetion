import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Category from "./Category";
import perfilcomponent from '../components/Category'
function Popular() {
  return (
    <View style={{ marginLeft: 20 }}>
      <ScrollView horizontal={true}>
        <View style={{ marginTop: 20, flexDirection: "row" }}>
          <TouchableOpacity>
            <Text style={styles.stylebutton}>Salad</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.stylebuttonBg}>Breakfast</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.stylebutton}>Appetizer</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.stylebutton}>Noodle</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.stylebutton}>Lun</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View>
          <Category/>
          
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  stylebutton: {
    paddingTop: 12,
    paddingHorizontal:20,
    fontSize: 20,
    color: "#E23E3E",
  },
  stylebuttonBg: {
    paddingHorizontal:20,
    padding: 12,
    borderRadius: 10,
    fontSize: 20,
    color: "white",
    backgroundColor: "#E23E3E",
  },
});

export default Popular;
