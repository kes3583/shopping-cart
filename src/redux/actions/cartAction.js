import { ActionTypes } from '../contants/action-types';
import axios from 'axios';

export const addToCart = (product) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: product,

  }
}

export const removeProduct = (product) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: product.id,

  }
}