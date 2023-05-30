import { createContext, useContext, useEffect, useReducer } from "react";
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

  const addToWishlistHandler = (product) => {
    if (isUserLoggedIn) {
      const res = addToWishlist(product, dispatchWishlist);
      toast.promise(res, {
        loading: "Loading...",
        success: `${product.productName} added to wishlist`,
        error: "Something went wrong!!"
      });
    } else {
      navigate("/login");
    }
  };

  const removeFromWishlistHandler = (productId, productName) => {
    if (isUserLoggedIn) {
      const res = removeFromWishlist(productId, dispatchWishlist);
      toast.promise(res, {
        loading: "Loading...",
        success: `${productName} removed from wishlist`,
        error: "Something went wrong!!"
      });
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
