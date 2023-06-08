import React from "react";
import { Link } from "react-router-dom";
import "./EmptyMsgComp.css";

const EmptyMsgComp = ({ msg }) => {
  return (
    <>
      <div className="d-flex justify-center items-center flex-col empty_text  ">
        <h2>{msg}</h2>
        <p>
          Explore more products, <Link to={"/products"}>Continue Shopping</Link>
        </p>
      </div>
    </>
  );
};

export default EmptyMsgComp;
