import React, { useState, useEffect } from 'react';
import Header from '../screens/Home/header';
import ButtonCart from '../components/button';
import LeftHeader from './Home/leftheader';
import RightHeader from './Home/rightheader'
import {
  ItemsSubscript,
  ImageCart,
  ContainerCart,
  TopBar,
  Main,
  TextView,
  Increments,
  ItemsBar,
  ItemHeading,
  CheckOutButton,
  Url
} from '../constants/constantFile'
import {Button, Text, View, FlatList, Image,TouchableOpacity,StyleSheet} from 'react-native';

const Cart = ({ navigation }) => {
  const [quantity, setQuantity] = useState(1);
  const incrementFunc = () => {
    setQuantity(quantity + 1);
  };
  const decrementFunc = () => {
    if (quantity === 0) {
      setQuantity(0);
      return;
    }

    setQuantity(quantity - 1);
  };
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      const newData = await fetch(`${Url}`); //change to a global function
      const newDataJson = await newData.json();
      setData(newDataJson);
      console.log(data);
    };

    fetchCategories();
  }, []);

  return (
    <Main styles={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Homescreen')} ><LeftHeader /></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}><RightHeader /></TouchableOpacity>
      </View>
      <View style={styles.content}>
      <TextView>
       
        
        <TopBar>
          My Cart ({data.length} <ItemsSubscript>items</ItemsSubscript> )
        </TopBar>
      </TextView>
      <FlatList
        horizontal={false}
        //keyExtractor={data => data.key}
        data={data}
        renderItem={({ item }) => {
          console.log ('cart is working')
          return (
            <ItemsBar>
              <ImageCart
                source={{
                  uri: item.ImageURL
                }}
              />
              <ContainerCart>
                <ItemHeading numberOfLines={2}>{item.ProductName}</ItemHeading>
                <Increments>
                  <ButtonCart Press={() => incrementFunc()} title="+" />
                  <Text>{quantity}</Text>
                  <ButtonCart Press={() => decrementFunc()} title="-" />
                </Increments>
              </ContainerCart>
            </ItemsBar>
          );
        }}
      />
        <CheckOutButton onPress={() => navigation.navigate('Store')}
          title="Checkout" color="#bf2957" />
      </View>
    </Main>
  );
};
export default Cart;
const styles = StyleSheet.create({
  container: {
   flex:1
  },
  header:{
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 5
  },
  content: {
    flex: 8,
    flexDirection: 'column'
  }

})

