import React, { useState,useEffect } from 'react';
import {Image, View, FlatList, Text, StyleSheet, SafeAreaView, ActivityIndicator, TouchableOpacity} from 'react-native';
import Template from './plp'
const urlProduct='http://10.0.2.2:4000/products'
const urlCart='http://10.0.2.2:4000/addToCart'
const Fetch =()=> {
    
    const [isLoading,setLoading]=useState(true)
    const [data,setData]=useState([])
    const [showDetail, setShowDetail] = useState(false);
    const [productID,setProductId]=useState('')
    const [imageURL,setImageURL]=useState('')
    


    const postProduct = (id,imageURL) => {
      console.log("entering function")
      console.log(`ID:${id}`,`image:${imageURL}`)
      const productDetails={
        ID:id,
        image:imageURL
      }

      fetch(urlCart, {
          method: 'POST',
          body:JSON.stringify(productDetails),
          headers: {
            "Content-type": "application/json",
        },
      })
      .then((response) => response.text())
      .then(() => 
        {
          console.log(`ID:${id}`,`image:${imageURL}`)
          
        })
      .catch((error) =>{console.error(error);})
      .catch(() =>{console.log('error');})

  }

    useEffect(() => {

        fetch(urlProduct).then(response => response.json())
    
          .then(json => 
            {
              setData(json)
              // console.log(data)
            })
          .catch((error) =>{console.error(error);})
    
    }, [])
    

    
    return (
         
            <FlatList
                data={data}
                renderItem={({item})=>{
                    let imageURL=`https://raw.githubusercontent.com/gautam-in/shopping-cart-assignment/master/static${item.imageURL}`
                    console.log(imageURL)
                    return(
                        <Template label={`${item.name}`}
                        imageSource={{uri:imageURL}}
                        content={`${item.description}`}
                        btitle={`Buy Now @ Rs. ${item.price}`}
                        bPress={()=>postProduct(item.id,imageURL)}/> 
                    )

                }}
                
            />  
    )     
}

export default Fetch;

