import { ActionTypes } from "../constants/action-type";

const initialState = {
  product: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, product: payload };
    // case ActionTypes.FETCH_PRODUCTS:
    //   return { ...state, product: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    // case ActionTypes.FETCH_PRODUCTS:
    //   return { ...state, ...payload };
    default:
      return state;
  }
};
