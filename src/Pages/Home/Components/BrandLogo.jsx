import React from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../../../Context/ProductsContext/ProductsContext";
import {
  RESET_FILTER,
  SET_FILTER_BY_BRAND
} from "../../../Constant/FilterConstant/FilterConstant";
import { TopBrands } from "../../../StaticData";

const BrandLogo = ({ img, name }) => {
  const { dispatchFilter } = useProducts();
  const handleBrand = (brand) => {
    dispatchFilter({ type: RESET_FILTER });
    dispatchFilter({
      type: SET_FILTER_BY_BRAND,
      payload: { isChecked: true, value: brand.toLowerCase() }
    });
  };

  return (
    <div>
      <h2 className="d-flex justify-center my-2 py-4 brand_heading">
        Top Brands
      </h2>
      <div className="d-flex justify-center my-2 flex-wrap ">
        {TopBrands.map(({ name, img }, idx) => (
          <Link
            to={"/products"}
            onClick={() => handleBrand(name)}
            key={idx}
            className="brand d-flex items-center  cursor-pointer  m-2 card-shadow p-1"
          >
            <img className="brand_img" src={img} alt={name} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BrandLogo;
