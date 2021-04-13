import React, {useState, useEffect} from 'react';
import ButtonCart from '../components/button'
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
import {Button, Text, View, FlatList, Image} from 'react-native';

const Cart = () => {
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
    <Main>
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
                <ItemHeading>{item.ProductName}</ItemHeading>
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
      <CheckOutButton title="Checkout" color="#bf2957" />
    </Main>
  );
};
export default Cart;
