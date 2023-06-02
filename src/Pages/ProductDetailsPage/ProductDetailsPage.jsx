import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";

import "./ProductDetails.css";
import { addToCart, getSingleProduct } from "../../Services";
import { useAuth, useCart, useWishlist } from "../../Context";
import { getProductById } from "../../Utils";
import { SET_ADD_TO_CART, SET_ADD_TO_WISHLIST } from "../../Constant";
import { Loader, ProductDetails } from "../../Components";
import SimilarProdComp from "./Components/SimilarProdComp";

const ProductDetailsPage = () => {
  const [product, setProduct] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const {
    dispatchCart,
    cartState: { products }
  } = useCart();
  const { isUserLoggedIn, encodedToken } = useAuth();
  const { dispatchWishlist, wishlistProductState } = useWishlist();
  const isProductInCart = getProductById(products, product?._id);
  const isProductInWishlist = getProductById(
    wishlistProductState.products,
    product?._id
  );
  const navigate = useNavigate();
  window.scrollTo(0, 0);

  useEffect(() => {
    getSingleProduct(id, setProduct, setIsLoading);
  }, [id]);

  const handleAddToCart = async (product) => {
    if (isUserLoggedIn) {
      await addToCart(product, dispatchCart);
    } else {
      navigate("/login");
    }
  };

  const handleAddToWishlist = async () => {
    if (isUserLoggedIn) {
      try {
        const { data, status } = await axios.post(
          "/api/user/wishlist",
          { product },
          { headers: { authorization: encodedToken } }
        );
        if (status === 201) {
          dispatchWishlist({
            type: SET_ADD_TO_WISHLIST,
            payload: data.wishlist
          });
          toast.success(`${product.productName} added to wishlist`);
        }
      } catch (error) {
        toast.error("Error, something went wrong!!");
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="d-flex justify-center items-center   product_details ">
      <div className="product_container">
        {!isLoading ? (
          <ProductDetails
            product={product}
            handleAddToCart={handleAddToCart}
            handleAddToWishlist={handleAddToWishlist}
            isProductInCart={isProductInCart}
            isProductInWishlist={isProductInWishlist}
          />
        ) : (
          <Loader />
        )}
        <SimilarProdComp type={product?.type} brand={product?.brand} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
