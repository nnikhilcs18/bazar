import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Picker from '../../components/picker';
import Header from '../Home/header';
// import fonts from '../constants/fonts'
import styles from './ProductStyles'
import FetchProducts from './FetchProducts'

const urlProduct = 'http://10.0.2.2:4000/products'
export default function Products({ navigation }) {
  return (
    <View style={styles.main}>
      <ScrollView >
        <TouchableOpacity onPress={() => navigation.navigate('Homescreen')}>
          <Header />
        </TouchableOpacity>
        <Picker />
        <FetchProducts />
      </ScrollView>
    </View>
  );
}



