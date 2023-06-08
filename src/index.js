import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext/AuthContext";
import {
  CheckoutProvider,
  ProductsProvider,
  WishlistProvider
} from "./Context";
import { CartContextProvider } from "./Context/CartContext/CartContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductsProvider>
          <WishlistProvider>
            <CartContextProvider>
              <CheckoutProvider>
                <App />
              </CheckoutProvider>
            </CartContextProvider>
          </WishlistProvider>
        </ProductsProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
