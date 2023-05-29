import React from "react";

const SortByTypes = () => {
  return (
    <div className="filter_heading">
      <p>Types</p>
      <div className="d-flex flex-col">
        <label>
          <input type="checkbox" /> Wired
        </label>
        <label>
          <input type="checkbox" /> Wireless
        </label>
        <label>
          <input type="checkbox" /> Speakers
        </label>
        <label>
          <input type="checkbox" /> Noise Cancelling
        </label>
      </div>
    </div>
  );
};

export default SortByTypes;
