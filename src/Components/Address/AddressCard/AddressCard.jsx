import React from "react";

const AddressCard = ({
  name,
  street,
  city,
  state,
  zipCode,
  country,
  phoneNumber
}) => {
  return (
    <div>
      <>
        <div>
          <p className="font-semibold">{name}</p>
          <p>{street}</p>
          <p>
            <span>{city}</span>{" "}
            <span>
              {state}-{zipCode}, {country}
            </span>
          </p>
          <p className="my-1 font-semibold ">Phone Number : {phoneNumber}</p>
        </div>
      </>
    </div>
  );
};

export default AddressCard;
