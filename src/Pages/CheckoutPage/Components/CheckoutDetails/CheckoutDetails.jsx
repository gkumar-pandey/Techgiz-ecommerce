import React from "react";
import "./checkoutDetails.css";
import { useAuth, useCart, useCheckout } from "../../../../Context";
import { toast } from "react-hot-toast";
import { v4 as uuid } from "uuid";
import { SAVE_ORDER, SET_ADD_TO_CART } from "../../../../Constant";
import { useNavigate } from "react-router-dom";
import { getDate } from "../../../../Utils/checkout/checkout";
import { AddressCard } from "../../../../Components";

const CheckoutDetails = () => {
  const {
    cartState: { products },
    dispatchCart
  } = useCart();
  const {
    checkoutState: { defaultAddress },
    totalPriceOfCartItems,
    deliveryCharges,
    totalProductQty,
    discountPrice,
    totalAmount,
    dispatchCheckout
  } = useCheckout();
  const { user } = useAuth();

  const navigate = useNavigate();
  const discount = 200;

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      document.body.appendChild(script);
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
    });
  };

  const displayRazorpay = async () => {
    const respose = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!respose) {
      toast.error("error", "Razorpay SDK failed to load.");
      return;
    }

    const options = {
      key: "rzp_test_Q4WcLMWlIe6qSa",
      amount: (totalAmount - discountPrice - discount) * 100,
      currency: "INR",
      name: "TechGiz Ecommerce",
      description: "Enjoy the products & thanks for shopping with us.",
      // image: logo,

      handler: ({ razorpay_payment_id }) => {
        // save order
        dispatchCheckout({
          type: SAVE_ORDER,
          payload: {
            orderId: uuid(),
            paymentId: razorpay_payment_id,
            date: getDate(),
            totalAmount: totalAmount - discount - discountPrice,
            discountPrice: discount + discountPrice,
            deliveryCharges,
            totalPriceOfCartItems,
            address: defaultAddress,
            products: [...products]
          }
        });

        // empty cart
        dispatchCart({ type: SET_ADD_TO_CART, payload: [] });
        navigate("/orders");
      },
      prefill: {
        name: user.firstName + " " + user.lastName,
        email: user.email,
        contact: "9988776655"
      },
      theme: {
        color: "#302f34"
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    paymentObject.on("payment.failed", () => {
      toast.error("error", "Payment failed, please try again.");
    });
  };

  return (
    <div className="order_details">
      <div>
        <div className="heading p-1">
          <p>Price Details</p>
        </div>
        <div className="my-2">
          <div className="d-flex items-center justify-between my-1 ">
            <p>Price ({totalProductQty} items) </p>
            <p>₹{totalPriceOfCartItems}</p>
          </div>
          <div className=" d-flex items-center justify-between my-1 ">
            <p>Discount</p>
            <p>-₹{discount}</p>
          </div>
          <div className=" d-flex items-center justify-between my-1 ">
            <p>Delivery Charges</p>
            <p>{deliveryCharges}</p>
          </div>
          <div className=" d-flex items-center justify-between my-1 ">
            <p>Coupon Discount</p>
            <p className="text_green">₹{discountPrice}</p>
          </div>
        </div>
        <div className=" d-flex items-center justify-between font-bold  ">
          <p>Total Amount</p>
          <p>₹{totalAmount - discount - discountPrice}</p>
        </div>
        <div className="heading p-1 my-2 ">
          <p>Deliver to</p>
        </div>
        <div>
          <AddressCard {...defaultAddress} />
        </div>
        <button onClick={displayRazorpay} className="solid-btn w-full ">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutDetails;
