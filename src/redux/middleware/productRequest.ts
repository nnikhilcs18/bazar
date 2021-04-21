//function definition
//middleware folder
import * as Keychain from 'react-native-keychain';
import axios from 'axios';
import { delay } from '@redux-saga/core/effects';

//working code
export async function requestGetProduct(){
    // console.log("---------product request-------");
    var data={}
    const serverResponse = await axios.request({
        method:"get",
        headers:{
            'Content-type':'application/json'
        },
        url:'http://10.0.2.2:4000/products'
    })
    .then(function(response){ data=response.data })
    // console.log("DATA INSIDE PRODUCT REQUEST",data)
    return data;
}

// export async function requestPostProductDetails(url,productDetails) {
//     var data;
//   var serverResponse =  
//       await axios
//         .post(url, productDetails)
//          .then(
//             function(response){

//                 data=response.data;
//                 console.log(data)
                
//             }
//          );

//     return data;

// }

