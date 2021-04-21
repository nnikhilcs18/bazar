import {call,put} from "redux-saga/effects";
import {registerRequest} from "../middleware/registerRequest";
import {setRegisterUser} from "../reducer/register";
export function* handleRegisterUser(action){
    try{
        const response=yield call(registerRequest,action.email,action.password);
        const {data}=response;
        yield put(setRegisterUser(response));
    }
    catch (error){
        console.log("registration error",error)
    }
}