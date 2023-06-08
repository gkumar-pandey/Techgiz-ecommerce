import React from "react";
import ReactDOM from "react-dom";
import "./drawer.css";
import { RxCrossCircled } from "react-icons/rx";

const DrawerBottom = ({ children, handleOpen, open }) => {
  if (!open) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className={`drawer-bottom ${open && "open"} `}>
      <div className="drawer_heading">
        <h3>Filter</h3>
        <span>
          <RxCrossCircled
            onClick={() => handleOpen(!open)}
            style={{ fontSize: "1.5rem" }}
          />
        </span>
      </div>
      <div className="drawer_content">{children}</div>
    </div>,
    document.body
  );
};

export default DrawerBottom;
