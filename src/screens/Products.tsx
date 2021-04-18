import React from 'react';
import {  StyleSheet, Text, View,ScrollView ,TouchableOpacity} from 'react-native';
import Picker from '../components/picker';
import AppHeader from '../screens/Home/header';
// import fonts from '../constants/fonts'
import FetchProducts from './FetchProducts'
import FlashMessage from "react-native-flash-message";
export default function Products(navigation) {
  return (
    <View style={styles.main}>
      <ScrollView >
        <TouchableOpacity onPress={() => navigation.navigate('Homescreen')}>
          <AppHeader />

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
