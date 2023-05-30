import React from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

import "./Pagination.css";

const Pagination = ({ pages, pageHandler, currPage }) => {
  return (
    <div className=" d-flex justify-center items-center ">
      <button
        onClick={() => pageHandler(currPage - 1)}
        className="pagination_btn active d-flex items-center justify-center"
      >
        <MdKeyboardArrowLeft className="arrow_icon " />
      </button>
      {pages.map((item, idx) => (
        <button
          key={idx}
          onClick={() => pageHandler(item)}
          className={`pagination_btn ${item === currPage && "active"}`}
        >
          {item}
        </button>
      ))}
      <button
        className="pagination_btn active d-flex items-center justify-center "
        onClick={() => pageHandler(currPage + 1)}
      >
        <MdKeyboardArrowRight className="arrow_icon" />
      </button>
    </div>
  );
};

export default Pagination;
