//function definition
//middleware folder
import * as Keychain from 'react-native-keychain';
import axios from 'axios';
import { delay } from '@redux-saga/core/effects';

//working code
/*export function requestGetUser(email,password){
    console.log("---------userrequest-------");
    console.log(email);
    console.log(password);
    const serverResponse = axios.request({
        method:"get",
        headers:{
            'Content-type':'application/json'
        },
        url:"http://10.0.2.2:4000/users"
    });
    return serverResponse;
}*/

export async function requestGetUser(email, password) {
  var data={};
  var serverResponse =  
      await axios
        .post('http://10.0.2.2:4000/users', {
          email: email,
          password: password,
          type:"login"
        })
         .then(function (response) {
           data=response.data;
         });

    return data;

}

