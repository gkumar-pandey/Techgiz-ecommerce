import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => {
        return (
          <span key={i}>
            {rating >= i + 1 ? (
              <AiFillStar style={{ color: " #F4B400", fontSize: "1.2rem" }} />
            ) : (
              <AiOutlineStar style={{}} />
            )}
          </span>
        );
      })}
    </>
  );
};

export default Rating;
