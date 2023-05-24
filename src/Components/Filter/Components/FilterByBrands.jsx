import React from "react";

const FilterByBrands = () => {
  return (
    <div className="filter_heading">
      <p>Brands</p>
      <div className="d-flex flex-col ">
        <label>
          <input type="checkbox" /> JBL
        </label>
        <label>
          <input type="checkbox" /> Sony
        </label>
        <label>
          <input type="checkbox" /> Boat
        </label>
        <label>
          <input type="checkbox" /> Mivi
        </label>
        <label>
          <input type="checkbox" /> Marshell
        </label>
      </div>
    </div>
  );
};

export default FilterByBrands;
