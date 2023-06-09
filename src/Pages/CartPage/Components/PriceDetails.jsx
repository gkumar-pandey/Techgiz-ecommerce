import React from "react";
import { MdOutlineDiscount } from "react-icons/md";
import { Link } from "react-router-dom";

const PriceDetails = ({
  handleModal,
  totalAmount,
  totalPrice,
  totalProductQty,
  discountPrice,
  deliveryCharges
}) => {
  return (
    <div className="priced_details mx-1 ">
      <div className="price_details_wrapper d-flex flex-col ">
        <button
          onClick={handleModal}
          className=" outlined-btn apply_coupon_btn d-flex items-center justify-center "
        >
          <MdOutlineDiscount style={{ fontSize: "1.2rem" }} />
          <span className="mx-1">Apply Coupon</span>
        </button>

        <div className="price_details_info">
          <div className="price_details_heading my-1 ">
            <p>Price Details</p>
          </div>
          <div>
            <div className="d-flex justify-between items-center my-1 ">
              <p>Price({totalProductQty} items)</p>
              <p>{totalPrice}</p>
            </div>
            <div className="d-flex justify-between items-center my-1">
              <p>Price Discount</p>
              <p className="rupee text_green ">200</p>
            </div>
            <div className=" d-flex justify-between items-center my-1 ">
              <p>Delivery Charges</p>
              <p className={totalPrice > 1000 && "text_green"}>
                {deliveryCharges}
              </p>
            </div>
          </div>
          <div className="d-flex justify-between items-center my-1 text_bold py-4 total_price ">
            <p>Total Amount</p>
            <p className="rupee">{totalAmount - discountPrice - 200}</p>
          </div>
          {discountPrice ? (
            <p className="text_green">
              You will save <span className="rupee">{discountPrice}</span> on
              this order
            </p>
          ) : (
            ""
          )}
          <Link to={"/checkout"} className="link">
            <button className=" solid-btn w-full ">Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PriceDetails;
