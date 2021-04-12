import React,{useState} from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import Buttons from '../components/button'
// import colors from '../constants/colors'
const plp =(props)=>{
    

    
    return(
        <View style={styles.productContainer}>
            <View>
                <Text style={styles.label}>{props.label}</Text>
            </View>   

            <View style={styles.productItem}>
                <Image style={styles.image} source={props.imageSource} />
                <View style={styles.contentContainer}>
                    <View style={styles.content}><Text style={{flexWrap:'wrap'}}>{props.content}</Text></View>
                    <Buttons title={props.btitle} Press={props.bPress}/>
                </View>
            </ View>                
            
        </View>
    )
}
const styles= StyleSheet.create({
    productContainer:{       
        flex: 1,   
        flexDirection:'column',   
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        borderStyle:'dotted',
        borderBottomWidth:1,
        padding:10,
        marginBottom:10,
       
    },
    productItem:{
        width:'100%',
        flex:1,
        alignContent:'flex-end',
        flexDirection:'row',
       
    },
    image:{
        height:170,
        width:170, 
        
    },
    contentContainer:{
        marginLeft:15,
        marginRight:15,
        justifyContent:'space-between',
       
    },
    label:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10,
    },
    content:{
       width:200,
       marginBottom:10,
       height:100
    }

})

export default plp