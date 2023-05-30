import React from "react";
import Sidebar from "./Component/Sidebar";
import MainComp from "./Component/MainComp";
import "./ProductPage.css";
import Search from "../../Components/Search/Search";

const ProductsPage = () => {
  return (
    <div className="products_page">
      <div className="md_search">
        <Search />
      </div>
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
