import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { AntDesign, } from '@expo/vector-icons'



function PerfilComponets() {
    return (
        <View style={styles.container}>

            {/* PRIMERA IMAGEN */}

            <View style={styles.img1}>
                <Image
                    style={styles.IMG1}
                    source={{
                        uri: 'https://www.elfinanciero.com.mx/resizer/UqhYkIDTon-_Nb_n34YE2q-ZwLk=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/elfinanciero/Q3YMVX7DVJGIHH6SM6NTZYSATQ.jpeg',

                    }}
                />
            </View>
            <View style={styles.pardeIcons1}>
                    <Text style={styles.text1}>5,0</Text>
                    <View style={styles.iconosV}>
                        <AntDesign name="star" style={styles.icon2} />
                    </View>

                    <View style={styles.iconosV1}>
                        <Text style={styles.text2}>...</Text>
                        <Text style={styles.text3}>How to make Italian Spaghetty al home</Text>
                        <Text style={styles.text4}>12 Ingredients | 40 Min</Text>
                    </View>

                </View>
            {/* SEGUNDA IMAGEN */}

            <View style={styles.img1}>
                <Image
                    style={styles.IMG1}
                    source={{
                        uri: 'https://peru.info/Portals/0/Images/Productos/6/211-imagen-111538112021.jpg',

                    }}
                />
            </View>
            <View style={styles.pardeIcons3}>
                <View style={styles.pardeIcons1}>
                    <Text style={styles.text1}>4,7</Text>
                    <View style={styles.iconosV}>
                        <AntDesign name="star" style={styles.icon2} />
                    </View>

                    <View style={styles.iconosV1}>
                        <Text style={styles.text2}>...</Text>
                        <Text style={styles.text3}>Simple chiken meal prep dishes</Text>
                        <Text style={styles.text4}>12 Ingredients | 40 Min</Text>
                    </View>

                </View>
            </View>
            {/*     TERCERA IMAGEN */}

            <View style={styles.img1}>
                <Image
                    style={styles.IMG1}
                    source={{
                        uri: 'https://elavegan.com/wp-content/uploads/2020/10/Japanese-garlic-fried-rice-with-veggies-on-plate.jpg',

                    }}
                />
            </View>
            <View style={styles.pardeIcons2}>
                <View style={styles.pardeIcons1}>
                    <Text style={styles.text1}>4,7</Text>
                    <View style={styles.iconosV}>
                        <AntDesign name="star" style={styles.icon2} />
                    </View>
                    <View style={styles.iconosV1}>
                        <Text style={styles.text2}>...</Text>
                        <Text style={styles.text5}>Japanese friend rice</Text>
                        <Text style={styles.text4}>12 Ingredients | 40 Min</Text>
                    </View>
                </View>
            </View>

        </View>

    );
}

export default PerfilComponets;


const styles = StyleSheet.create({

    container: {
        paddingTop: 20,
    },

    img1: {
        paddingTop: 20,
    },

    IMG1: {
        height: 200,
        width: 300,
        borderRadius: 10,
        marginHorizontal: 20,
    },

    text1: {
        fontSize: 25,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        color: '#FFFFFF',
        position: 'absolute',
        marginTop: 30,
        marginLeft: 60,
        width: 43,
        textAlign: 'center',
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        marginRight: 10,

    },

    text2: {
        fontSize: 40,
        color: '#FF0000',
        position: 'absolute',
        marginTop: -30,
        marginLeft: 7,
    },


    text3: {
        fontSize: 20,
        color: '#Ffff',
        position: 'absolute',
        marginTop: 80,
        fontWeight: "bold",
        marginLeft: -240,
    },

    text4: {
        fontWeight: "bold",
        fontSize: 15,
        color: '#Ffff',
        marginTop: 150,
        marginLeft: -240,
    },

    text5: {
        fontSize: 20,
        color: '#Ffff',
        position: 'absolute',
        marginTop: 110,
        fontWeight: "bold",
        marginLeft: -240,
    },

    iconosV: {
        position: "absolute",
        justifyContent: "space-between",
    },

    iconosV1: {
        marginTop: 30,
        width: 40,
        paddingVertical: "10px",
        backgroundColor: '#FFFFFF',
        height: 40,
        borderRadius: 100,
        marginLeft: 270,

    },

    pardeIcons1: {
        position: "absolute",
        flexDirection: "row",
    },

    pardeIcons2: {
        position: "absolute",
        flexDirection: "row",
        marginTop: 440,
    },

    pardeIcons3: {
        position: "absolute",
        flexDirection: "row",
        marginTop: 220,
    },

    icon1: {
        fontSize: 25,
        backgroundColor: "#FFFF",
        color: "#FFFF",
        borderRadius: 5,
        marginTop: 10,
        marginLeft: 270,

    },

    icon2: {
        fontSize: 25,
        color: "#ffff",
        marginLeft: 30,
        marginTop: 30,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        width: 30,
        height: 33,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        textAlign: 'center',

    },
});