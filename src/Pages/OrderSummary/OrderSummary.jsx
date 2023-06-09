import React from "react";
import { useCheckout } from "../../Context";
import { AddressCard } from "../../Components";
import CheckoutProductCard from "../../Components/ProductCard/CheckoutProductCard";
import useDocumentTitle from "../../hook/useDocumentTitle";

const OrderSummary = () => {
  const {
    checkoutState: { orders }
  } = useCheckout();
  useDocumentTitle("Order");

  const {
    orderId,
    paymentId,
    date,
    products,
    address,
    totalAmount,
    totalPriceOfCartItems,
    deliveryCharges,
    discountPrice
  } = orders[0];

  return (
    <div className="d-flex justify-center san-serif m-1 ">
      <div className="  ">
        <div className="checkout_heading  ">
          <h2>Order Summary</h2>
        </div>

        <div className=" border-lightgrey p-4 card-shadow rounded ">
          <div className=" d-flex items-center justify-center p-1 ">
            <h2 className="text_green m-auto ">Order Confirmed</h2>
          </div>
          <div className=" font-semibold ">
            <p>Date : {date}</p>
            <p className=" py-1 ">Order Id : {orderId}</p>
            <p className="">Payment Id : {paymentId}</p>
          </div>

          <div>
            <p className="font-semibold py-1 text-sm ">Delivery Address</p>
            <AddressCard {...address} />
          </div>
          <div>
            <p className=" font-semibold py-1 text-sm  ">Price Details</p>
            <p className="d-flex  items-center justify-between ">
              <span>Total Price</span>
              <span>₹{totalPriceOfCartItems}</span>
            </p>
            <p className="d-flex  items-center justify-between ">
              <span>Total Discount</span>
              <span>₹{discountPrice}</span>
            </p>
            <p className="d-flex  items-center justify-between ">
              <span>Delivery Charges</span>
              <span>{deliveryCharges}</span>
            </p>
            <div className="d-flex  items-center justify-between font-bold ">
              <p>Total Amount </p>
              <p>₹{totalAmount}</p>
            </div>
          </div>
          <div>
            {products.map((product) => (
              <CheckoutProductCard {...product} key={product._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
