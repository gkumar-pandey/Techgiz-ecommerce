import axios from "axios";
import { toast } from "react-hot-toast";
import { SET_ADD_TO_CART } from "../../Constant";

export const updateCartItemQty = async (
  productId,
  productName,
  action,
  dispatchCart
) => {
  const encodedToken = JSON.parse(localStorage.getItem("user")).token;
  try {
    const res = await axios.post(
      `/api/user/cart/${productId}`,
      {
        action: {
          type: action
        }
      },
      {
        headers: {
          authorization: encodedToken
        }
      }
    );
    if (res.status === 200) {
      toast.success(`${productName} Quantity updated`);
      dispatchCart({ type: SET_ADD_TO_CART, payload: res.data.cart });
    } else {
      toast.error("Something went wrong!!");
    }
  } catch (error) {
    toast.error(error.message);
    console.log(error.message);
  }
};
