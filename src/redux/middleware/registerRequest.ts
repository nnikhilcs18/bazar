import axios from 'axios'
export async function registerRequest(email,password){
    var data;
    var serverResponse=await axios.post('http://10.0.2.2:4000/users',{
        email:email,
        password:password,
        type:"register"
    }).then(function(response){

        data=response.data;
        
    });
    return data;
}