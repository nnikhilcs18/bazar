//function definition
//middleware folder 
import * as Keychain from 'react-native-keychain';
import axios from 'axios'
//experimenting with keychain
/*
export async function  requestGetUser(){
const username='admin';
const password='Admin@123';
const server="http://10.0.2.2:4000/users";

//storing the credentials
await Keychain.setInternetCredentials(server,email,password).then(()=>{
    try{
        //retrieving the credential
        const credentials=await Keychain.getInternetCredentials(server);
        if(credentials){
            console.log('credentials successfully loaded for user'+credentials.username);
            return credentials;
        }
        else
        {
            console.log("no credentials stored");
            return null;
        }
    }
    catch(error){
        console.log("keychain error:",error);
        return error;
    }
    await Keychain.resetInternetCredentials(server)
})
}


*/












//working code 
export function requestGetUser(email,password){
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
}

