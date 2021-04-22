
import React, {useState, useEffect} from 'react';
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
 ButtonCart,
} from '../constants/constantFile'
import {Button, Text, View, FlatList, Image} from 'react-native';
import { decrement, increment } from '../redux/actions/actions';
 
const Cart = () => {
 const cartItems = useSelector((state) => state);
 const billedAmount = useSelector((state)=> state);
 const dispatch = useDispatch()
 if(cartItems.productReducer.cartItems.length)
 {
  return (
    <Main accessible={true}>
    <TextView accessible={true}>
    <TopBar>
    My Cart  <ItemsSubscript>({cartItems.productReducer.cartItems.length} items)</ItemsSubscript> 
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
     <View style={{width:'15%'}}>
    <ButtonCart  accessible={true} accessibilityLabel="Press to decrement!" color="#bf2957" onPress={() => dispatch(decrement(item))} title="-" />
    </View>
   
    <OutputView accessible={true}>
     <OutputText>{item.productQuantity}</OutputText>
    </OutputView>
    
    <View style={{width:'15%'}}>
    <ButtonCart   accessible={true} accessibilityLabel="Press to increment" color="#bf2957" onPress={() => dispatch(increment(item))} title="+" />
    </View>
    <OutputText> X Rs.{item.price}</OutputText>
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
      {billedAmount.productReducer.billAmount}.Rs 
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