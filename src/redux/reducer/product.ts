export const ADD_PRODUCT = 'ADD_PRODUCT'

//CREATING ACTIONS
export function addProduct(productID) {
    // console.log("inside dispatch function",productID)
  return {
    type: ADD_PRODUCT,
    id: productID,
  }
}

// CREATING REDUCER

const initialState = 
  {
    id: [],
    counter:0,
  }

function productReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
    
      let map = state.id.concat(action.id).reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
      let sum = 0;
      map.forEach((v) => { sum += v;})

      return {
        ...state,        
        id: state.id.concat(action.id),
        map:map,
        counter:sum,
        
      }

    default:
      return state
  }
}

export default productReducer