import React from "react";
import "./ProductCard.css";
const HorizontalProductCard = () => {
  const products = {
    brand: "JBL",
    type: "Wired",
    addedInYear: 2022,
    alt: "JBL C50HI",
    productName: "JBL C50HI",
    image:
      "https://res.cloudinary.com/dlykup1dh/image/upload/v1684508230/TechGiz/product-14.png",
    description: "Waterproof Wired Sports In-Ear Headphones",
    price: "499.00",
    oldPrice: "999.00",
    inStock: true,
    discount: 60,
    rating: 2.8
  };

  return (
    <div className="horizontal_product m-1 ">
      <div className="horizontal_product_wrapper d-flex ">
        <div className="horizontal_product_img p-1 ">
          <img src={products.image} alt={products.alt} />
        </div>
        <div className="horizontal_product_info m-1  ">
          <p className=" product_name ">{products.productName}</p>
          <div>
            <span className="product_price">{products.price}</span>
            <span className="product_old_price">{products.oldPrice}</span>
          </div>
          <p className="horizontal_product_discount py-1 ">
            <span className="discount"> {products.discount}</span>{" "}
            <span>off</span>
          </p>
          <div className="d-flex py-1   flex-row items-center ">
            <p>Quantity</p>
            <div className=" d-flex justify-center items-center mx-1 ">
              <button className=" inc_dec_btn d-flex items-center justify-center ">
                -
              </button>
              <span className=" px-1 product_qty ">{3}</span>
              <button className=" inc_dec_btn d-flex items-center justify-center ">
                +
              </button>
            </div>
          </div>
          <div className="horizontal_product_btn d-flex flex-wrap ">
            <button className=" solid-btn mr-2  "> Add to Wishlist</button>
            <button className=" outlined-btn   ">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalProductCard;
