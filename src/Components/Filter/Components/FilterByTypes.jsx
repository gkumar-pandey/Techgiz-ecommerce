import React from "react";
import { useProducts } from "../../../Context/ProductsContext/ProductsContext";
import { SET_FILTER_BY_TYPE } from "../../../Constant/FilterConstant/FilterConstant";

const FilterByTypes = () => {
  const {
    dispatchFilter,
    filterState: { filterByType }
  } = useProducts();

  const productTypes = ["Wired", "Wireless", "Speakers", "Noise Cancellation"];

  return (
    <div className="filter_heading">
      <p>Types</p>
      <div className="d-flex flex-col">
        {productTypes.map((type, idx) => (
          <label key={idx}>
            <input
              value={type}
              checked={filterByType.includes(type)}
              onChange={(e) =>
                dispatchFilter({
                  type: SET_FILTER_BY_TYPE,
                  payload: {
                    value: e.target.value,
                    isChecked: e.target.checked
                  }
                })
              }
              type="checkbox"
            />{" "}
            {type}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterByTypes;
