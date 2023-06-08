import React from "react";
import { RxCross2 } from "react-icons/rx";

const DiscountComp = ({
  handleModal,
  handleDiscountCoupon,
  discountCoupon
}) => {
  return (
    <div>
      <div className="d-flex justify-between ">
        <p className=" font-bold ">Special Coupon</p>
        <RxCross2
          style={{ fontSize: "1.5rem", cursor: "pointer" }}
          onClick={handleModal}
        />
      </div>
      <div>
        <div className="d-flex  items-center my-2 ">
          <input
            type="checkbox"
            checked={discountCoupon.includes("OFF100")}
            name="discount"
            onChange={handleDiscountCoupon}
            value={"OFF100"}
          />
          <p className="mx-2">
            ₹100 off on total amount <span className=" font-bold ">OFF100</span>
          </p>
        </div>
        <div className=" d-flex items-center ">
          <input
            type="checkbox"
            checked={discountCoupon.includes("10%NEWUSER")}
            name="discount"
            value={"10%NEWUSER"}
            onChange={handleDiscountCoupon}
          />
          <p className="mx-2">
            10% off for new users{" "}
            <span className=" font-bold ">10%NEWUSER</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiscountComp;
