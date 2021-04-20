//reducer in redducer folder 

import { AnyIfEmpty } from "react-redux";

export const GET_USER="GET_USER";
const SET_USER="SET_USER";
const ERR_MSG="ERR_MSG";

export const getUser=(email,password)=>({
    type:GET_USER,
    email:email,
    password:password,
});
const initialState={
    user:null,
    email:null,
    password:null,
};
export const setUser=(user)=>({
    type:SET_USER,
    user:user
})

export default (state=initialState,action)=>{
    switch(action.type)
    {
        case SET_USER:
        {
            const {user}=action;
            return {...state,user:user};
        }
        default:
        {
            return state ;
        }
    }
}

