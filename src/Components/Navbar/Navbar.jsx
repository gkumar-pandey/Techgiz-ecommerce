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
import { Link, useLocation } from "react-router-dom";
import Search from "../Search/Search";
import { useAuth, useCart } from "../../Context";

const Navbar = () => {
  const [showSideNavbar, setShowNavbar] = useState(false);
  const {
    wishlistProductState: { products }
  } = useWishlist();
  const { logOutBtnHandler, user } = useAuth();
  const { cartState } = useCart();
  const location = useLocation();

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
          <Link to={"/"} className="link">
            <h3 className="nav-logo cursor-pointer ">TechGiz</h3>
          </Link>
 
          <Link to={"/products"}>
            <button className="shop_btn ">Shop now</button>
          </Link>
        </div>
        <div className="search">
          <Search />
        </div>
        {location.pathname === "/products" && (
          <div className="search">
            <Search />
          </div>
        )}

        <div>
          <ul className="d-flex">
            {user ? (
              <>
                <li
                  to={"/login"}
                  className="nav_link link  profile-icon relative"
                >
                  <AiOutlineUser className="nav_link_icon" />
                  <span className="nav_link_icon_title">
                    {user?.user?.firstName}
                  </span>
                  <div className="profile_content">
                    <p>Welcome</p>
                    <Link className="link " to={"/profile"}>
                      <button style={{ width: "90%" }} className="">
                        Profile
                      </button>
                    </Link>
                    <button onClick={logOutBtnHandler}>Logout</button>
                  </div>
                </li>
              </>
            ) : (
              <>
                <Link
                  to={"/login"}
                  className="nav_link link  profile-icon relative"
                >
                  <AiOutlineUser className="nav_link_icon" />
                  <span className="nav_link_icon_title">Login</span>
                </Link>
              </>
            )}

            <Link to={"/wishlist"} className="link nav_link">
              <div className="relative">
                {user && <p className="badge">{products.length}</p>}
                <AiOutlineHeart className="nav_link_icon" />
              </div>
              <span className="nav_link_icon_title">Wishlist</span>
            </Link>
            <Link to={"/cart"} className=" link nav_link">
              <div className="relative">
                <AiOutlineShoppingCart className="nav_link_icon" />
                {user && <p className="badge">{cartState.products.length}</p>}
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
