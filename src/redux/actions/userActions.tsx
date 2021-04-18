import {Dispatch} from 'react'
import { useDispatch } from 'react-redux';
export interface UserModel{
    firstName:string;
    lastName:string;
    subscription:string;
    token:string;
}
export interface LoginAction{
    readonly type: 'ON_LOGIN';
    payload:UserModel;
}
export interface ErrorAction{
    readonly type: 'ON_ERROR';
    payload:any;
}
export type UserAction=LoginAction | ErrorAction;

//dispatching actions

export const onLogin=(email:string,password:string)=>{
    return async(dispatch:Dispatch<UserAction>)=>{
        console.log(email);
        console.log(password);

    }
    }

 