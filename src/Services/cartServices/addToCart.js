import axios from "axios";
import { SET_ADD_TO_CART } from "../../Constant";
import { toast } from "react-hot-toast";

export const addToCart = async (product, dispatchCart) => {
  const encodedToken = JSON.parse(localStorage.getItem("user")).token;
  try {
    const { data, status } = await axios.post(
      "api/user/cart",
      { product },
      {
        headers: {
          authorization: encodedToken
        }
      }
    );
    if (status === 201) {
      dispatchCart({ type: SET_ADD_TO_CART, payload: data.cart });
    } else {
      toast.error("Something went wrong!!");
    }
  } catch (error) {
    console.log(error);
  }
};
