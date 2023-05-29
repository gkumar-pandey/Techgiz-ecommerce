import React, { useEffect, useState } from "react";
import Banner from "./Components/Banner";
import { TopBrands, bannerImg2, bannerImg3 } from "../../StaticData";
import "./Home.css";
import BrandLogo from "./Components/BrandLogo";
import { getCategory } from "../../Services";
import CategoryCard from "./Components/CategoryCard";

const Home = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getCategory(setCategory);
  }, []);

  console.log(category);

  return (
    <div>
      <Banner />
      <div className="d-flex flex-row banner_container ">
        <div className="banner_img_container">
          <img
            className="banner-img card-shadow cursor-pointer"
            src={bannerImg3}
            alt="banner-img-3"
          />
        </div>
        <div></div>
        <div className="banner_img_container">
          <img
            className="banner-img card-shadow cursor-pointer "
            src={bannerImg2}
            alt="banner-img-2"
          />
        </div>
      </div>
      <div>
        <h2 className="d-flex justify-center my-2 py-4 brand_heading">
          Top Brands
        </h2>
        <div className="d-flex justify-center my-2 flex-wrap ">
          {TopBrands.map((item, idx) => (
            <BrandLogo key={idx} {...item} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="d-flex justify-center my-2 py-4 brand_heading">
          Shop By Category
        </h2>
        <div className="d-flex flex-row justify-evenly my-2 flex-wrap">
          {category.map((item) => (
            <CategoryCard key={item._id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
