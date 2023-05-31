import React from "react";

const PriceDetails = () => {
  return (
    <div className="priced_details mx-1 ">
      <div className="price_details_wrapper d-flex flex-col ">
        <button className=" outlined-btn apply_coupon_btn ">
          Apply Coupon
        </button>

        <div className="price_details_info">
          <div className="price_details_heading my-1 ">
            <p>Price Details</p>
          </div>
          <div>
            <div className="d-flex justify-between items-center my-1 ">
              <p>Price(1 items)</p>
              <p>600</p>
            </div>
            <div className="d-flex justify-between items-center my-1">
              <p>Price Discount</p>
              <p className="rupee text_green ">200</p>
            </div>
            <div className=" d-flex justify-between items-center my-1 ">
              <p>Delivery Charges</p>
              <p className="text_green">Free</p>
            </div>
          </div>
          <div className="d-flex justify-between items-center my-1 text_bold py-4 total_price ">
            <p>Total Amount</p>
            <p className="rupee">9300</p>
          </div>
          <p className="text_green">
            You will save <span className="rupee">200</span> on this order
          </p>
          <button className=" solid-btn w-full ">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default PriceDetails;
