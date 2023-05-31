import React from "react";
import "./CartPage.css";
import HorizontalProductCard from "../../Components/ProductCard/HorizontalProductCard";
import PriceDetails from "./Components/PriceDetails";

const CartPage = () => {
  return (
    <div className=" cart_container   ">
      <div className="cart_heading">
        <h2>Shopping Cart (4) </h2>
      </div>
      <div className="cart w-full ">
        <div className="cart_products mx-1 ">
          <HorizontalProductCard />
        </div>
        <div className=" cart_details  ">
          <PriceDetails />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
