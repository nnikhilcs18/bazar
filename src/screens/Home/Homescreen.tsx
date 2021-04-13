import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ActivityIndicator, FlatList, ScrollView } from 'react-native';
import { Button, Image } from 'react-native-elements';
import AppHeader from './header';
import Slider from './carousel';
import MyTabs from './bottomnavigation';

import Icon from 'react-native-vector-icons/FontAwesome';
import SafeAreaAndroid from './SafeAreaAndroid';
import styles from './homestyle'
// 

import Products from '../Products';
import { Categories } from '../Categories';


// 






const Homescreen = ({ navigation }) => {
    const [data, setData] = useState([])

    useEffect(() => {

        fetch('http://10.0.2.2:4000/categories').then(response => response.json())
            .then(json => {
                setData(json)
                console.log(data)
            })
            .catch((error) => {
                console.error(error);

            })

    }, [])



    return (
        // <SafeAreaView style={SafeAreaAndroid.AndroidSafeArea}>
            <ScrollView>

                <View style={styles.container}>
                    <View style={styles.header} >
                        <AppHeader />
                    </View>

                    <View style={styles.categories} >
                        <View style={styles.categoriesList}><Slider /></View>

                        <FlatList
                            data={data}
                            renderItem={({ item }) => {



                                return (
                                    <>
                                        <View style={styles.categoriesList}>
                                            <View style={styles.caterogiesimg}>
                                                <Image
                                                    source={{ uri: `https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master${item.imageUrl}` }}
                                                    style={{ width: 100, height: 100 }}
                                                />
                                            </View>
                                            <View style={styles.categoriestxt}>
                                                <Text style={styles.title}>{item.name}</Text>
                                                <Text style={styles.para}>{item.description}</Text>
                                                <Button
                                                    buttonStyle={styles.explore}
                                                    title="explore"
                                                    onPress={() => navigation.navigate('Categories')}


                                                />
                                            </View>
                                            {/* <View><MyTabs/></View> */}
                                        </View>

                                    </>
                                )

                            }}
                        />




                    </View>

                </View>







            </ScrollView>
        // </SafeAreaView>
    );
};

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,

//     },
//     categories: { flex: 8 },
//     header: {
//         flex: 0.6,

//         // borderBottomWidth: 1,
//         // borderBottomColor: 'grey',
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,

//         elevation: 5,


//     },
//     para: {
//         fontWeight: 'normal'
//     },
//     title: {
//         fontWeight: 'bold',
//         fontSize: 15
//     },
//     categoriesList: {
//         flex: 3,
//         borderBottomColor: 'grey',
//         flexDirection: 'row',
//         // borderBottomWidth: 1,
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 1,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,

//         elevation: 5,


//     },
//     caterogiesimg: {
//         flex: 2,
//         flexDirection: 'row',
//         margin: 20

//     },
//     explore: {
//         backgroundColor: "#bf2957",
//         width: "60%",
//         marginTop: 0



//     },
//     categoriestxt: {
//         flex: 4,
//         flexDirection: 'column',

//         justifyContent: 'center'
//     },
//     footer: {
//         flex: 0.3,
//         // borderBottomWidth: 1,
//         // borderBottomColor: 'black',
//         alignItems: 'center', justifyContent: 'center', backgroundColor: '#DEDEDE'
//     },


// });



export default Homescreen;