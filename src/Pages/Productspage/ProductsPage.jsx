import React, { useState } from "react";
import Sidebar from "./Component/Sidebar";
import MainComp from "./Component/MainComp";
import "./ProductPage.css";
import Search from "../../Components/Search/Search";
import { MdOutlineSort } from "react-icons/md";
import { FaFilter } from "react-icons/fa";
import DrawerBottom from "../../Components/Drawer/DrawerBottom";
import SortByPrice from "../../Components/Filter/Components/SortByPrice";
import FilterByBrands from "../../Components/Filter/Components/FilterByBrands";
import FilterByTypes from "../../Components/Filter/Components/FilterByTypes";
import FilterByRating from "../../Components/Filter/Components/FilterByRating";
import PriceRange from "../../Components/Filter/Components/PriceRange";
import { useProducts } from "../../Context";
import { RESET_FILTER } from "../../Constant/FilterConstant/FilterConstant";

const ProductsPage = () => {
  const [sortBtn, setSortBtn] = useState(false);
  const [filterBtn, setFilterBtn] = useState(false);
  const { dispatchFilter } = useProducts();
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
      <div className="filterBtns">
        <button onClick={() => setSortBtn(!sortBtn)}>
          <MdOutlineSort /> Sort
        </button>
        <button
          className="d-flex items-center justify-center gap-2 "
          onClick={() => setFilterBtn(true)}
        >
          <span>
            <FaFilter />
          </span>
          <span>Filter</span>
        </button>
      </div>
      <DrawerBottom handleOpen={setSortBtn} open={sortBtn}>
        <SortByPrice />
      </DrawerBottom>
      <DrawerBottom open={filterBtn} handleOpen={setFilterBtn}>
        <FilterByBrands />
        <PriceRange />
        <FilterByTypes />
        <FilterByRating />
        <button
          className=" filter_clear_btn "
          onClick={() => dispatchFilter({ type: RESET_FILTER })}
        >
          Clear
        </button>
      </DrawerBottom>
    </div>
  );
};

export default ProductsPage;
