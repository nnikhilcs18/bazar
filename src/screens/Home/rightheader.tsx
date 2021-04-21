import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Header from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux'


const cart = <Icon name={'shopping-cart'} color={'red'} size={30} />;

const RightHeader = () => {
    const count = useSelector(state => state.productReducer.itemCount)

    return (


       
            
            <View style={styles.rightContainer}>
                {cart}

                <Text>{count} items</Text>

            </View>
        

    )
}

export default RightHeader

const styles = StyleSheet.create({
    

  

    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100%',
        // padding: 20,
        backgroundColor: '#eeee',
        marginRight:0
    },
});
