import React from "react";

const CategoryCard = ({ _id, img, categoryName }) => {
  return (
    <div className="category_card cursor-pointer m-2 ">
      <div className="category_wrapper d-flex justify-center items-center flex-col p-1 ">
        <div className="category_img p-1">
          <img src={img} alt={categoryName} />
        </div>
        <p className="category_name my-1">{categoryName}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
