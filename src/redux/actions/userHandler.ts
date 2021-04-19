//action 

import {call,put} from "redux-saga/effects";
import { requestGetUser} from "../middleware/userRequest";
import { setUser } from "../reducer/user";
import {storeInKeychain} from "../../screens/Login/Keychain"
export function* handleGetUser(action){
    try{
    console.log("---------user handler---------");
    const response=yield call(requestGetUser,action.email,action.password);
    console.log(typeof 'response');
    console.log("serverResponse3",response);
    const{data}=response;
    if(response.responseMsg)
    {
         storeInKeychain(action.email,action.password);
    }
    else
    {
        storeInKeychain(null,null)
    }
    




    yield put(setUser(response));
    }catch(error){
        console.log("error",error);
    }
}