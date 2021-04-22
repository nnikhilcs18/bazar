import React, { Component } from 'react';
import { View, Linking, Platform, TouchableOpacity} from 'react-native';
import openMap from 'react-native-open-maps';
import { Text, StyleSheet,ScrollView } from 'react-native';
import { createOpenLink } from 'react-native-open-maps';
import {Button} from 'react-native-elements'
import { color } from 'react-native-reanimated';

import Icon from 'react-native-vector-icons/MaterialIcons';
const phone = <Icon name={'phone'} color={'red'} size={20} />;
const loc = <Icon name={'location-pin'} color={'red'} size={20} />;
const time = <Icon name={'access-time'} color={'red'} size={20} />;


  const  Store= ()=>{
     const goToDelhi=() =>{
         openMap({ latitude: 28.5425, longitude: 77.1561 });
    }
    const goToBangalore=() =>{
        openMap({ latitude: 13.004340, longitude: 77.616490 });
    }
    const goToMumbai=()   =>{
        openMap({ latitude: 19.101400, longitude: 72.912132 });
    }
    const goToKolkata=() => {
        openMap({ latitude: 34.602400, longitude: -98.391770 });
      }
     
      

    
        return (
            <>
             
                <View style={styles.container}>
                    <Text style={styles.heading}>SabkaBazzar Stores in India</Text>
                    <View style={styles.citylist}>
                       
                        <View style={styles.city}>
                            <View style={styles.txt}>
                                <Text
                                    style={ styles.txtcity}>Delhi</Text>
                                <Text>{loc}- DLF Promenade </Text>
                                <Text>3 Nelson Mandela Road, Vasant Kunj Malls, New Delhi, Delhi 110070</Text>
                                
                                <View>
                                    <TouchableOpacity onPress={()=> Linking.openURL('tel:${1234567890}')} activeOpacity={0.7}  >
                                       
                                        <Text>{phone}-1234567890</Text>
                                    </TouchableOpacity></View>
                                <Text>{time}- Open:(9am-11pm)(Mon. to Sat.)</Text>
                                
                            </View>
                            <View style={styles.btn}>
                            <Button
                                buttonStyle={styles.mapbtn}
                                onPress={goToDelhi}
                                title="Show in map "
                                />
                            </View>
                              
                        </View>
                        <View style={styles.city}>
                            <View style={styles.txt}>
                                <Text
                                    style={styles.txtcity}>Mumbai</Text>
                                <Text>{loc}-Oberoi mall</Text>
                                <Text>Oberoi Garden City, Goregaon (East), Mumbai, Maharashtra 400063</Text>
                                
                                <View>
                                    <TouchableOpacity onPress={() => Linking.openURL('tel:${1234567890}')} activeOpacity={0.7}  >
                                        <Text>{phone}-1234567890</Text>
                                       
                                    </TouchableOpacity>
                                    <Text>{time}- Open:(9am-11pm)(Mon. to Sat.)</Text></View>
                            </View>
                            <View style={styles.btn}>
                                <Button
                                    buttonStyle={styles.mapbtn}
                                    onPress={goToMumbai}
                                    title="Show in map "
                                />
                            </View>

                        </View>
                        <View style={styles.city}>
                            <View style={styles.txt}>
                                <Text
                                    style={styles.txtcity}>Kolkata</Text>
                                <Text>{loc}-Central mall</Text>
                                <Text>Street Number 95, Action Area 1B, New Town, Kolkata, West Bengal 700156</Text>
                                
                                <View>
                                    <TouchableOpacity onPress={() => Linking.openURL('tel:${1234567890}')} activeOpacity={0.7}  >

                                        <Text>{phone}-1234567890</Text>
                                    </TouchableOpacity>
                                    <Text>{time}- Open:(9am-11pm)(Mon. to Sat.)</Text></View>
                            </View>
                            <View style={styles.btn}>
                                <Button
                                    buttonStyle={styles.mapbtn}
                                    onPress={goToKolkata}
                                    title="Show in map "
                                />
                            </View>

                        </View>
                        <View style={styles.city}>
                            <View style={styles.txt}>
                                <Text
                                    style={styles.txtcity}>Bangalore</Text>
                                <Text>{loc}-Esteem Mall</Text>
                                <Text>No 127 & 128, Hebbal Village, Kasaba Hobli, Karnataka 560024</Text>
                               
                                <View style={styles.phonetxt}>
                                    <TouchableOpacity onPress={() => Linking.openURL('tel:${1234567890}')} activeOpacity={0.7}  >

                                        <Text>{phone}-1234567890</Text>
                                       
                                    </TouchableOpacity>
                                    </View><Text>{time}- Open:(9am-11pm)(Mon. to Sat.)</Text>
                                
                            </View>
                            <View style={styles.btn}>
                                <Button
                                    buttonStyle={styles.mapbtn}
                                    onPress={goToBangalore}
                                    title="Show in map "
                                />
                            </View>

                        </View>
                        
                        
                       
                       
                    </View>
                    </View>
                    
                
            </>
        );
}
export default Store;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    heading: {
        flex: 0.7,
        backgroundColor: '#bf2957',
        color: 'white',
        fontSize: 25,
        paddingTop: 15,
        paddingLeft:20
       
        
    },
    citylist: {
        flex: 8,
        margin: 5,
        padding:5
        
      
        
    },
    txt: {
        flex: 4,
        paddingLeft: 20
       
    },
    btn: {
        flex: 2,
      
    },
    city: {
        flex: 1.5,
        marginTop: 8,
       borderWidth:1,
        borderColor: '#bf2957',
        flexDirection: 'row'
        
    },
    mapbtn: {
        width: '90%',
        marginTop:25
        
    },
    txtcity: {
       fontSize:18
    },
    phonetxt: {
        flexDirection:'row'
    }
})
