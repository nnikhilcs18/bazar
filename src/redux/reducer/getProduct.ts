//reducer in redducer folder 

import { AnyIfEmpty } from "react-redux";

export const GET_PRODUCT="GET_PRODUCT";
const POST_PRODUCT="POST_PRODUCT";
const ERR_MSG="ERR_MSG";


export const getProduct=(url)=>({
    type:GET_PRODUCT,
    payload:url
});
const initialState={
    productsList:[]
};
export const gpostProduct=(url,productDetails)=>({
    type:POST_PRODUCT,
    payload:productDetails
})


export default (state=initialState,action)=>{
    switch(action.type)
    {
        case SET_USER:
        {
            console.log("=======SET_REGISTER_USER======")
            console.log(action);
            const {user}=action;
            return {...state,action.payload};
        }
        default:
        {
            return state ;
        }
    }
}


