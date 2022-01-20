import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";
import { cartItemReducer } from "./cartItemReducer";
import {getProductItemsReducer, getProductDetailsReducer } from "./productItemsReducer";


const reducers = combineReducers({
  cart: cartItemReducer,
  getProductItems: getProductItemsReducer,
  getProductDetails: getProductDetailsReducer,

  products: productReducer,
  selected: selectedProductReducer,
})

const cartFromLocalStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []; //set localStorage

const INITIAL_STATE = {
  cart: {
    cartItems: cartFromLocalStorage
  }
}

export {reducers, INITIAL_STATE};