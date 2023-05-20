import React from "react";

const BrandLogo = ({ img, name }) => {
  return (
    <div className="brand d-flex items-center  cursor-pointer  m-2 card-shadow p-1">
      <img className="brand_img" src={img} alt={name} />
    </div>
  );
};

export default BrandLogo;
