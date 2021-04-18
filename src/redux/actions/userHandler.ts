//action 

import {call,put} from "redux-saga/effects";
import { requestGetUser} from "../middleware/userRequest";
import { setUser } from "../reducer/user";

export function* handleGetUser(action){
    try{
    console.log("---------user handler---------");
    const response=yield call(requestGetUser,action.email,action.password);
    console.log(typeof 'response');
    console.log("serverResponse2",response);
    const{data}=response;

    yield put(setUser(data));
    }catch(error){
        console.log("error",error);
    }
}
