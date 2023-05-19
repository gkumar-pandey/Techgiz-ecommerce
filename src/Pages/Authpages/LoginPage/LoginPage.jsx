import React from "react";
import { Input } from "../../../Components";
import "./../authpage.css";
import { Link } from "react-router-dom";
import { RiArrowDropRightLine } from "react-icons/ri";
import { useAuth } from "../../../Context/AuthContext/AuthContext";
import { SAVE_USER, SET_EMAIL, SET_PASSWORD } from "../../../Constant/index.js";

const LoginPage = () => {
  const {
    user: {
      user: { email, password }
    },
    dispatchUser,
    loginBtnHandler
  } = useAuth();

  return (
    <div className=" d-flex justify-center items-center login_form_container">
      <form className="login_form card-shadow ">
        <div className="login_form_wrapper">
          <div className="login_form_title">
            <h2>Login</h2>
          </div>
          <div>
            <Input
              value={email}
              placeholder={"Enter your email"}
              label={"Email address"}
              type={"email"}
              onChange={(e) =>
                dispatchUser({ type: SET_EMAIL, payload: e.target.value })
              }
            />
            <Input
              type={"password"}
              value={password}
              onChange={(e) =>
                dispatchUser({ type: SET_PASSWORD, payload: e.target.value })
              }
              placeholder={"Enter your Password"}
              label={"Password"}
            />
          </div>
          <div>
            <input
              className="cursor-pointer"
              type="checkbox"
              onChange={(e) =>
                dispatchUser({ type: SAVE_USER, payload: e.target.checked })
              }
            />{" "}
            <span>Remember me</span>
          </div>
          <button className="outlined-btn w-full ">
            Login with test credentials
          </button>
          <button
            type="submit"
            className="solid-btn w-full "
            onClick={loginBtnHandler}
          >
            Login
          </button>
          <div className=" d-flex justify-center items-center w-full">
            <Link className="link sign_up_link" to={"/signup"}>
              Create New Account
            </Link>
            <RiArrowDropRightLine className="icon" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
