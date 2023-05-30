import React from "react";
import { Input } from "../../../Components";
import "./../authpage.css";
import { Link } from "react-router-dom";
import { RiArrowDropRightLine } from "react-icons/ri";
import { BiErrorCircle } from "react-icons/bi";
import { useAuth } from "../../../Context/AuthContext/AuthContext";
import {
  SAVE_USER,
  SET_LOGIN_EMAIL,
  SET_LOGIN_PASSWORD
} from "../../../Constant/index.js";

const LoginPage = () => {
  const {
    userState: {
      loginUser: { email, password },
      loginError,
      isLoading,
      isSaveUser
    },
    dispatchUser,
    loginHandler
  } = useAuth();

  //* guest user obj for test credential login */
  const guestUser = {
    email: "gautamshekhar078@gmail.com",
    password: "Gautam#123"
  };

  const loginWithTestCredentialHandler = () => {
    dispatchUser({ type: SET_LOGIN_EMAIL, payload: guestUser.email });
    dispatchUser({ type: SET_LOGIN_PASSWORD, payload: guestUser.password });
    dispatchUser({ type: SAVE_USER, payload: true });
  };

  return (
    <div className=" d-flex justify-center items-center login_form_container">
      <form onSubmit={loginHandler} className="login_form card-shadow ">
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
                dispatchUser({ type: SET_LOGIN_EMAIL, payload: e.target.value })
              }
            />
            <Input
              type={"password"}
              value={password}
              onChange={(e) =>
                dispatchUser({
                  type: SET_LOGIN_PASSWORD,
                  payload: e.target.value
                })
              }
              placeholder={"Enter your Password"}
              label={"Password"}
            />
          </div>
          <div>
            <input
              className="cursor-pointer"
              checked={isSaveUser}
              type="checkbox"
              onChange={(e) =>
                dispatchUser({ type: SAVE_USER, payload: e.target.checked })
              }
            />{" "}
            <span>Remember me</span>
          </div>

          <button
            type="submit"
            className="outlined-btn w-full "
            onClick={loginWithTestCredentialHandler}
          >
            Login with test credentials
          </button>
          <button type="submit" className="solid-btn w-full ">
            {isLoading ? "Loading.." : "Login"}
          </button>
          {loginError && (
            <p className="d-flex justify-center items-center auth_error ">
              {" "}
              <BiErrorCircle className="auth_error_icon" /> {loginError}
            </p>
          )}
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
