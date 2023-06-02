import React, { useState } from "react";
import "./Navbar.css";
import { IoMenu } from "react-icons/io5";
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShoppingCart
} from "react-icons/ai";
import MobileNavigation from "./MobileNavigation";
import { useWishlist } from "../../Context/WishlistContext/WishlistContext";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import { useCart } from "../../Context";

const Navbar = () => {
  const [showSideNavbar, setShowNavbar] = useState(false);
  const {
    wishlistProductState: { products }
  } = useWishlist();
  const { cartState } = useCart();

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
        <div className="search">
          <Search />
        </div>
        <div>
          <ul className="d-flex">
            <li className="nav_link profile-icon">
              <AiOutlineUser className="nav_link_icon" />
              <span className="nav_link_icon_title">Login</span>
            </li>
            <Link to={"/wishlist"} className="link nav_link">
              <div>
                <p className="badge">{products.length}</p>
                <AiOutlineHeart className="nav_link_icon" />
              </div>
              <span className="nav_link_icon_title">Wishlist</span>
            </Link>
            <Link to={"/cart"} className=" link nav_link">
              <div>
                <AiOutlineShoppingCart className="nav_link_icon" />
                <p className="badge">{cartState.products.length}</p>
              </div>
              <span className="nav_link_icon_title">Cart</span>
            </Link>
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
