//function definition
//middleware folder
import * as Keychain from 'react-native-keychain';
import axios from 'axios';

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
  const serverResponse = //async () => {
    //try {
      //await 
      axios
        .post('http://10.0.2.2:4000/users', {
          email: email,
          password: password,
        })
         .then(function (response) {
           console.log("serverresponse1",JSON.stringify(response));
         });
    //} catch (error) {
      //console.log("error",error);
    //}
    //console.log("serverResponse", serverResponse);
    return serverResponse;
  };
//}
