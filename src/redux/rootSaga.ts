import {takeLatest} from "redux-saga/effects";
import { handleGetUser } from "./userHandler";
import {GET_USER} from './user'
export function* watecherSage()
{
    yield takeLatest(GET_USER,handleGetUser)
}