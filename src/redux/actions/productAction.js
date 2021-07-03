import { ActionTypes } from '../contants/action-types';
export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,

  }
}

export const selectedProduct = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,

  }
}