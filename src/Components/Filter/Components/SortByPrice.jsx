import React from "react";
import { useProducts } from "../../../Context/ProductsContext/ProductsContext";
import { SET_SORT_BY } from "../../../Constant/FilterConstant/FilterConstant";

const SortByPrice = () => {
  const {
    dispatchFilter,
    filterState: { sortBy }
  } = useProducts();
  const LOW_TO_HIGH = "LOW_TO_HIGH";
  const HIGH_TO_LOW = "HIGH_TO_LOW";
  const LATEST = "LATEST";

  const sortTypes = [
    { value: LOW_TO_HIGH, name: "Price (Low to High)" },
    { value: HIGH_TO_LOW, name: "Price (High to Low)" },
    { value: LATEST, name: "Latest" }
  ];
  return (
    <div className="filter_heading  ">
      <p>Sort</p>
      <div className="d-flex flex-col">
        {sortTypes.map((item, idx) => (
          <label key={idx}>
            <input
              value={item.value}
              name="sort"
              type="radio"
              checked={sortBy === item.value}
              onChange={(e) =>
                dispatchFilter({ type: SET_SORT_BY, payload: e.target.value })
              }
            />{" "}
            {item.name}
          </label>
        ))}
      </div>
    </div>
  );
};

export default SortByPrice;
