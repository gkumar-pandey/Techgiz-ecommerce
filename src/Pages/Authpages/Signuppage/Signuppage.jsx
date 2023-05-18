import React from "react";
import { Input } from "../../../Components";
import { useAuth } from "../../../Context/AuthContext/AuthContext";
import { SIGNUP_ACTIONS } from "../../../Constant";

const Signuppage = () => {
  const { dispatchAuth } = useAuth();

  return (
    <div className="d-flex justify-center items-center signup_form_container">
      <div className="signup_form card-shadow">
        <div className="signup_form_wrapper">
          <div className="signup_form_title">
            <h2>Signup</h2>
          </div>
          <div>
            <Input
              onChange={(e) =>
                dispatchAuth({
                  type: SIGNUP_ACTIONS.FIRST_NAME,
                  payload: e.target.value
                })
              }
              placeholder={"Enter your first name"}
              label={"First name"}
            />
            <Input placeholder={"Enter your last name"} label={"Last name"} />
            <Input placeholder={"Enter your email"} label={"Email address"} />
            <Input placeholder={"password"} label={"Password"} />
            <Input
              placeholder={"Confirm password"}
              label={"Confirm password"}
            />
          </div>

          <button className=" w-full solid-btn">Signup</button>
        </div>
      </div>
    </div>
  );
};

export default Signuppage;
