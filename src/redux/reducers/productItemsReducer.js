import { ActionTypes } from "../contants/action-types";

const initialState = {
  loading: false,
  productItems: [],
  error: '',
};

// Reducer
export const getProductItemsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_PRODUCTS_REQUEST:
        return {
          ...state,
          loading: true,
          productItems: [],
      }
    case ActionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        productItems: payload,
      };
    case ActionTypes.GET_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
}

export const getProductDetailsReducer = (state = {product:{}}, {type,payload}) => {
  switch (type) {
    case ActionTypes.GET_PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
      }
    case ActionTypes.GET_PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: payload,
      };
    case ActionTypes.GET_PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case ActionTypes.GET_PRODUCT_DETAILS_RESET:
      return {
        product:{},
      };
    default:
      return state;
  }
}
