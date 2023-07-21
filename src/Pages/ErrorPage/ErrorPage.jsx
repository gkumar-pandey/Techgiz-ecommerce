import React from "react";
import { Error404Img } from "../../StaticData";

const ErrorPage = () => {
  return (
    <div className="w-full " style={{ height: "60vh" }}>
      <img
        className="w-full "
        style={{ height: "100%", objectFit: "contain" }}
        src={Error404Img}
        alt="Error-404"
      />
    </div>
  );
};

export default ErrorPage;
