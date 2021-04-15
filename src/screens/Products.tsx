import React from 'react';
import {  StyleSheet, Text, View,ScrollView ,TouchableOpacity} from 'react-native';
import Picker from '../components/picker';
import Header from '../screens/Home/header';
// import fonts from '../constants/fonts'
import Fetch from './fetch'
export default function Products({navigation}) {
  return (
    <View style={styles.main}>
      <ScrollView >
        <TouchableOpacity onPress={() => navigation.navigate('Homescreen')}>
          <Header />
          </TouchableOpacity>
      <Picker />
      <Fetch />
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
