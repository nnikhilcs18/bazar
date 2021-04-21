
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
 EmptyCart,
 EmptyCartText,
 EmptyCartTextSub,
 CheckOutView,
 CheckOutText,
 InnerText,
 Text1,
} from '../constants/constantFile'
import {Button, Text, View, FlatList, Image} from 'react-native';
import { decrement, increment } from '../redux/actions/actions';
 
const Cart = () => {
 const cartItems = useSelector((state) => state);
 const billedAmount = useSelector((state)=> state);
 console.log("count",cartItems.productReducer.cartItems)
 const dispatch = useDispatch()
 
 console.log("cart items: //-2.Om.-", cartItems)
 if(cartItems.productReducer.cartItems.length)
 {
  return (
    <Main accessible={true}>
    <TextView accessible={true}>
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
    <ItemsBar accessible={true}>
    <ImageCart
    source={{
    uri: item.image
    }}
    />
    <ContainerCart accessible={true}>
    <ItemHeading numberOfLines={3}>{item.productName}</ItemHeading>
    <Increments accessible={true}>
     
    <ButtonCart Press={() => dispatch(decrement(item))} title="-" />
   
    <OutputView accessible={true}>
     <OutputText>{item.quantity}</OutputText>
     <OutputText>Rs.{item.price}</OutputText>
    </OutputView>
    
   
    <ButtonCart Press={() => dispatch(increment(item))} title="+" />
    </Increments>
    </ContainerCart>
    </ItemsBar>
    );
    }}
    />
    <CheckOutView>
    <CheckOutText>Promo code can be applied on payment page</CheckOutText>
    <CheckOutButton accessible={true}
     accessibilityLabel="Tap me! to check out" >
       <InnerText style={{justifyContent:"space-around"}}>
         <Text1>Proceed to checkout</Text1> 
      <Text1>
      {billedAmount.productReducer.billAmount}.Rs >
      </Text1>
      </InnerText>
      </CheckOutButton>
     </CheckOutView>
    </Main>
    );

 }
else{
  return(
  <EmptyCart accessible={true}>
    <EmptyCartText>No items in your cart</EmptyCartText>
    <EmptyCartTextSub>Your favourite items are just a click away</EmptyCartTextSub>
  </EmptyCart>
  );
}
 
 
};
 
export default Cart;