import React from "react";
import { Link } from "react-router-dom";
import "./EmptyMsgComp.css";

const EmptyMsgComp = ({ msg }) => {
  return (
    <>
      <div className="d-flex justify-center items-center flex-col empty_text  ">
        <h2>{msg}</h2>
        <p className="d-flex items-center flex-col ">
          <p>Explore more products</p>
          <div>
            <Link to={"/products"}>
              <button className="outlined-btn text-uppercase ">
                Continue Shopping
              </button>
            </Link>
          </div>
        </p>
      </div>
    </>
  );
};

export default EmptyMsgComp;
