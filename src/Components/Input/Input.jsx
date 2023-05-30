import React, { useState } from "react";
import "./Input.css";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Input = ({ value, onChange, placeholder, type, label }) => {
  const [showPass, setShowPass] = useState(false);

  if (type === "password") {
    return (
      <div className="form_input_wrapper">
        <div>
          <label className="label">{label}</label>
        </div>
        <div className="d-flex items-center justify-between password_input ">
          <input
            required
            type={showPass ? "text" : type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
          />
          <p onClick={() => setShowPass(!showPass)} className="eye_icon">
            {showPass ? <AiFillEye /> : <AiFillEyeInvisible />}
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="form_input_wrapper">
      <div>
        <label className="label">{label}</label>
      </div>
      <input
        required
        className="form_input"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default Input;
