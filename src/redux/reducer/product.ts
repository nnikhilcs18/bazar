
import {ADD_PRODUCT,INCREMENT,DECREMENT} from '../actions/actionTypes';


const initialState = 
  {
    
    cartItems:[],
    Counter: 0,
    billAmount: 0,
  }

function productReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
     
      let updatedCartItems = state.cartItems;
   
     
      let existingItemIndex = updatedCartItems.findIndex(
        element => element.ID == action.payload.ID,
      );
      
      if (existingItemIndex>=0) {
        
        
        action.payload.productQuantity =
          updatedCartItems[existingItemIndex].productQuantity + 1;
        action.payload.totalPrice =
          action.payload.price +
          updatedCartItems[existingItemIndex].totalPrice;
        updatedCartItems[existingItemIndex] = action.payload;
        
      } else {
        action.payload.productQuantity = 1;
        action.payload.totalPrice = action.payload.price;
        updatedCartItems = [...state.cartItems, action.payload];
      }
      return {
        ...state,
        cartItems: updatedCartItems,
        Counter: state.Counter + 1,
        billAmount: state.billAmount + action.payload.price,
      };

      
      case INCREMENT:
    let dummyCartItems = state.cartItems;
    console.log(dummyCartItems);
      dummyCartItems.map((item) => {
        if (action.payload.ID === item.ID) {
          item.productQuantity++;
        }
      });
      return  {
          ...state,
        cartItems: [...dummyCartItems],
        billAmount:state.billAmount+action.payload.price,
        Counter: state.Counter + 1,
       
      };
 
 case DECREMENT:
    dummyCartItems = state.cartItems;
    if (action.payload.productQuantity === 1) {
        dummyCartItems = state.cartItems.filter(
          (item) => item.ID !== action.payload.ID,
        );
      } else {
        dummyCartItems.map((item) => {
          if (action.payload.ID === item.ID) {
            item.productQuantity--;
            
            
          }
        });
      }
      return {
          ...state,
        cartItems: [...dummyCartItems],
       
        billAmount:state.billAmount-action.payload.price,
        Counter: state.Counter - 1,
      };
      
    
    default:
      return state
  }

  
}

export default productReducer