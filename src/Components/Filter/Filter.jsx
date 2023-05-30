import React from "react";
import "./Filter.css";
import SortByPrice from "./Components/SortByPrice";
import PriceRange from "./Components/PriceRange";
import FilterByBrands from "./Components/FilterByBrands";
import FilterByTypes from "./Components/FilterByTypes";
import { useProducts } from "../../Context/ProductsContext/ProductsContext";
import { RESET_FILTER } from "../../Constant/FilterConstant/FilterConstant";
import FilterByRating from "./Components/FilterByRating";

const Filter = () => {
  const { dispatchFilter } = useProducts();
  const resetFilterHandler = () => {
    dispatchFilter({ type: RESET_FILTER });
  };
  return (
    <div>
      <div className="filter_wrapper">
        <div className="d-flex items-center justify-between filter_heading">
          <p>Filters</p>
          <button
            className=" filter_clear_btn "
            onClick={() => resetFilterHandler()}
          >
            Clear
          </button>
        </div>
        <SortByPrice />
        <FilterByTypes />
        <FilterByRating />
        <PriceRange />
        <FilterByBrands />
      </div>
    </div>
  );
};

export default Filter;
