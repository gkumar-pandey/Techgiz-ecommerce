import axios from "axios";
import { SET_ADD_TO_CART } from "../../Constant";
import { toast } from "react-hot-toast";

export const removeFromCart = async (productId, productName, dispatchCart) => {
  const encodedToken = JSON.parse(localStorage.getItem("user"))?.token;
  try {
    const res = await axios.delete(`/api/user/cart/${productId}`, {
      headers: {
        authorization: encodedToken
      }
    });

    if (res.status === 200) {
      toast.success(`${productName} removed from cart 🛒`);
      dispatchCart({ type: SET_ADD_TO_CART, payload: res?.data.cart });
    } else {
      toast.error("Something went wrong!!");
    }
  } catch (error) {
    console.error(error.message);
    toast.error(error.message);
  }
};
