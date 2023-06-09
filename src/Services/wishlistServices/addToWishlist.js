import axios from "axios";
import toast from "react-hot-toast";
import { SET_ADD_TO_WISHLIST } from "../../Constant/WishlistConstant/WishlistConstant";
export const addToWishlist = async (product, token, dispatchWishlist) => {
  const encodedToken = JSON.parse(localStorage.getItem("user"))?.token;
  try {
    const { data, status } = await axios.post(
      "/api/user/wishlist",
      { product },
      {
        headers: {
          authorization: encodedToken
        }
      }
    );

    if (status === 201) {
      dispatchWishlist({ type: SET_ADD_TO_WISHLIST, payload: data.wishlist });
    } else {
      toast.error("Something went Wrong!!");
    }
  } catch (error) {
    toast.error(error.message);
    console.error(error.message);
  }
};
