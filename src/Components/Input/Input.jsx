import React from "react";
import "./Input.css";

const Input = ({ value, onChange, placeholder, type, label }) => {
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
