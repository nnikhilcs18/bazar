import React,{useState} from 'react';
import {Image, View, Text, StyleSheet, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';
// import colors from '../constants/colors';

const picker=()=>{

    const [selectedLanguage, setSelectedLanguage] = useState();

    return(
        <View style={styles.container}>
            <View style={styles.pick}>
            <Picker
            style={styles.picker}
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
            }>
            <Picker.Item value="Fruits" label="Fruits & Vegetables" />
            <Picker.Item value="Cakes" label="Bakery, Cakes and Dairy" />
            <Picker.Item value="erages" label="Beverages" />
            <Picker.Item value="Beauty" label="Beauty and Hygiene" />
            <Picker.Item value="Baby" label="Baby Care" />
     
            </Picker>
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,      
      alignItems: 'center',
      justifyContent: 'flex-start',
      
    },
    pick:{
        backgroundColor:"#bf2957",
        paddingLeft:25,
        height:55,
     

    },
    picker:{        
        height:45,
        width:380,        
        padding:20,
        color:"white",
        fontSize:85,
    }
  });

export default picker