
import React, {useState, useEffect} from 'react';
//import RootState from '../redux/store/configureStore';
import ButtonCart from '../components/button';
import {useSelector,useDispatch} from 'react-redux'
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
 Url,
 OutputText,
 OutputView,
 TotalText,
} from '../constants/constantFile'
import {Button, Text, View, FlatList, Image} from 'react-native';
import { decrement, increment } from '../redux/actions/actions';
 
const Cart = () => {
 const cartItems = useSelector((state) => state);
 console.log("count",cartItems.productReducer.cartItems)
 const dispatch = useDispatch()
 
 console.log("cart items: //-2.Om.-", cartItems)
 
 return (
 <Main>
 <TextView>
 <TopBar>
 My Cart ({cartItems.productReducer.cartItems.length} <ItemsSubscript>items</ItemsSubscript> )
 {/* //<TotalText>  Total {cartItems.counter.cartBill}</TotalText> */}
 </TopBar>
 </TextView>
 <FlatList
 horizontal={false}
 keyExtractor={data => data.ID}
 data={cartItems.productReducer.cartItems}
 renderItem={({item}) => {
 return (
 <ItemsBar>
 <ImageCart
 source={{
 uri: item.ImageURL
 }}
 />
 <ContainerCart>
 <ItemHeading numberOfLines={3}>{item.productName}</ItemHeading>
 <Increments>
  
 <ButtonCart Press={() => dispatch(increment(item))} title="+" />

 <OutputView>
  <OutputText>{item.quantity}</OutputText>
  <OutputText>Rs.{item.price}</OutputText>
 </OutputView>
 
 <ButtonCart Press={() => dispatch(decrement(item))} title="-" />
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