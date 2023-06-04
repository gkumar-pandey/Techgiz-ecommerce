import React from "react";
import { useProducts } from "../../../Context/ProductsContext/ProductsContext";
import {
  SET_FILTER_BY_IN_STOCK,
  SET_FILTER_BY_OUT_OF_STOCK,
  SET_MAX_PRICE
} from "../../../Constant/FilterConstant/FilterConstant";

const PriceRange = () => {
  const {
    dispatchFilter,
    filterState: { filterByInStock, filterByOutOfStock, maxRange }
  } = useProducts();

  return (
    <div className="filter_heading">
      <p>Price & In Stock</p>
      <div className="d-flex flex-col">
        <label>
          <input
            onChange={(e) =>
              dispatchFilter({
                type: SET_FILTER_BY_IN_STOCK,
                payload: e.target.checked
              })
            }
            checked={filterByInStock}
            type="checkbox"
          />{" "}
          In Stock
        </label>
        <label>
          <input
            type="checkbox"
            onChange={(e) =>
              dispatchFilter({
                type: SET_FILTER_BY_OUT_OF_STOCK,
                payload: e.target.checked
              })
            }
            checked={filterByOutOfStock}
          />{" "}
          Out Of Stock
        </label>
        <label>Price Range: 0 to {maxRange}</label>
        <input
          type="range"
          min={0}
          max={20000}
          value={maxRange}
          step={500}
          onChange={(e) => {
            dispatchFilter({ type: SET_MAX_PRICE, payload: e.target.value });
          }}
        />
      </div>
    </div>
  );
};

export default PriceRange;
