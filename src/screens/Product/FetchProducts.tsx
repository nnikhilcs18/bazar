import React, { useState, useEffect } from 'react';
import { Image, View, FlatList, Text, StyleSheet, SafeAreaView, ActivityIndicator, TouchableOpacity } from 'react-native';
import ProductTemplate from './ProductTemplate'
import { showMessage, hideMessage } from "react-native-flash-message";
import { Print } from '@material-ui/icons';
import { useSelector, useDispatch } from 'react-redux'
import { addProduct } from '../../redux/actions/actions';
import {getProduct} from '../../redux/reducer/getProduct'
import {cartURL, githubURL} from '../../constants/url'
import { buttonLabel, successMessage } from '../../constants/consoleStatements';



const FetchProducts = (props) => {

  const categorySelected = useSelector(state => state.categoryReducer.arrayCat)
  const productList = useSelector(state => state.fetchProduct.productList)
  const dispatch = useDispatch()
  interface ProductDetails{
    ID:string,
    image:string,
    productName:string,
    price:number
  }
  const postProduct = (id:string, imageURL:string, name:string, price:number) => {

    const productDetails :ProductDetails= {
      ID: id,
      image: imageURL,
      productName: name,
      price: price,
    }
    fetch(cartURL, {
      method: 'POST',
      body: JSON.stringify(productDetails),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.text())
      .then(() => {

        showMessage({
          message: successMessage,
          type: "success",
        });


      })
      .catch((error) => { console.error(error); })
      .catch(() => { console.log('error'); })
    dispatch(addProduct(productDetails))
  }


  useEffect(() => {
   dispatch(getProduct())
  }, [dispatch])

  return (

    <FlatList
      data={(categorySelected).length > 0 ? categorySelected : productList}
      keyExtractor={item => `productItem${item.id.toString()}`}
      renderItem={({ item }) => {
        let imageURL = `${githubURL}${item.imageURL}`
        return (
          <ProductTemplate label={`${item.name}`}
            imageSource={{ uri: imageURL }}
            content={`${item.description}`}
            btitle={`${buttonLabel} ${item.price}`}
            bPress={() => postProduct(item.id, imageURL, item.name, item.price)} />
        )
      }}
    />
  )
}

export default FetchProducts;

