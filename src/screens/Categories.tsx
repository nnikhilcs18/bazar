import React, { useState,useEffect } from 'react';
import {Image, View, Text, StyleSheet, SafeAreaView, ActivityIndicator, TouchableOpacity} from 'react-native';
import { List } from 'react-native-paper';
import { ScrollView } from 'react-native';
import Header from '../screens/Home/header';
import Icon from 'react-native-vector-icons/FontAwesome5';

// import { createStackNavigator, createAppContainer } from 'react-navigation';
// import { NavigationContainer } from 'react-navigation-native';
import { createStackNavigator } from 'react-navigation-stack';
// const url='http://10.0.2.2/categories';
export const Categories =({ navigation })=> {
    
    // const [isLoading,setLoading]=useState(true)
    const [data,setData]=useState([]);
    const [dataProd,setProd]=useState([])
    const [showDetail, setShowDetail] = useState('null');
    
    useEffect(() => {

            fetch(`http://10.0.2.2:4000/categories`).then(response => response.json())
        
              .then(json => 
                {
                  setData(json)
                   console.log(json)
                })
              .catch((error) =>{console.error(error);})
            // fetch(`http://10.0.2.2:4000/products`).then(response => response.json())
        
            //   .then(json => 
            //     {
            //       setProd(json)
            //       console.log(json)
            //     })
            //   .catch((error) =>{console.error(error);})
        
    }, [])
    // const onPressFunction= (obj) =>{
    //     dataProd.map((prod)=>{

    //         if (prod.category===obj){
    //          console.log(prod.name);
             
    //         }
            
    //     })
        
    // }
    return (
        <View>
            <Header/>
          {/* <Image 
              style={styles.logo}
              source={require("../images/logo.png")}
           />   */}
            <View>
                <List.Section title="Categories">
                    <ScrollView>
                        {data.map((obj) =><List.Accordion
                            title={obj.name} left={() => <List.Icon  icon={obj.icon}/>}> 
                            <List.Item title={obj.name} id={obj.id} onPress={()=>navigation.navigate('Products')}/>
                            {/* {onPressFunction(obj.id)} */}
                        </List.Accordion>)}
                    </ScrollView>
                </List.Section>
            </View>
            

        </View>
    )
            
}
const styles = StyleSheet.create({
    logo:{
        alignSelf:"center",
    },
})