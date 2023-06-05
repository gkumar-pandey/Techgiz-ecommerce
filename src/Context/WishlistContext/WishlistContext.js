import { createContext, useContext, useReducer } from "react";
import { WishlistReducer } from "../../Reducer/WishlistReducer/WishlistReducer";
import { addToWishlist, removeFromWishlist } from "../../Services";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const WishlistContext = createContext();

const wishlistInitialState = {
  products: [],
  isLoading: false
};
export const WishlistProvider = ({ children }) => {
  const [wishlistProductState, dispatchWishlist] = useReducer(
    WishlistReducer,
    wishlistInitialState
  );
  const navigate = useNavigate();

  const isUserLoggedIn = JSON.parse(localStorage.getItem("user"))?.token;

  const addToWishlistHandler = async (product) => {
    if (isUserLoggedIn) {
      await addToWishlist(product, dispatchWishlist);
      toast.success(`${product.productName} Added to wishlist`);
    } else {
      navigate("/login");
    }
  };

  const removeFromWishlistHandler = async (productId, productName) => {
    if (isUserLoggedIn) {
      await removeFromWishlist(productId, dispatchWishlist);
      toast.success(`${productName} removed from wishlist`);
    } else {
      navigate("/login");
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        dispatchWishlist,
        wishlistProductState,
        isUserLoggedIn,
        addToWishlistHandler,
        removeFromWishlistHandler
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
