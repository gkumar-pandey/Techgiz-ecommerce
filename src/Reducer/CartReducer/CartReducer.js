import { SET_ADD_TO_CART } from "../../Constant/CartActions/CartActions";

export const CartReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_ADD_TO_CART:
      return { ...state, products: payload };
    default:
      return state;
  }
};
