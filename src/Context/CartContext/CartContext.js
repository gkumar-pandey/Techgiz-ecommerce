import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "../../Reducer/CartReducer/CartReducer";
import { addToCart } from "../../Services";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

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
      const res = addToCart(product, dispatchCart);
      toast.promise(res, {
        loading: "Loading..",
        success: `${product.productName} added to cart `,
        error: "Something went wrong!!"
      });
    } else {
      navigate("/login");
    }
  };
  return (
    <CartContext.Provider
      value={{
        dispatchCart,
        isUserLoggedIn,
        cartState,
        addToCart,
        addToCartHandler
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
