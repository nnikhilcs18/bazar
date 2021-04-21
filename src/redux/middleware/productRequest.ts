//function definition
//middleware folder
import * as Keychain from 'react-native-keychain';
import axios from 'axios';
import { delay } from '@redux-saga/core/effects';

//working code
export function requestGetProduct(url){
    console.log("---------product request-------");

    const serverResponse = axios.request({
        method:"get",
        headers:{
            'Content-type':'application/json'
        },
        url:url
    });
    return serverResponse;
}

export async function requestPostProductDetails(url,productDetails) {
    var data;
  var serverResponse =  
      await axios
        .post(url, productDetails)
         .then(
            function(response){

                data=response.data;
                console.log(data)
                
            }
         );

    return data;

}

