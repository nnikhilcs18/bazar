import {INCREMENT,DECREMENT,ADD_PRODUCT} from './actionTypes'

export const increment = (payload)=>({
    type:INCREMENT,
    payload
});

export const decrement = (payload)=>({
    type:DECREMENT,
    payload
});

export function addProduct(product) {
    return {
      type: ADD_PRODUCT,
      payload:product
      // id: product.productID,
      
    }
  }

