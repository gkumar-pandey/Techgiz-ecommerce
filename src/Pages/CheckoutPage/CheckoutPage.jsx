import React, { useState } from "react";
import "./checkout.css";
import { useCart, useCheckout } from "../../Context";
import CheckoutDetails from "./Components/CheckoutDetails/CheckoutDetails";
import Modal from "../../Components/Modal/Modal";
import { AddressCard, AddressListing, AddressForm } from "../../Components";
import CheckoutProductCard from "../../Components/ProductCard/CheckoutProductCard";

const CheckoutPage = () => {
  const { cartState } = useCart();
  const {
    checkoutState: { defaultAddress }
  } = useCheckout();
  const [openChangeAddress, setOpenChangeAddress] = useState(false);
  const [openAddressForm, setOpenAddressForm] = useState(false);

  const handleAddressFormModal = () => {
    setOpenAddressForm(!openAddressForm);
  };

  return (
    <div className="checkout_container">
      <div className="checkout_heading">
        <h2>Checkout</h2>
      </div>
      <div className="checkout_wrapper">
        <div className="checkout_address_products">
          <div className="d-flex  justify-between  m-1 items-center  ">
            <p className="  font-bold text-uppercase">Delivery Address</p>
            <button
              className=" outlined-btn"
              onClick={() => setOpenChangeAddress(true)}
            >
              Change Address{" "}
            </button>
          </div>
          <div className="checkout_address d-flex  border-lightgrey rounded m-1 p-1 ">
            <div className="mx-1">
              <input
                type="radio"
                value={"address"}
                onChange={() => null}
                checked={true}
              />
            </div>
            <AddressCard {...defaultAddress} />
          </div>
          <div className="checkout_products d-flex flex-col ">
            {cartState.products.map((product) => (
              <CheckoutProductCard {...product} key={product._id} />
            ))}
          </div>
        </div>
        <>
          <CheckoutDetails />
        </>
      </div>
      {openAddressForm && (
        <Modal>
          <AddressForm handleAddressFormModal={handleAddressFormModal} />
        </Modal>
      )}
      {openChangeAddress && (
        <Modal>
          <AddressListing
            setOpenChangeAddress={setOpenChangeAddress}
            setOpenAddressForm={setOpenAddressForm}
          />
        </Modal>
      )}
    </div>
  );
};

export default CheckoutPage;
