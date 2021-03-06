
// export default AppHeader;
import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Header from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux'

const bars = <Icon name={'menu'} color={'black'} size={30} />;
const cart = <Icon name={'shopping-cart'} color={'red'} size={30} />;

const appHeader = () => {
    const count=useSelector(state => state.productReducer.Counter)
  
    return (
        
        
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                {/* {bars}
                */}
                <Image
                    source={require("./logos.png")}
                        style={{ width: 110, height: 40, marginLeft: 10 }}
                        
                    />
                
                
            </View>
            <View style={styles.rightContainer}>
                {cart}
              
                    <Text>{count} items</Text>
               
            </View>
        </View>
       
    )
}

export default appHeader

const styles = StyleSheet.create({
    container: {
        // flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    leftContainer: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        paddingLeft: 8,
        backgroundColor: 'white',
    },

    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100%',
        // padding: 20,
        backgroundColor: '#eeee',
    },
});
