import React from "react";
import { bannerImgLink } from "../../../StaticData";
import "./Banner.css";
import { Link } from "react-router-dom";
import { RESET_FILTER } from "../../../Constant/FilterConstant/FilterConstant";
import { useProducts } from "../../../Context";

const Banner = () => {
  const { dispatchFilter } = useProducts();
  return (
    <section>
      <div className="relative">
        <img src={bannerImgLink} className="banner_img" alt="banner-img" />
        <Link
          to={"/products"}
          onClick={() => dispatchFilter({ type: RESET_FILTER })}
        >
          <button className="shop_now_btn absolute cursor-pointer ">
            Shop now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Banner;
