import { ActionTypes } from "../constants/action-type";

export const setProduct = (product) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: product,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
