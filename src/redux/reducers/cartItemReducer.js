import { ActionTypes } from "../contants/action-types";

const initialState = {
  loading: false,
  cartItems: []
};

// Reducer
export const cartItemReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      console.log('state', state.cartItems)
      console.log('payload', payload)
      const existItem = state.cartItems.find((x)=> x.product === payload.product);
      if(existItem){
        return {
          ...state,
          cartItems: state.cartItems.map((x)=>
            x.product === existItem.product ? payload : x
          )
        }
      }else {
        return {
          ...state,
          cartItems: [...state.cartItems, payload]
        };
      }
    case ActionTypes.REMOVE_FROM_CART:      
      return { 
        ...state,
        cartItems: state.cartItems.filter( (item) => (
          item.product !== payload
        )
      )
    };  
    case ActionTypes.CART_RESET:
      return { 
        ...state,
        cartItems: []
    };
    default:
      return state;
  }
}
