import axios from "axios";
import { SET_ADD_TO_CART } from "../../Constant/CartActions/CartActions";

export const getCartProducts = async (dispatchCart) => {
  const encodedToken = JSON.parse(localStorage.getItem("user"))?.token;
  try {
    const { data, status } = await axios.get("/api/user/cart", {
      headers: {
        authorization: encodedToken
      }
    });
    if (status === 200) {
      dispatchCart({ type: SET_ADD_TO_CART, payload: data.cart });
    } else {
      console.log("Something went wrong!!");
    }
  } catch (error) {
    console.log(error);
  }
};
