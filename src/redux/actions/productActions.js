import fakeStoreApi from "../../apis/fakeStoreApi";
import { ActionTypes } from "../constants/action-type";

export const fetchProducts = () => async (dispatch) => {
  const response = await fakeStoreApi("/products");
  dispatch({ type: ActionTypes.SET_PRODUCTS, payload: response.data });
};

export const fetchSelectedProducts = (id) => async (dispatch) => {
  const response = await fakeStoreApi(`/products/${id}`);
  dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data });
};

/* export const setProduct = (product) => {
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
 */
