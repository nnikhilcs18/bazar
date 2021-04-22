import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Picker from '../../components/picker';
import Header from '../Home/header';
// import fonts from '../constants/fonts'
import styles from './styles/ProductStyles'
import FetchProducts from './FetchProducts'
import LeftHeader from '../Home/leftheader';
import RightHeader from '../Home/rightheader';

export default function Products({ navigation, route }) {
  const sample = "5b68994e3d1a866534f516df";
  const catName = (route.params) ? route.params.catName : sample;
  return (
    <View style={styles.main}>
      <ScrollView >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Homescreen')} ><LeftHeader /></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}><RightHeader /></TouchableOpacity>
        </View>
        <Picker name={catName} />
        <FetchProducts />
      </ScrollView>
    </View>
  );
}



