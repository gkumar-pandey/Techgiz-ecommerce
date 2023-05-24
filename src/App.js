import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { Navbar } from "./Components";
import { LoginPage, Signuppage } from "./Pages";
import ProductsPage from "./Pages/Productspage/ProductsPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </div>
  );
}

export default App;
