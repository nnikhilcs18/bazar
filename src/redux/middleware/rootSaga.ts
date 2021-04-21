//middleware 

import {takeLatest} from "redux-saga/effects";
import { handleRegisterUser } from "../actions/registerHandler";
import { handleGetUser } from "../actions/userHandler";
import { handleGetProduct } from "../actions/productHandler";

import {GET_USER} from '../reducer/user';
import {REGISTER_USER} from '../reducer/register'
import {GET_PRODUCT} from '../reducer/getProduct';

export function* watecherSage()
{
    yield takeLatest(GET_USER,handleGetUser)
    yield takeLatest(REGISTER_USER,handleRegisterUser)
    yield takeLatest(GET_PRODUCT,handleGetProduct)

}