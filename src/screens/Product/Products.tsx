import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Picker from '../../components/picker';
import Header from '../Home/header';
// import fonts from '../constants/fonts'
import FetchProducts from './FetchProducts'
import FlashMessage from "react-native-flash-message";
const urlProduct = 'http://10.0.2.2:4000/products'
export default function Products({ navigation }) {
  // const [data, setData] = useState([])
  // const { itemId } = (route.params)? route.params : data;
  // useEffect(() => {

  //   fetch(urlProduct).then(response => response.json())
  //     .then(json => {
  //       setData(json)
  //     })
  //     .catch((error) => { console.error(error); })

  // }, [])
  // console.log("category selected",JSON.stringify(itemId));
  return (
    <View style={styles.main}>
      <ScrollView >
        <TouchableOpacity onPress={() => navigation.navigate('Homescreen')}>
          <Header />
        </TouchableOpacity>
        <Picker />
        <FetchProducts />
      </ScrollView>
      <FlashMessage position="top" />




    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'flex-start',
  },

});

