import React, { useState } from "react";
import "./Navbar.css";
import { BiSearch } from "react-icons/bi";
import { IoMenu } from "react-icons/io5";
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShoppingCart
} from "react-icons/ai";
import MobileNavigation from "./MobileNavigation";

const Navbar = () => {
  const [showSideNavbar, setShowNavbar] = useState(false);

  const HandleSideNavbar = () => {
    setShowNavbar(!showSideNavbar);
  };

  return (
    <>
      <nav className="d-flex items-center justify-between ">
        <div className=" d-flex items-center logo_container">
          <IoMenu
            className="d-none menu_icon cursor-pointer "
            onClick={HandleSideNavbar}
          />
          <h3 className="nav-logo cursor-pointer ">TechGiz</h3>
        </div>
        <div className=" d-flex items-center search_bar">
          <button className="d-flex items-center justify-center">
            <BiSearch className="search_bar_icon" />
          </button>
          <input className="search_input" type="text" placeholder="Search..." />
        </div>
        <div>
          <ul className="d-flex">
            <li className="nav_link profile-icon">
              <AiOutlineUser className="nav_link_icon" />
              <span className="nav_link_icon_title">Login</span>
            </li>
            <li className="nav_link">
              <div>
                <p className="badge">9</p>
                <AiOutlineHeart className="nav_link_icon" />
              </div>
              <span className="nav_link_icon_title">Wishlist</span>
            </li>
            <li className="nav_link">
              <div>
                <AiOutlineShoppingCart className="nav_link_icon" />
                <p className="badge">9</p>
              </div>
              <span className="nav_link_icon_title">Cart</span>
            </li>
          </ul>
        </div>
        <MobileNavigation
          showSideNavbar={showSideNavbar}
          HandleSideNavbar={HandleSideNavbar}
        />
      </nav>
    </>
  );
};

export default Navbar;
