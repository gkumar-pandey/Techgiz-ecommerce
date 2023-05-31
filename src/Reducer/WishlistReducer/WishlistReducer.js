import {
  REMOVE_FROM_WISHLIST,
  SET_ADD_TO_WISHLIST
} from "../../Constant/WishlistConstant/WishlistConstant";

export const WishlistReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_ADD_TO_WISHLIST:
      return { ...state, products: payload };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        products: state.products.filter((product) => product._id !== payload)
      };
    default:
      break;
  }
};
