
import {ADD_PRODUCT,INCREMENT,DECREMENT} from '../actions/actionTypes';


const initialState = 
  {
    
    cartItems:[],
    itemCount: 0,
    billAmount: 0,
  }

function productReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
    
      let updatedCartItems = state.cartItems;
      //console.log("action playlooad IDDDDD",action.payload)
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
      return {
        ...state,
        cartItems: updatedCartItems,
        itemCount: state.itemCount + 1,
        billAmount: state.billAmount + action.payload.price,

      };

      
      case INCREMENT:
    let dummyCartItems = state.cartItems;
      dummyCartItems.map((item) => {
        if (action.payload.ID === item.ID) {
          item.quantity++;
        }
      });
      return  {
          ...state,
        cartItems: [...dummyCartItems],
        billAmount:state.billAmount+action.payload.price,
        itemCount: state.itemCount + 1,
       
      };
 
 case DECREMENT:
    dummyCartItems = state.cartItems;
    if (action.payload.quantity === 1) {
        dummyCartItems = state.cartItems.filter(
          (item) => item.ID !== action.payload.ID,
        );
      } else {
        dummyCartItems.map((item) => {
          if (action.payload.ID === item.ID) {
            item.quantity--;
            
            //item.totalPrice -= item.price;
          }
        });
      }
      return {
          ...state,
        cartItems: [...dummyCartItems],
        //totalBill: state.totalBill - action.payload.price,
        //cartBill: state.cartBill - action.payload.ProductPrice,
        billAmount:state.billAmount-action.payload.price,
        itemCount: state.itemCount - 1,
      };
      
    
    default:
      return state
  }

  
}

export default productReducer