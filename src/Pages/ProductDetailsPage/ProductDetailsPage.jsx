import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { BsCashStack } from "react-icons/bs";
import { FaExchangeAlt } from "react-icons/fa";
import "./ProductDetails.css";
import Rating from "./Components/Rating";
import SimilarProductsComp from "./Components/SimilarProductsComp";

const ProductDetailsPage = () => {
  const product = {
    brand: "boat",
    type: "Wired",
    addedInYear: 2022,
    alt: "boAt BassHeads 225",
    productName: "boAt BassHeads 225",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1684504951/TechGiz/product-2.jpg",
    description:
      "Wired Earphone having 10mm Driver, Passive Noise Cancellation, Polished Metal Design, Hands-free communication",
    price: "699.00",
    oldPrice: "999.00",
    inStock: true,
    discount: 30,
    rating: 4.9
  };
  return (
    <div className="  d-flex justify-center items-center   product_details ">
      <div className="product_container  ">
        <div className="product_details_wrapper d-flex   ">
          <div className="product_details_img">
            <img src={product.image} alt={product.alt} />
          </div>
          <div className="product_details_info">
            <div>
              <p className="product_details_name">{product.productName}</p>
              <p className="product_details_desc">{product.description}</p>
              <div>
                <Rating rating={product.rating} />
              </div>
            </div>
            <div className="product_details_price_info ">
              <span className="product_details_price">{product.price}</span>{" "}
              <span className="product_details_old_price">
                {product.oldPrice}
              </span>
              <span className="product_details_discount">
                ({product.discount}% off)
              </span>
              <p className="inclusive_text my-1 ">
                Price inclusive of all taxes
              </p>
              <div>
                <button className=" solid-btn ">Add to cart</button>
                <button className=" outlined-btn ">Add to wishlist</button>
              </div>
            </div>
            <div>
              <p>100% original product </p>
              <p className="text_icon">
                <TbTruckDelivery className="icon" />
                <span>Fast delivery </span>
              </p>
              <p className="text_icon">
                <BsCashStack className="icon" />
                <span>Cash on delivery available</span>
              </p>
              <p className="text_icon">
                <FaExchangeAlt className="icon" />
                <span>7 days exchange available</span>
              </p>
            </div>
          </div>
        </div>
        <SimilarProductsComp type={product.type} brand={product.brand} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
