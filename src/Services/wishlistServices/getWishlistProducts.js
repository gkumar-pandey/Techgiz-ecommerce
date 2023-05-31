import axios from "axios";
import { SET_ADD_TO_WISHLIST } from "../../Constant/WishlistConstant/WishlistConstant";
import { toast } from "react-hot-toast";
export const getWishlistProducts = async (dispatchWishlist) => {
  const encodedToken = JSON.parse(localStorage.getItem("user")).token;

  try {
    const { data, status } = await axios.get("api/user/wishlist", {
      headers: {
        authorization: encodedToken
      }
    });

    if (status === 200) {
      dispatchWishlist({ type: SET_ADD_TO_WISHLIST, payload: data.wishlist });
    } else {
      toast.error("Something went wrong!!");
    }
  } catch (error) {
    console.log(error);
  }
};
