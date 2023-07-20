import React, { useEffect, useState } from "react";
import { useProducts } from "../../../Context/ProductsContext/ProductsContext";
import { getCategory } from "../../../Services";
import {
  RESET_FILTER,
  SET_FILTER_BY_TYPE
} from "../../../Constant/FilterConstant/FilterConstant";
import { Link } from "react-router-dom";

const CategoryCard = () => {
  const [category, setCategory] = useState([]);
  const { dispatchFilter } = useProducts();

  useEffect(() => {
    getCategory(setCategory);
  }, []);

  const handleCategory = (category) => {
    dispatchFilter({ type: RESET_FILTER });
    dispatchFilter({
      type: SET_FILTER_BY_TYPE,
      payload: { isChecked: true, value: category.toLowerCase() }
    });
  };
  return (
    <div>
      <h2 className="d-flex justify-center my-2 py-4 brand_heading">
        Shop By Category
      </h2>
      <div className="d-flex flex-row justify-center my-2  flex-wrap">
        {category.map(({ categoryName, _id, img }) => (
          <Link
            to={"/products"}
            onClick={() => handleCategory(categoryName)}
            className="link"
            key={_id}
          >
            <div className="category_card cursor-pointer m-2 ">
              <div className="category_wrapper d-flex justify-center items-center flex-col p-1 ">
                <div className="category_img p-1">
                  <img src={img} alt={categoryName} />
                </div>
                <p className="category_name my-1">{categoryName}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
