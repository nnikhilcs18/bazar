import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
<<<<<<< HEAD
import Login from './src/screens/Login';
import Register from './src/screens/Register';
=======
import { createDrawerNavigator } from '@react-navigation/drawer';
// import  {FetchCategories}  from './FetchCategories';
// import  {FetchCatProd}  from './FetchCatProd';
import Login from './src/screens/Login/Login';
import Register from './src/screens/Register/Register';
>>>>>>> 23ffb502a08c779d8fdf399ca012ed32ffc3a6a9
import { Categories } from './src/screens/Categories';
import Products from './src/screens/Products';
import Homescreen from './src/screens/Home/Homescreen';
import Tabs from './src/screens/Tabs';

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

function AppNav() {
  console.disableYellowBox = true;
  return (
    <NavigationContainer>
      <Tabs />
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
{/* <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="Login">
        <Stack.Screen name="Login" component={Login}   />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Homescreen" component={Homescreen} /> */}
{/* <Stack.Screen name="AppHeader" component={AppHeader} /> */ }
{/* <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Products" component={Products} /> */}
{/* <Stack.Screen name="Cart" component={Cart} /> */ }
{/* <Stack.Screen name="FetchCatProd" component={FetchCatProd} />
        <Stack.Screen name="FetchCategories" component={FetchCategories} /> */}
{/* </Stack.Navigator> */ }
    // </NavigationContainer>