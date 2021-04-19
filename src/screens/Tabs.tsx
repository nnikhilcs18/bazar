import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './Login/Login';
import { Categories } from './Categories';
import Products from './Product/Products';
import Homescreen from './Home/Homescreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Cart from './cart';
import Register from './Register/Register';
import Store from './store';
import HomeIcon from '@material-ui/icons/Home';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const user = <Icon name={'person'} color={'white'} size={30} />;
const Home = <Icon name={'home'} color={'white'} size={30} />;
const listitem = <Icon name={'list'} color={'white'} size={30} />;
const item = <Icon name={'category'} color={'white'} size={30} />;
const shopcart = <Icon name={'shopping-cart'} color={'white'} size={30} />;
const Stack = createStackNavigator();
const Tabs = () => {
    return (
        
        <Tab.Navigator
            tabBarOptions={{
                showLabel:false,
                style: {
                    backgroundColor: '#bf2957',
                    
               }
           }}>
         
            <Tab.Screen name="Homescreen" component={Homescreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            {Home}
                            
                            <Text style={{color:'white'}}>Home</Text>
                           
                        </View>
           
        )
               }} />
            <Tab.Screen name="Categories" component={Categories}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            {item}

                            <Text style={{ color: 'white',paddingLeft:0 }}>Categories</Text>

                        </View>

                    )
                }}/>
            <Tab.Screen name="Products" component={Products}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            {listitem}

                            <Text style={{ color: 'white' }}>Products</Text>

                        </View>

                    )
                }}/>
           
            <Tab.Screen name="Login" component={Login}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            {user}

                            <Text style={{ color: 'white' }}>User</Text>

                        </View>

                    )
                }} />
            <Tab.Screen name="Cart" component={Cart}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            {shopcart}

                            <Text style={{ color: 'white' }}>Cart</Text>

                        </View>

                    )
                }} />
            

        </Tab.Navigator>
    );
}
function Appbar() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Homescreen" component={Tabs} />
            <Stack.Screen name="Store" component={Store} />
           
        </Stack.Navigator>
    );
}
export default Appbar;