import {call,put} from "redux-saga/effects";
import { requestGetUser, requestGetUser2 } from "./userRequest";
import { setUser } from "./user";

export function* handleGetUser(action){
    try{
    const response=yield call(requestGetUser);
    const{data}=response;
    yield put(setUser(data));
    }catch(error){
        console.log(error);
    }
}
