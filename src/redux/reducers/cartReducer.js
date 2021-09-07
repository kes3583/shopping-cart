import { ActionTypes } from "../contants/action-types";

const initialState = {
  loading: false,
  items: []
};

// Reducer
export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      // const existItem = state.items.find((item)=> item.id === payload.id);
      return {
        ...state, 
        items: payload
      };
    case ActionTypes.REMOVE_FROM_CART:      
      return { 
        ...state, 
        items: state.items.filter( (item) => (
          item.id !== payload 
        )
      )
    };  
    case ActionTypes.CART_RESET:
      return { 
        ...state, 
        items: []
    };
    default:
      return state;
  }
}
