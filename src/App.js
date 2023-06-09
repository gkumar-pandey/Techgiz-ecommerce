import "./App.css";

import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Navbar, RequireAuth } from "./Components";
import {
  CartPage,
  CheckoutPage,
  Home,
  LoginPage,
  ProductDetailsPage,
  ProductsPage,
  SignUpPage,
  WishlistPage,
  OrderSummary,
  Profile
} from "./Pages";
import Footer from "./Components/Footer/Footer";

function App() {
  const location = useLocation();
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
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckoutPage />
            </RequireAuth>
          }
        />
        <Route
          path="/orders"
          element={
            <RequireAuth>
              <OrderSummary />
            </RequireAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
      </Routes>
      {location.pathname === "/" && <Footer />}
    </div>
  );
}

export default App;
