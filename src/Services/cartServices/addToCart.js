import axios from "axios";
import { SET_ADD_TO_CART } from "../../Constant";
import { toast } from "react-hot-toast";

export const addToCart = async (product, token, dispatchCart) => {
  try {
    const { data, status } = await axios.post(
      "/api/user/cart",
      { product },
      {
        headers: {
          authorization: token
        }
      }
    );
    if (status === 201) {
      dispatchCart({ type: SET_ADD_TO_CART, payload: data.cart });
      toast.success(`${product.productName} added to cart 🛒`);
    } else {
      toast.error("Something went wrong!!");
    }
  } catch (error) {
    console.error(error.message);
    toast.error(error.message);
  }
};
