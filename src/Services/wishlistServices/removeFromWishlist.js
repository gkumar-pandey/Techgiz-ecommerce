import axios from "axios";
import { SET_ADD_TO_WISHLIST } from "../../Constant/WishlistConstant/WishlistConstant";
import { toast } from "react-hot-toast";
export const removeFromWishlist = async (product, token, dispatchWishlist) => {
  try {
    const { status, data } = await axios.delete(
      `/api/user/wishlist/${product._id}`,
      {
        headers: { authorization: token }
      }
    );

    if (status === 200) {
      dispatchWishlist({ type: SET_ADD_TO_WISHLIST, payload: data.wishlist });
      toast.success(`${product.productName} removed from wishlist`);
    } else {
      toast.error("Something went wrong!!");
    }
  } catch (error) {
    toast.error(error.message);
    console.log(error.message);
  }
};
