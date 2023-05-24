import React from "react";
import { Input } from "../../../Components";
import { useAuth } from "../../../Context/AuthContext/AuthContext";
import { Link } from "react-router-dom";
import { RiArrowDropRightLine } from "react-icons/ri";
import {
  SET_CONFIRM_PASSWORD,
  SET_EMAIL,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_PASSWORD
} from "../../../Constant";

const Signuppage = () => {
  const {
    userState: {
      user: { firstName, lastName, email, password, confirmPassword }
    },
    dispatchUser
  } = useAuth();

  return (
    <div className="d-flex justify-center items-center signup_form_container">
      <form className="signup_form card-shadow">
        <div className="signup_form_wrapper">
          <div className="signup_form_title">
            <h2>Signup</h2>
          </div>
          <div>
            <Input
              type={"text"}
              value={firstName}
              placeholder={"Enter your first name"}
              label={"First name"}
              onChange={(e) =>
                dispatchUser({ type: SET_FIRST_NAME, payload: e.target.value })
              }
            />
            <Input
              value={lastName}
              type={"text"}
              placeholder={"Enter your last name"}
              label={"Last name"}
              onChange={(e) =>
                dispatchUser({ type: SET_LAST_NAME, payload: e.target.value })
              }
            />
            <Input
              type={"email"}
              value={email}
              placeholder={"Enter your email"}
              label={"Email address"}
              onChange={(e) =>
                dispatchUser({ type: SET_EMAIL, payload: e.target.value })
              }
            />
            <Input
              type={"password"}
              placeholder={"password"}
              label={"Password"}
              value={password}
              onChange={(e) =>
                dispatchUser({ type: SET_PASSWORD, payload: e.target.value })
              }
            />
            <Input
              type={"password"}
              placeholder={"Confirm password"}
              label={"Confirm password"}
              value={confirmPassword}
              onChange={(e) =>
                dispatchUser({
                  type: SET_CONFIRM_PASSWORD,
                  payload: e.target.value
                })
              }
            />
          </div>
          <button type="submit" className=" w-full solid-btn">
            Signup
          </button>
          <div className="d-flex justify-center items-center ">
            <Link className="link sign_up_link " to={"/login"}>
              Already have account{" "}
            </Link>
            <RiArrowDropRightLine className="icon" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signuppage;