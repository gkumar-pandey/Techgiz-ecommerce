import { createContext, useContext, useReducer } from "react";
import { WishlistReducer } from "../../Reducer/WishlistReducer/WishlistReducer";

const WishlistContext = createContext();

const wishlistInitialState = {
  products: []
};
export const WishlistProvider = ({ children }) => {
  const [wishlistProductState, dispatchWishlist] = useReducer(
    WishlistReducer,
    wishlistInitialState
  );

  console.log(wishlistProductState.products);
  return (
    <WishlistContext.Provider
      value={{ dispatchWishlist, wishlistProductState }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
