import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useProducts } from "../../../Context/ProductsContext/ProductsContext";
import { SET_RATING } from "../../../Constant/FilterConstant/FilterConstant";

const FilterByRating = () => {
  const {
    dispatchFilter,
    filterState: { rating }
  } = useProducts();
  return (
    <div className="filter_heading">
      <p>Rating</p>
      <div>
        {[...Array(5)].map((_, i) => {
          return (
            <span
              key={i}
              className=" cursor-pointer "
              onClick={() =>
                dispatchFilter({ type: SET_RATING, payload: i + 1 })
              }
            >
              {rating >= i + 1 ? (
                <AiFillStar style={{ fontSize: "25px", color: "#F4B400" }} />
              ) : (
                <AiOutlineStar style={{ fontSize: "25px", color: "#F4B400" }} />
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default FilterByRating;
