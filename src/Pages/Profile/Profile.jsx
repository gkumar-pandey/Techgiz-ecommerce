import React, { useState } from "react";
import "./profile.css";
import { useAuth, useCheckout } from "../../Context";
import ProfileCard from "../../Components/Profile/ProfileCard";
import { AddressCard, AddressForm, AddressListing } from "../../Components";
import Modal from "../../Components/Modal/Modal";

const Profile = () => {
  const [selectedTab, setSelectedTab] = useState("profile");
  const [openAddressForm, setOpenAddressForm] = useState(false);
  const [openChangeAddress, setOpenChangeAddress] = useState(false);

  const {
    user: { user }
  } = useAuth();

  const handleTab = (tab) => {
    setSelectedTab(tab);
  };

  const {
    checkoutState: { addresses },
    handleRemoveAddress,
    handleEditAddress,
    setAddressFormData
  } = useCheckout();

  const handleAddressFormBtn = () => {
    setAddressFormData("");
    setOpenAddressForm(!openAddressForm);
  };

  return (
    <div>
      <div className="page-heading san-serif ">
        <h2>
          Hii {user?.firstName} {user?.lastName}
        </h2>
      </div>
      <div className="profile_container">
        <div className="profile_tabs  ">
          <button
            style={{
              backgroundColor: selectedTab === "profile" && "lightgray"
            }}
            onClick={() => handleTab("profile")}
          >
            Profile
          </button>
          <button
            style={{
              backgroundColor: selectedTab === "address" && "lightgray"
            }}
            onClick={() => handleTab("address")}
          >
            Address
          </button>
        </div>
        <div className="tab_details">
          {selectedTab === "profile" ? (
            <>
              <div className="mx-2">
                <ProfileCard />
              </div>
            </>
          ) : (
            <>
              <div>
                <div className="mx-2">
                  <div className="font-semibold   d-flex items-center justify-between ">
                    <h3>Your Address</h3>
                    <button
                      className="solid-btn"
                      onClick={handleAddressFormBtn}
                    >
                      Add New Address
                    </button>
                  </div>
                  {addresses.map((item) => (
                    <div
                      className=" border-lightgrey rounded px-4 my-1"
                      key={item._id}
                    >
                      <AddressCard {...item} />
                      <div className=" d-flex items-center gap-2 ">
                        <button
                          className="solid-btn"
                          onClick={() => {
                            setOpenAddressForm(!openAddressForm);
                            handleEditAddress(item._id);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className=" outlined-btn"
                          onClick={() => handleRemoveAddress(item._id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {openAddressForm && (
        <Modal>
          <AddressForm handleAddressFormModal={handleAddressFormBtn} />
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

export default Profile;
