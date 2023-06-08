import React from "react";
import { RxCross2 } from "react-icons/rx";

import "./addressesListing.css";
import AddressCard from "../AddressCard/AddressCard";
import { useCheckout } from "../../../Context";
import { SET_DEFAULT_ADDRESS } from "../../../Constant";

const AddressListing = ({ setOpenChangeAddress, setOpenAddressForm }) => {
  const {
    checkoutState: { addresses, defaultAddress },
    dispatchCheckout
  } = useCheckout();
  return (
    <div className="change_address_container">
      <div className="d-flex justify-between ">
        <p className=" font-bold" style={{ fontSize: "1.2rem" }}>
          Change delivery address
        </p>
        <RxCross2
          onClick={() => setOpenChangeAddress(false)}
          style={{ fontSize: "1.5rem", cursor: "pointer" }}
        />
      </div>

      {addresses.map((address) => (
        <div className="checkout_address d-flex  border-lightgrey rounded m-2 p-1">
          <div className="mx-1">
            <input
              type="radio"
              onChange={() =>
                dispatchCheckout({
                  type: SET_DEFAULT_ADDRESS,
                  payload: address
                })
              }
              checked={defaultAddress._id === address._id}
              name="address"
            />
          </div>
          <AddressCard {...address} key={address._id} />
        </div>
      ))}
      <div>
        <button
          onClick={() => {
            setOpenAddressForm(true);
            setOpenChangeAddress(false);
          }}
          className=" solid-btn text-uppercase w-full "
        >
          Add new address
        </button>
      </div>
    </div>
  );
};

export default AddressListing;
