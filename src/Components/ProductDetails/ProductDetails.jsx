import React from "react";
import { BsCashStack } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaExchangeAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import Rating from "../Rating/Rating";

const ProductDetails = ({
  product,
  handleAddToCart,
  handleAddToWishlist,
  isProductInCart,
  isProductInWishlist
}) => {
  return (
    <>
      <div className="product_details_wrapper d-flex   ">
        <div className="product_details_img">
          <img src={product?.image} alt={product?.alt} />
        </div>
        <div className="product_details_info">
          <div>
            <p className="product_details_name">{product?.productName}</p>
            <p className="product_details_desc">{product?.description}</p>
            <div>
              <Rating rating={product?.rating} />
            </div>
          </div>
          <div className="product_details_price_info ">
            <span className="product_details_price">{product?.price}</span>{" "}
            <span className="product_details_old_price">
              {product?.oldPrice}
            </span>
            <span className="product_details_discount">
              ({product?.discount}% off)
            </span>
            <p className="inclusive_text my-1 ">Price inclusive of all taxes</p>
            <div className="product_details_btn">
              {!product?.inStock ? (
                <button className="solid-btn">Out of stock</button>
              ) : isProductInCart ? (
                <Link to={"/cart"}>
                  <button className="solid-btn">Go to cart</button>
                </Link>
              ) : (
                <button
                  className=" solid-btn"
                  onClick={() => handleAddToCart()}
                >
                  Add to cart
                </button>
              )}

              {isProductInWishlist ? (
                <button className="outlined-btn">Added to wishlist</button>
              ) : (
                <button
                  className=" outlined-btn"
                  onClick={() => handleAddToWishlist()}
                >
                  Add to wishlist
                </button>
              )}
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
    </>
  );
};

export default ProductDetails;
