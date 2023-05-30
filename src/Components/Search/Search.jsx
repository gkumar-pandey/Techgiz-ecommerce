import React from "react";
import { BiSearch } from "react-icons/bi";
import "./Search.css";
import { useProducts } from "../../Context/ProductsContext/ProductsContext";
import { SET_FILTER_BY_SEARCH } from "../../Constant/FilterConstant/FilterConstant";

const Search = () => {
  const { dispatchFilter } = useProducts();
  return (
    <>
      <div className=" d-flex items-center search_bar">
        <button className="d-flex items-center justify-center">
          <BiSearch className="search_bar_icon" />
        </button>
        <input
          className="search_input"
          type="text"
          placeholder="Search..."
          onChange={(e) =>
            dispatchFilter({
              type: SET_FILTER_BY_SEARCH,
              payload: e.target.value
            })
          }
        />
      </div>
    </>
  );
};

export default Search;
