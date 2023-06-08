import React from "react";
import { BsCashStack } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaExchangeAlt } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineShoppingCart
} from "react-icons/ai";

import Rating from "../Rating/Rating";
import { useAuth, useCart, useWishlist } from "../../Context";
import axios from "axios";
import { toast } from "react-hot-toast";
import { SET_ADD_TO_CART, SET_ADD_TO_WISHLIST } from "../../Constant";
import { getProductById } from "../../Utils";

const ProductDetails = ({ product }) => {
  const { dispatchCart, cartState } = useCart();
  const { dispatchWishlist, wishlistProductState } = useWishlist();
  const { isUserLoggedIn, user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const isProductInCart = getProductById(cartState.products, product._id);
  const isProductInWishlist = getProductById(
    wishlistProductState.products,
    product._id
  );

  const handleAddToCart = async (product) => {
    if (isUserLoggedIn) {
      try {
        const { status, data } = await axios.post(
          "/api/user/cart",
          { product },
          {
            headers: {
              authorization: user.token
            }
          }
        );
        if (status === 201) {
          dispatchCart({ type: SET_ADD_TO_CART, payload: data.cart });
          toast.success(`${product.productName} added to cart`);
        } else {
          toast.error("Error, Something went wrong!!");
        }
      } catch (error) {
        console.error(error.message);
        toast.error(error.message);
      }
    } else {
      navigate("/login", { state: { from: location } });
    }
  };

  const handleAddToWishlist = async (product) => {
    if (isUserLoggedIn) {
      try {
        const { data, status } = await axios.post(
          "/api/user/wishlist",
          { product },
          { headers: { authorization: user.token } }
        );
        if (status === 201) {
          dispatchWishlist({
            type: SET_ADD_TO_WISHLIST,
            payload: data.wishlist
          });

          toast.success(`${product.productName} added to wishlist `);
        } else {
          toast.error("Error, Something went wrong!!");
        }
      } catch (error) {
        console.error(error.message);
        toast.error(error.message);
      }
    } else {
      navigate("/login", { state: { from: location } });
    }
  };
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
                <button className="solid-btn btn-disable ">Out of stock</button>
              ) : isProductInCart ? (
                <Link to={"/cart"} className="link">
                  <button className="solid-btn d-flex items-center justify-center ">
                    <span>Go to cart</span>
                    <FiArrowRight style={{ fontSize: "1.5rem" }} />
                  </button>
                </Link>
              ) : (
                <button
                  className=" solid-btn d-flex items-center justify-between "
                  onClick={() => handleAddToCart(product)}
                >
                  <AiOutlineShoppingCart style={{ fontSize: "1.5rem" }} />
                  <span className="mx-1">Add to cart</span>
                </button>
              )}

              {isProductInWishlist ? (
                <button className="outlined-btn d-flex items-center justify-center ">
                  <AiFillHeart style={{ fontSize: "1.5rem", color: "red" }} />
                  <span className="mx-1">Wishlist</span>
                </button>
              ) : (
                <button
                  className=" outlined-btn d-flex items-center justify-between "
                  onClick={() => handleAddToWishlist(product)}
                >
                  <AiOutlineHeart style={{ fontSize: "1.5rem" }} />{" "}
                  <span className="mx-1">Wishlist</span>
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
