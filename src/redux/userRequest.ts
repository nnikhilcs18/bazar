import * as Keychain from 'react-native-keychain';
import axios from 'axios'

export function requestGetUser(){
    return axios.request({
        method:"get",
        url:"http://10.0.2.2:4000/users"
    });
}

/*export function requestGetUser2(){
async () => {
    console.log("--------userRequest-saga-----------")
    const username = 'admin';
    const password = 'Admin@123';
  
    // Store the credentials
    await Keychain.setGenericPassword(username, password);
  
    try {
      // Retrieve the credentials
      const credentials = await Keychain.getGenericPassword();
      if (credentials) {
        console.log(
          'Credentials successfully loaded for user ' + credentials.username
        );
      } else {
        console.log('No credentials stored');
      }
    } catch (error) {
      console.log("Keychain couldn't be accessed!", error);
    }
    await Keychain.resetGenericPassword();
  };
}*/