import React from "react";
import Banner from "./Components/Banner";
import { bannerImg2, bannerImg3 } from "../../StaticData";
import "./Home.css";
import BrandLogo from "./Components/BrandLogo";
import CategoryCard from "./Components/CategoryCard";
import { Link } from "react-router-dom";
import { useProducts } from "../../Context/ProductsContext/ProductsContext";
import {
  RESET_FILTER,
  SET_FILTER_BY_BRAND,
  SET_FILTER_BY_TYPE
} from "../../Constant/FilterConstant/FilterConstant";
import useDocumentTitle from "../../hook/useDocumentTitle";

const Home = () => {
  const { dispatchFilter } = useProducts();
  useDocumentTitle("Home");

  const handleBanner = (brand, category) => {
    dispatchFilter({ type: RESET_FILTER });
    dispatchFilter({
      type: SET_FILTER_BY_BRAND,
      payload: { isChecked: true, value: brand.toLowerCase() }
    });
    dispatchFilter({
      type: SET_FILTER_BY_TYPE,
      payload: { isChecked: true, value: category.toLowerCase() }
    });
  };

  return (
    <div>
      <Banner />
      <div className="d-flex flex-row banner_container ">
        <div className="banner_img_container">
          <Link
            to={"/products"}
            onClick={() => handleBanner("jbl", "wireless")}
          >
            <img
              className="banner-img card-shadow cursor-pointer"
              src={bannerImg3}
              alt="banner-img-3"
            />
          </Link>
        </div>

        <div className="banner_img_container">
          <Link
            to={"/products"}
            onClick={() => handleBanner("boat", "speakers")}
          >
            <img
              className="banner-img card-shadow cursor-pointer "
              src={bannerImg2}
              alt="banner-img-2"
            />
          </Link>
        </div>
      </div>
      <BrandLogo />
      <CategoryCard />
    </div>
  );
};

export default Home;
