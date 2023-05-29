import React from "react";
import "./ProductCard.css";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineShoppingCart
} from "react-icons/ai";
import { useWishlist } from "../../Context/WishlistContext/WishlistContext";
import {
  REMOVE_FROM_WISHLIST,
  SET_ADD_TO_WISHLIST
} from "../../Constant/WishlistConstant/WishlistConstant";
import { getProductById } from "../../Utils";

const ProductCard = (props) => {
  const {
    productName,
    image,
    alt,
    description,
    price,
    oldPrice,
    discount,
    rating,
    inStock,
    _id
  } = props;

  const {
    dispatchWishlist,
    wishlistProductState: { products }
  } = useWishlist();

  const addToWishlistHandler = () => {
    dispatchWishlist({ type: SET_ADD_TO_WISHLIST, payload: props });
  };

  const removeFromWishlistHandler = () => {
    dispatchWishlist({ type: REMOVE_FROM_WISHLIST, payload: _id });
  };

  const isProdAvailableInWishlist = getProductById(products, _id);

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
        {isProdAvailableInWishlist ? (
          <AiFillHeart
            className="wishlist_icon"
            onClick={removeFromWishlistHandler}
          />
        ) : (
          <AiOutlineHeart
            className="wishlist_icon"
            onClick={addToWishlistHandler}
          />
        )}

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
