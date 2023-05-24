import React from "react";
import "./Pagination.css";

const Pagination = ({ pages, setCurrPage, currPage }) => {
  return (
    <div>
      {pages.map((item, idx) => (
        <button
          onClick={() => setCurrPage(item)}
          className={`pagination_btn ${item === currPage && "active"}`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
