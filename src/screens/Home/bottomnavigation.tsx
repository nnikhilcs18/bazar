import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Products from '../Products';
import { Categories } from '../Categories';
import Homescreen from './Homescreen';

const Tab = createMaterialBottomTabNavigator();

 export function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Login"
            activeColor="#e91e63"
            barStyle={{ backgroundColor: 'tomato' }}
        >
            <Tab.Screen
                name="Home"
                component={Homescreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Categories"
                component={Categories}
                options={{
                    tabBarLabel: 'Categories',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Products"
                component={Products}
                options={{
                    tabBarLabel: 'Products',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
