//middleware 

import {takeLatest} from "redux-saga/effects";
import { handleGetUser } from "../actions/userHandler";
import {GET_USER} from '../reducer/user'
export function* watecherSage()
{
    yield takeLatest(GET_USER,handleGetUser)
}