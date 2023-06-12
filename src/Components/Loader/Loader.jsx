import React from "react";
import { ColorRing } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      className="d-flex justify-center flex-col items-center p-4"
      style={{ height: "50vh", fontFamily: "sans-serif" }}
    >
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#302f34"]}
      />
      <h3 className=" m-1 ">Loading....</h3>
    </div>
  );
};

export default Loader;
