import React from "react";

const CheckoutProductCard = ({
  image,
  description,
  alt,
  qty,
  productName,
  price
}) => {
  return (
    <>
      <div className="checkout_product_card m-1 ">
        <div className="d-flex">
          <div className="checkout_product_img">
            <img src={image} alt={alt} />
          </div>
          <div className=" d-flex flex-col justify-between p-1 ">
            <div className="checkout_product_info">
              <p className="product_name">{productName}</p>
              <p className="product_disc">{description}</p>
            </div>
            <div className="d-flex items-center  ">
              <p className="px-1">Quantity : {qty}</p>
              <p className="mx-2">Price: ₹{price}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutProductCard;
