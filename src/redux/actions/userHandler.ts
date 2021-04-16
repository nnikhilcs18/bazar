//action 

import {call,put} from "redux-saga/effects";
import { requestGetUser} from "../middleware/userRequest";
import { setUser } from "../reducer/user";

export function* handleGetUser(action){
    try{
    console.log("---------user handler---------")
    console.log(action)
    const response=yield call(requestGetUser,action.email,action.password);
    const{data}=response;
    yield put(setUser(data));
    }catch(error){
        console.log(error);
    }
}
