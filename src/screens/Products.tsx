import React from 'react';
import {  StyleSheet, Text, View,ScrollView } from 'react-native';
import Picker from '../components/picker';
import Header from '../screens/Home/header';
// import fonts from '../constants/fonts'
import FetchProducts from './FetchProducts'
export default function Products() {
  return (
    <View style={styles.main}>
      <ScrollView >  
      <Header/>
      <Picker />
      <FetchProducts />
      </ScrollView>


 

    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'flex-start',
  },

});
