import { ActionTypes } from "../contants/action-types";

const initialState = {
  loading: false,
  data: []
};

// Reducer
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state, data: payload
      };
    default:
      return state;
  }
}

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return {
        ...state, 
        ...payload
      };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
    return {};
    default:
      return state;
  }
}