import React from "react";

const SortByPrice = () => {
  return (
    <div className="filter_heading  ">
      <p>Sort</p>
      <div className="d-flex flex-col">
        <label>
          <input type="radio" /> Price (Low to High)
        </label>
        <label>
          <input type="radio" /> Price (High to Low)
        </label>
        <label>
          <input type="radio" /> Latest
        </label>
      </div>
    </div>
  );
};

export default SortByPrice;
