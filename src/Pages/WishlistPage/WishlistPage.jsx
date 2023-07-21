import React, { useEffect } from "react";
import "./WishlistPage.css";
import GridContainer from "../../Components/GridContainer/GridContainer";
import { useWishlist } from "../../Context/WishlistContext/WishlistContext";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { Link } from "react-router-dom";
import { getWishlistProducts } from "../../Services";
import useDocumentTitle from "../../hook/useDocumentTitle";

const WishlistPage = () => {
  const {
    wishlistProductState: { products },
    dispatchWishlist,
    isUserLoggedIn
  } = useWishlist();
  useDocumentTitle("Wishlist");

  useEffect(() => {
    if (isUserLoggedIn) {
      getWishlistProducts(dispatchWishlist);
    }
  }, []);

  return (
    <div className="wishlist_container">
      <div className="wishlist_wrapper">
        {products.length > 0 ? (
          <>
            <div className=" d-flex justify-center wishlist_heading ">
              <h2>My Wishlist</h2>
            </div>
            <GridContainer>
              {products.map((product) => (
                <ProductCard {...product} />
              ))}
            </GridContainer>
          </>
        ) : (
          <>
            <div className="d-flex justify-center items-center flex-col wishlist_empty_text ">
              <h2>Your wishlist is empty.</h2>
              <p>Explore more products</p>
              <Link to={"/products"}>
                <button className=" outlined-btn text-uppercase ">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
