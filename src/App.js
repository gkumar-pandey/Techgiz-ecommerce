import "./App.css";

import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Navbar, RequireAuth } from "./Components";
import {
  CartPage,
  Home,
  LoginPage,
  ProductDetailsPage,
  ProductsPage,
  SignUpPage,
  WishlistPage
} from "./Pages";

function App() {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <CartPage />
            </RequireAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequireAuth>
              <WishlistPage />
            </RequireAuth>
          }
        />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
