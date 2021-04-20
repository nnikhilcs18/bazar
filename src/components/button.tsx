import React,{useState} from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
// import colors from '../constants/colors'


const button = (props)=>{
    return(
            <TouchableOpacity 
            accessible={true}
            accessibilityLabel="Tap me!"
            accessibilityHint="Cart action will be performed"
            accessibilityRole="button"
            onPress={props.Press} style={styles.btn}>
                <Text accessibilityLiveRegion="polite" style={styles.btnText}>{props.title}</Text>
            </TouchableOpacity>
        )
}
const styles=StyleSheet.create({
    btn:{
        backgroundColor:"#bf2957",
        height:45,        
        padding:10,

    },
    btnText:{
        color:"white",
        alignSelf:'center',
    },
})

export default button