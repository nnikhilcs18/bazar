import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './Login/Login';
import { Categories } from './Categories';
import Products from './Product/Products';
import Homescreen from './Home/Homescreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Cart from './cart';
import HomeIcon from '@material-ui/icons/Home';

const Tab = createBottomTabNavigator();
const user = <Icon name={'person'} color={'white'} size={30} />;
const Home = <Icon name={'home'} color={'white'} size={30} />;
const listitem = <Icon name={'list'} color={'white'} size={30} />;
const item = <Icon name={'category'} color={'white'} size={30} />;
const shopcart = <Icon name={'shopping-cart'} color={'white'} size={30} />;
const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel:false,
                style: {
                    backgroundColor:'#bf2957'
               }
           }}>
           
            <Tab.Screen name="Homescreen" component={Homescreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            {Home}
                            
                            {/* <Text >Home</Text> */}
                           
                        </View>
           
        )
               }} />
            <Tab.Screen name="Categories" component={Categories}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            {item}

                            {/* <Text >Home</Text> */}

                        </View>

                    )
                }}/>
            <Tab.Screen name="Products" component={Products}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            {listitem}

                            {/* <Text >Home</Text> */}

                        </View>

                    )
                }}/>
           
            <Tab.Screen name="Login" component={Login}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            {user}

                            {/* <Text >Home</Text> */}

                        </View>

                    )
                }} />
            <Tab.Screen name="Cart" component={Cart}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            {shopcart}

                            {/* <Text >Home</Text> */}

                        </View>

                    )
                }} />
            

        </Tab.Navigator>
    );
}
export default Tabs;