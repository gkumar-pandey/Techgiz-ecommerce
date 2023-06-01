import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "../../Reducer/CartReducer/CartReducer";
import { addToCart, removeFromCart, updateCartItemQty } from "../../Services";
import { useNavigate } from "react-router-dom";

const CartContext = createContext();
const initialCartState = {
  products: [],
  isLoading: false
};
export const CartContextProvider = ({ children }) => {
  const [cartState, dispatchCart] = useReducer(CartReducer, initialCartState);
  const navigate = useNavigate();
  const isUserLoggedIn = JSON.parse(localStorage.getItem("user"))?.token;

  const addToCartHandler = (product) => {
    if (isUserLoggedIn) {
      addToCart(product, dispatchCart);
    } else {
      navigate("/login");
    }
  };
  const removeFromCartHandler = (product) => {
    if (isUserLoggedIn) {
      removeFromCart(product._id, product.productName, dispatchCart);
    } else {
      navigate("/login");
    }
  };

  const updateCartQtyHandler = (productId, productName, type) => {
    if (isUserLoggedIn) {
      updateCartItemQty(productId, productName, type, dispatchCart);
    }
  };
  return (
    <CartContext.Provider
      value={{
        dispatchCart,
        isUserLoggedIn,
        cartState,
        addToCart,
        addToCartHandler,
        removeFromCartHandler,
        updateCartQtyHandler
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
