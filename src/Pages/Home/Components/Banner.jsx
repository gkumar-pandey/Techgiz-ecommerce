import React from "react";
import { bannerImgLink } from "../../../StaticData";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section>
      <div className="relative">
        <img src={bannerImgLink} className="banner_img" alt="banner-img" />
        <Link to={"/products"}>
          <button className="shop_now_btn absolute cursor-pointer ">
            Shop now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Banner;
