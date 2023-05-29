import React from "react";

const PriceRange = () => {
  return (
    <div className="filter_heading">
      <p>Price & In Stock</p>
      <div className="d-flex flex-col">
        <label>
          <input type="checkbox" /> In Stock
        </label>
        <label>Price Range: 0 to 5000</label>
        <input type="range" min={0} max={5000} />
      </div>
    </div>
  );
};

export default PriceRange;
