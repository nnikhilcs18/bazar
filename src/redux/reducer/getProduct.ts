//reducer in redducer folder 

import { AnyIfEmpty } from "react-redux";

export const GET_PRODUCT="GET_PRODUCT";
const SET_PRODUCT="SET_PRODUCT";
const ERR_MSG="ERR_MSG";


export const getProduct=()=>({
    type:GET_PRODUCT,
    url:'http://10.0.2.2:4000/products'
});

export const setProduct=(productList:object)=>({
    type:SET_PRODUCT,
    productList
})

const initialState={
    productsList:null
};


export default (state=initialState,action)=>{
    switch(action.type)
    {
        case SET_PRODUCT:
        {
            const {productList}=action
            return {...state,productList };
        }
        default:
        {
            return state ;
        }
    }
}


