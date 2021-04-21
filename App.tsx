import  React,{useEffect,Component} from 'react';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import  {FetchCategories}  from './FetchCategories';
// import  {FetchCatProd}  from './FetchCatProd';
import Login from './src/screens/Login/Login';
import Register from './src/screens/Register/Register';
import { Categories } from './src/screens/Categories';
import Products from './src/screens/Product/Products';
import Homescreen from './src/screens/Home/Homescreen';
import Tabs from './src/screens/Tabs';
import FlashMessage from "react-native-flash-message";
//implementing saga
import store from "./src/redux/store"
import { Provider } from 'react-redux';

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

function AppNav() {
  console.disableYellowBox = true;
  setTimeout(function(){ SplashScreen.hide()}, 15);
  return (
    
    <Provider store={store}>
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
    <FlashMessage position="top" />
    </Provider>
      
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