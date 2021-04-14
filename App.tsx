import  React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import  {FetchCategories}  from './FetchCategories';
// import  {FetchCatProd}  from './FetchCatProd';
import Login from './src/screens/Login/Login';
import Register from './src/screens/Register/Register';
import { Categories } from './src/screens/Categories';
import Products from './src/screens/Products';
import Homescreen from './src/screens/Home/Homescreen';
// import Cart from './src/screens/cart';

import { Header } from 'react-native/Libraries/NewAppScreen';



const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

function AppNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login}   />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Homescreen" component={Homescreen}/>
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Products" component={Products} />
        {/* <Stack.Screen name="Cart" component={Cart} /> */}
        {/* <Stack.Screen name="FetchCatProd" component={FetchCatProd} />
        <Stack.Screen name="FetchCategories" component={FetchCategories} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


// function AppNav() {
//     return (
//       <NavigationContainer>
//         <Drawer.Navigator>
//           <Drawer.Screen name="Home" component={FetchCatProd} />
//           <Drawer.Screen name="Root" component={FetchCategories} />
//         </Drawer.Navigator>
//       </NavigationContainer>
//     );
// }

export default AppNav;