import React from "react";
import { useProducts } from "../../../Context/ProductsContext/ProductsContext";
import { SET_FILTER_BY_BRAND } from "../../../Constant/FilterConstant/FilterConstant";

const FilterByBrands = () => {
  const productsBrands = ["JBL", "Sony", "Boat", "Mivi", "Marshell"];
  const {
    dispatchFilter,
    filterState: { filterByBrand }
  } = useProducts();

  return (
    <div className="filter_heading">
      <p>Brands</p>
      <div className="d-flex flex-col ">
        {productsBrands.map((brand, idx) => (
          <label key={idx}>
            <input
              value={brand}
              type="checkbox"
              checked={filterByBrand.includes(brand)}
              onChange={(e) => {
                dispatchFilter({
                  type: SET_FILTER_BY_BRAND,
                  payload: {
                    value: e.target.value,
                    isChecked: e.target.checked
                  }
                });
              }}
            />{" "}
            {brand}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterByBrands;
