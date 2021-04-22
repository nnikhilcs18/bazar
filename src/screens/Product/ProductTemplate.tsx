import React,{useState} from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import Buttons from '../../components/button'
// import colors from '../constants/colors'
import styles from './styles/ProductTemplateStyles'

const productTemplate =(props)=>{
    return(
        <View style={styles.productContainer} accessible={true}>
            <View accessible={true}>
                <Text accessibilityLiveRegion="polite" style={styles.label}>{props.label}</Text>
            </View >   

            <View style={styles.productItem} accessible={true}>
                <Image style={styles.image} source={props.imageSource} />
                <View style={styles.contentContainer} accessible={true}>
                    <View style={styles.content}><Text  accessibilityLiveRegion="polite" style={styles.description} accessible={true} >{props.content}</Text></View>
                    <Buttons title={props.btitle} Press={props.bPress}/>
                </View>
            </ View>                
            
        </View>
    )
}

export default productTemplate