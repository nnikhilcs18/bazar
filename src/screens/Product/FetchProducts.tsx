import React, { useState,useEffect } from 'react';
import {Image, View, FlatList, Text, StyleSheet, SafeAreaView, ActivityIndicator, TouchableOpacity} from 'react-native';
import ProductTemplate from './ProductTemplate'
import { showMessage, hideMessage } from "react-native-flash-message";
import { Print } from '@material-ui/icons';
import { useSelector, useDispatch } from 'react-redux'
import { addProduct } from '../../redux/reducer/product'

const urlProduct='http://10.0.2.2:4000/products'
const urlCart='http://10.0.2.2:4000/addToCart'
const FetchProducts =()=> {
    
    const productsSelected = useSelector(state => state.productReducer)
    // console.log("PRODUCT STATE",productsSelected)
    
    const dispatch = useDispatch()
    const [data,setData]=useState([])

    const postProduct = (id, imageURL, name, price) => {

    // console.log("hello we are inside post Product")
 
    const productDetails = {
      ID: id,
      image: imageURL,
      ProductName: name,
      Price: price,
    }
    fetch(urlCart, {
      method: 'POST',
      body: JSON.stringify(productDetails),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.text())
      .then(() => {
        
        showMessage({
          message: "Product addedd successfully to the Cart",
          type: "success",
        });
        
        
      })
      .catch((error) => { console.error(error); })
      .catch(() => { console.log('error'); })
    dispatch(addProduct(id))
  }
   

    useEffect(() => {

        fetch(urlProduct).then(response => response.json())    
          .then(json => {
            setData(json)
           
          })
          .catch((error) =>{console.error(error);})
    
    }, [])
<<<<<<< HEAD:src/screens/FetchProducts.tsx
    

 
  return (
    
       <FlatList
=======
        
    return (
         
            <FlatList
>>>>>>> 8b608c8251c888c5497de860e617b5127c8362ae:src/screens/Product/FetchProducts.tsx
                data={data}
                keyExtractor={item => `productItem${item.id.toString()}`}
                renderItem={({item})=>{
                    let imageURL=`https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static${item.imageURL}`
                    return(
                        <ProductTemplate label={`${item.name}`}
                        imageSource={{uri:imageURL}}
                        content={`${item.description}`}
                        btitle={`Buy Now @ Rs. ${item.price}`}
                        bPress={() =>postProduct(item.id,imageURL,item.name,item.price) }/> 
                    )
                }}
      />
   
  )
  
}

export default FetchProducts;

