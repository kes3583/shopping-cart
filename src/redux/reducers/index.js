import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

const reducers = combineReducers({
  products: productReducer,
  selected: selectedProductReducer,
})

export default reducers;