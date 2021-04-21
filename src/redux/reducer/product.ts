export const ADD_PRODUCT = 'ADD_PRODUCT'

//CREATING ACTIONS
export function addProduct(product) {
    console.log("inside dispatch function",product.ID)
  return {
    type: ADD_PRODUCT,
    payload:product
    // id: product.productID,
    // image:product.image,
    // productName:product.productName,
    // price:product.price,
  }
}

// CREATING REDUCER

const initialState = 
  {
    
    cartItems:[],
    itemCount: 0,
    totalBill: 0,
  }

function productReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
    
      let updatedCartItems = state.cartItems;
      // console.log("action playlooad IDDDDD",action.payload.ID)
      let alreadyPresentItemIndex = updatedCartItems.findIndex(
        element => element.ID == action.payload.ID,
      );
      // console.log("INDEX OF ALREADY PRESENT ITEM",alreadyPresentItem)
      if (alreadyPresentItemIndex>=0) {
        
        // console.log("INDEX OF ALREADY PRESENT ITEM-INSIDE FUNCTION",alreadyPresentItem)
        action.payload.quantity =
          updatedCartItems[alreadyPresentItemIndex].quantity + 1;
        action.payload.totalPrice =
          action.payload.price +
          updatedCartItems[alreadyPresentItemIndex].totalPrice;
        updatedCartItems[alreadyPresentItemIndex] = action.payload;
      } else {
        action.payload.quantity = 1;
        action.payload.totalPrice = action.payload.price;
        updatedCartItems = [...state.cartItems, action.payload];
      }
      return Object.assign({}, state, {
        cartItems: updatedCartItems,
        itemCount: state.itemCount + 1,
        totalBill: state.totalBill + action.payload.price,
      });
    
    default:
      return state
  }
}

export default productReducer