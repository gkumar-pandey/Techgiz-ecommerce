import React from "react";
import { RxCross2 } from "react-icons/rx";
import "./addressForm.css";
import { useCheckout } from "../../../Context";

const AddressForm = ({ handleAddressFormModal }) => {
  const {
    handleAddAddress,
    addressFormData,
    setAddressFormData,
    isAddressExist,
    handleUpdateAddress,
    handleDummyAddressBtn
  } = useCheckout();

  const handleOnChange = (value, key) => {
    setAddressFormData((pre) => ({ ...pre, [key]: value }));
  };

  const handleAddressFormSubmit = (e) => {
    e.preventDefault();
    if (isAddressExist(addressFormData._id)) {
      handleUpdateAddress(addressFormData);
      handleAddressFormModal();
    } else {
      handleAddAddress(addressFormData);
      handleAddressFormModal();
    }
  };
  return (
    <div className="address_form_container p-4 ">
      <div className="d-flex justify-between ">
        <p className=" font-bold" style={{ fontSize: "1.2rem" }}>
          Add New Address
        </p>
        <RxCross2
          style={{ fontSize: "1.5rem", cursor: "pointer" }}
          onClick={handleAddressFormModal}
        />
      </div>
      <form className="address_form" onSubmit={handleAddressFormSubmit}>
        <div className=" d-flex flex-col ">
          <p className=" m-1 font-semibold ">Contact details</p>
          <input
            required
            type="text"
            placeholder="Name"
            value={addressFormData?.name}
            onChange={(e) => handleOnChange(e.target.value, "name")}
          />
          <input
            required
            type="tel"
            value={addressFormData?.phoneNumber}
            placeholder="Enter Mobile Number"
            onChange={(e) => handleOnChange(e.target.value, "phoneNumber")}
          />
        </div>
        <div className="d-flex flex-col ">
          <p className=" m-1 font-semibold ">Address</p>
          <input
            required
            type="number"
            placeholder="Pin Code"
            value={addressFormData?.zipCode}
            onChange={(e) => handleOnChange(e.target.value, "zipCode")}
          />
          <input
            required
            type="text"
            value={addressFormData?.street}
            onChange={(e) => setAddressFormData(e.target.value, "street")}
            placeholder="Address(House no, Building, Street, Area
            
            )"
          />
          <input
            required
            type="text"
            placeholder="City"
            value={addressFormData?.city}
            onChange={(e) => handleOnChange(e.target.value, "city")}
          />
          <div className="d-flex flex-row sm-flex-col  ">
            <input
              required
              type="text"
              placeholder="District"
              value={addressFormData?.district}
              onChange={(e) => handleOnChange(e.target.value, "district")}
            />
            <input
              required
              type="text"
              placeholder="State"
              value={addressFormData?.state}
              onChange={(e) => handleOnChange(e.target.value, "state")}
            />
          </div>
        </div>
        <div>
          <button
            className="solid-btn w-full"
            type="button"
            onClick={handleDummyAddressBtn}
          >
            Fill Dummy Address
          </button>
          <div className="d-flex gap-2 ">
            <button
              onClick={handleAddressFormModal}
              className=" outlined-btn w-full"
              type="button"
            >
              Cancel
            </button>
            <button className=" solid-btn w-full" type="submit">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
