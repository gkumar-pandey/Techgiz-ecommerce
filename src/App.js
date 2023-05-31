import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { Navbar } from "./Components";

import { Toaster } from "react-hot-toast";
import SignUpPage from "./Pages/Authpages/SignUpPage/SignUpPage";
import LoginPage from "./Pages/Authpages/LoginPage/LoginPage";
import ProductsPage from "./Pages/Productspage/ProductsPage";
import CartPage from "./Pages/CartPage/CartPage";

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
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
