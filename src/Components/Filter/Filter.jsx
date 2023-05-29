import React from "react";
import "./Filter.css";
import SortByPrice from "./Components/SortByPrice";
import SortByTypes from "./Components/SortByTypes";
import PriceRange from "./Components/PriceRange";
import FilterByBrands from "./Components/FilterByBrands";

const Filter = () => {
  return (
    <div>
      <div className="filter_wrapper">
        <div className="d-flex items-center justify-between filter_heading">
          <p>Filters</p>
          <p>Clear</p>
        </div>
        <SortByPrice />
        <SortByTypes />
        <PriceRange />
        <FilterByBrands />
      </div>
    </div>
  );
};

export default Filter;
