import { ActionTypes } from "../constants/action-type";

const initialState = {
  product: [],
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, product: payload };

    default:
      return state;
  }
};

export default productReducer;
