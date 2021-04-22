//action 

import {call,put} from "redux-saga/effects";
import { requestGetProduct} from "../middleware/productRequest";
import { setProduct } from "../reducer/getProduct";
import {storeInKeychain} from "../../screens/Login/Keychain"
export function* handleGetProduct(action){
    try{

    const response=yield call(requestGetProduct);
    const {data}=response;
    yield put(setProduct(response));

    }catch(error){
        console.log("error",error);
    }
}