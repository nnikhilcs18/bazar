import React, { useState,useEffect } from 'react';
import {Image, View, FlatList, Text, StyleSheet, SafeAreaView, ActivityIndicator, TouchableOpacity} from 'react-native';
import ProductTemplate from './ProductTemplate'
import { showMessage, hideMessage } from "react-native-flash-message";

const urlProduct='http://10.0.2.2:4000/products'
const urlCart='http://10.0.2.2:4000/addToCart'
const FetchProducts =()=> {
    
    const [isLoading,setLoading]=useState(true)
    const [data,setData]=useState([])
    const [showDetail, setShowDetail] = useState(false);
    const [productID,setProductId]=useState('')
    const [imageURL,setImageURL]=useState('')

    const postProduct = (id, imageURL, name, price) => {

    const productDetails = {
      ID: id,
      image: imageURL,
      ProductName: name,
      Price: price
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
      
  }

    useEffect(() => {

        fetch(urlProduct).then(response => response.json())    
          .then(json => {setData(json)})
          .catch((error) =>{console.error(error);})
    
    }, [])
    

    
    return (
         
            <FlatList
                data={data}
                keyExtractor={item => `productItem${item.id.toString()}`}
                renderItem={({item})=>{
                    let imageURL=`https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static${item.imageURL}`
                    return(
                        <ProductTemplate label={`${item.name}`}
                        imageSource={{uri:imageURL}}
                        content={`${item.description}`}
                        btitle={`Buy Now @ Rs. ${item.price}`}
                        bPress={()=>postProduct(item.id,imageURL,item.name,item.price)}/> 
                    )
                }}
            />  
    )     
}

export default FetchProducts;

