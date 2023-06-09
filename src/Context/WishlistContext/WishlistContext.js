import { createContext, useContext, useReducer } from "react";
import { WishlistReducer } from "../../Reducer/WishlistReducer/WishlistReducer";
import { addToWishlist, removeFromWishlist } from "../../Services";
import { useLocation, useNavigate } from "react-router-dom";

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
  const location = useLocation();
  const token = JSON.parse(localStorage.getItem("user"))?.token;

  const addToWishlistHandler = (product) => {
    if (token) {
      addToWishlist(product, token, dispatchWishlist);
    } else {
      navigate("/login", { state: { from: location } });
    }
  };

  const removeFromWishlistHandler = (product) => {
    if (token) {
      removeFromWishlist(product, token, dispatchWishlist);
    } else {
      navigate("/login", { state: { from: location } });
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        dispatchWishlist,
        wishlistProductState,
        token,
        addToWishlistHandler,
        removeFromWishlistHandler
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
