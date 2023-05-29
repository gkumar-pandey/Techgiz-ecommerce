import React from "react";
import "./ProductCard.css";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

const ProductCard = ({
  productName,
  image,
  alt,
  description,
  price,
  oldPrice,
  discount,
  rating,
  inStock
}) => {
  return (
    <>
      <div className="product_card px-1 d-flex flex-col justify-between ">
        <div className="product_img_container">
          <img className="product_img" src={image} alt={alt} />
        </div>

        <div className="product_info   ">
          <p className="product_name">{productName}</p>
          <p className="product_description">{description}</p>
          <p className="product_price">
            {price} <span className="product_old_price">{oldPrice}</span>
          </p>
        </div>
        <button className="product_btn d-flex items-center justify-center w-full solid-btn">
          <AiOutlineShoppingCart className="icon" />
          Add to cart
        </button>
        <AiOutlineHeart className="wishlist_icon" />
        {!inStock && (
          <div className="out_of_stock_label">
            <p>Out of Stock</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductCard;
