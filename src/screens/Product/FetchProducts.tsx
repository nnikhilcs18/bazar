import React, { useState, useEffect } from 'react';
import { Image, View, FlatList, Text, StyleSheet, SafeAreaView, ActivityIndicator, TouchableOpacity } from 'react-native';
import ProductTemplate from './ProductTemplate'
import { showMessage, hideMessage } from "react-native-flash-message";
import { Print } from '@material-ui/icons';
import { useSelector, useDispatch } from 'react-redux'
import { addProduct } from '../../redux/reducer/product';

const urlProduct = 'http://10.0.2.2:4000/products'
const urlCart = 'http://10.0.2.2:4000/addToCart'
const FetchProducts = (props) => {

  const productsSelected = useSelector(state => state.productReducer)
  const categorySelected = useSelector(state => state.categoryReducer.arrayCat)
  console.log("------------------PRODUCT STATE------------------",productsSelected)

  const dispatch = useDispatch()
  const [data, setData] = useState([])
  let arrayToShow = props.categoryID;
  // console.log("category selected in arrayToShow page", arrayToShow);

  const postProduct = (id, imageURL, name, price) => {

    // console.log("hello we are inside post Product")

    const productDetails = {
      ID: id,
      image: imageURL,
      productName: name,
      price: price,
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
    dispatch(addProduct(productDetails))
  }


  useEffect(() => {

    fetch(urlProduct).then(response => response.json())
      .then(json => {
        setData(json)
        // console.log("data is", data);


      })
      .catch((error) => { console.error(error); })

  }, [])

  return (

    <FlatList
      data={(categorySelected).length > 0 ? categorySelected : data}
      keyExtractor={item => `productItem${item.id.toString()}`}
      renderItem={({ item }) => {
        let imageURL = `https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static${item.imageURL}`
        return (
          <ProductTemplate label={`${item.name}`}
            imageSource={{ uri: imageURL }}
            content={`${item.description}`}
            btitle={`Buy Now @ Rs. ${item.price}`}
            bPress={() => postProduct(item.id, imageURL, item.name, item.price)} />
        )
      }}
    />

  )

}

export default FetchProducts;

