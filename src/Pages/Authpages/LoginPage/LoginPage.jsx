import React from "react";
import { Input } from "../../../Components";
import "./../authpage.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className=" d-flex justify-center items-center login_form_container">
      <div className="login_form card-shadow ">
        <div className="login_form_wrapper">
          <div className="login_form_title">
            <h2>Login</h2>
          </div>
          <div>
            <Input placeholder={"Enter your email"} label={"Email address"} />
            <Input placeholder={"Enter your Password"} label={"Password"} />
          </div>

          <button className="outlined-btn w-full ">
            Login with test credentials
          </button>
          <button className="solid-btn w-full ">Login</button>
          <div>
            <Link className="link">Create New Account</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
