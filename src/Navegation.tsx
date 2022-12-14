import Rect from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native";

// screen
import Home from "./screen/Home";
import Perfil from "./screen/Perfil";
import perfilcomponent from "./components/perfilcomponent";
import Add from "./screen/Add";
import Guardadas from "./screen/Guardadas";
import Detalle from "./screen/Detalle";
<<<<<<< HEAD
import { AntDesign, MaterialIcons, Feather, Ionicons } from '@expo/vector-icons';
=======
import { AntDesign,MaterialCommunityIcons, Feather, Ionicons  } from '@expo/vector-icons';
>>>>>>> f52e1ea2e1afaf552a7fcf5899f7735f4ec33249

const tab = createBottomTabNavigator();
function Mytab() {
    return (
        <tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarLabel: '',
                tabBarActiveTintColor: '#E23E3E',
                tabBarStyle: { height: 60, backgroundColor: '#F1F1F1', },
            }}
        >
            <tab.Screen
<<<<<<< HEAD
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="home" size={26} color={color} />
                    ),
                    headerShown: false
                }}
=======
             name="Home" 
             component={Home}
             options={{
                tabBarIcon: ({color}) => (
                    <AntDesign name="home" size={26} color={color} />
                ),
                headerShown: false
             }}
             />
            <tab.Screen 
            name="Detalle" 
            component={Detalle}
            options={{
                tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name="book-outline" size={26} color={color} />
                ),
                headerShown: false
             }}
>>>>>>> f52e1ea2e1afaf552a7fcf5899f7735f4ec33249
            />
            <tab.Screen
                name="Detalle"
                component={Detalle}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="description" size={26} color={color} />
                    ),
                    headerShown: false
                }}
            />
            <tab.Screen
                name="add"
                component={Add}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="add-circle-sharp" style={{ fontSize: 40 }} color="#E23E3E" />
                    ),
                    headerShown: false
                }}
            />
            <tab.Screen
                name="Guardadas"
                component={Guardadas}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="bell" size={24} color={color} />
                    ),
                    headerShown: false
                }}
            />
            <tab.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="user" size={26} color={color} />
                    ),
                    headerShown: false
                }}
            />
        </tab.Navigator>
    )
}

export default function Navegations() {
    return (
        <NavigationContainer>
            <Mytab />
        </NavigationContainer>
    )
}