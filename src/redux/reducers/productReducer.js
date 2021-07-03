import { ActionTypes } from "../contants/action-types";

const initialState = {
  data: [
    {
      id: 1,
      title: "Dispatch",
      category: 'product'
    },
    {
      id: 2,
      title: "Dispatch",
      category: 'product'
    },
    {
      id: 3,
      title: "Dispatch",
      category: 'product'
    }
  ]
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
}