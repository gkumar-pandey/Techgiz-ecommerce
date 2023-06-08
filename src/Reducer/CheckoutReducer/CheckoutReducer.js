import {
  REMOVE_DISCOUNT,
  SAVE_ORDER,
  SET_ADDRESS,
  SET_DEFAULT_ADDRESS,
  SET_DISCOUNT
} from "../../Constant";

export const checkoutReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_ADDRESS:
      return { ...state, addresses: payload };
    case SET_DEFAULT_ADDRESS:
      return { ...state, defaultAddress: payload };
    case SET_DISCOUNT:
      return { ...state, discountCoupon: [...state.discountCoupon, payload] };
    case REMOVE_DISCOUNT:
      return {
        ...state,
        discountCoupon: state.discountCoupon.filter((item) => item !== payload)
      };
    case SAVE_ORDER:
      return { ...state, orders: [...state.orders, payload] };

    default:
      return { ...state };
  }
};
