import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "../../Reducer/CartReducer/CartReducer";

const CartContext = createContext();
const initialCartState = {
  products: [],
  isLoading: false
};
export const CartContextProvider = ({ children }) => {
  const [cartState, dispatchCart] = useReducer(CartReducer, initialCartState);
  const isUserLoggedIn = JSON.parse(localStorage.getItem("user"))?.token;
  return (
    <CartContext.Provider value={{ dispatchCart, isUserLoggedIn, cartState }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
