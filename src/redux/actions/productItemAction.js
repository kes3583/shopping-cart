import { ActionTypes } from '../contants/action-types';
import axios from 'axios';

export const getProductItems = () => async (dispatch) => {
  try{
    dispatch({
      type: ActionTypes.GET_PRODUCTS_REQUEST
    });

    const { data } = await axios.get("/api/products");
    dispatch({
      type: ActionTypes.GET_PRODUCTS_SUCCESS,
      payload: data
    })
  }catch (error) {
    dispatch({
      type: ActionTypes.GET_PRODUCTS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const getProductDetails = (id) => async (dispatch) => {
  try{
    dispatch({
      type: ActionTypes.GET_PRODUCT_DETAILS_REQUEST
    });

    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({
      type: ActionTypes.GET_PRODUCT_DETAILS_SUCCESS,
      payload: data
    })
  }catch (error) {
    dispatch({
      type: ActionTypes.GET_PRODUCT_DETAILS_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const removeProductDetails = () => (dispatch) => {
    dispatch({
      type: ActionTypes.GET_PRODUCT_DETAILS_RESET
    });
}