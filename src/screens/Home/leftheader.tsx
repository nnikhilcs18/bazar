import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Header from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux'




const LeftHeader = () => {
 const count = useSelector(state => state.productReducer.itemcounter)

    return (


        
            <View style={styles.leftContainer}>
                
                <Image
                    source={require("./logos.png")}
                    style={{ width: 110, height: 40, marginLeft: 10 }}

                />


            </View>
            
       

    )
}

export default LeftHeader

const styles = StyleSheet.create({
   

    leftContainer: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        paddingLeft: 8,
        backgroundColor: 'white',
        marginLeft:0
    },

   
});
