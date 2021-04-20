//middleware 

import {takeLatest} from "redux-saga/effects";
import { handleRegisterUser } from "../actions/registerHandler";
import { handleGetUser } from "../actions/userHandler";
import {GET_USER} from '../reducer/user';
import {REGISTER_USER} from '../reducer/register'
export function* watecherSage()
{
    yield takeLatest(GET_USER,handleGetUser)
    yield takeLatest(REGISTER_USER,handleRegisterUser)
}