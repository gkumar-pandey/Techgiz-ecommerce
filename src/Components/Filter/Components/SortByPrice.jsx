import React from "react";
import { useProducts } from "../../../Context/ProductsContext/ProductsContext";
import { SET_SORT_BY } from "../../../Constant/FilterConstant/FilterConstant";

const SortByPrice = () => {
  const { dispatchFilter } = useProducts();
  const LOW_TO_HIGH = "LOW_TO_HIGH";
  const HIGH_TO_LOW = "HIGH_TO_LOW";
  const LATEST = "LATEST";
  return (
    <div className="filter_heading  ">
      <p>Sort</p>
      <div className="d-flex flex-col">
        <label>
          <input
            value={LOW_TO_HIGH}
            onChange={(e) =>
              dispatchFilter({ type: SET_SORT_BY, payload: e.target.value })
            }
            name="sort"
            type="radio"
          />{" "}
          Price (Low to High)
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value={HIGH_TO_LOW}
            onChange={(e) =>
              dispatchFilter({ type: SET_SORT_BY, payload: e.target.value })
            }
          />{" "}
          Price (High to Low)
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            value={LATEST}
            onChange={(e) =>
              dispatchFilter({ type: SET_SORT_BY, payload: e.target.value })
            }
          />{" "}
          Latest
        </label>
      </div>
    </div>
  );
};

export default SortByPrice;
