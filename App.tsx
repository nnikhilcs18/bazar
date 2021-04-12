import  React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import  {FetchCategories}  from './FetchCategories';
// import  {FetchCatProd}  from './FetchCatProd';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import { Categories } from './src/screens/Categories';
import Products from './src/screens/Products';



const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

function AppNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Products" component={Products} />
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