import React from "react";
import Sidebar from "./Component/Sidebar";
import MainComp from "./Component/MainComp";
import "./ProductPage.css";

const ProductsPage = () => {
  return (
    <div className="products_page">
      <div className="product_page_wrapper">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main">
          <MainComp />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
