import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { Navbar, RequireAuth } from "./Components";

import { Toaster } from "react-hot-toast";

import ProductsPage from "./Pages/Productspage/ProductsPage";
import CartPage from "./Pages/CartPage/CartPage";
import LoginPage from "./Pages/Authpages/LoginPage/LoginPage";
import SignUpPage from "./Pages/Authpages/SignUpPage/SignUpPage";
import WishlistPage from "./Pages/WishlistPage/WishlistPage";
import { ProductDetailsPage } from "./Pages";

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
