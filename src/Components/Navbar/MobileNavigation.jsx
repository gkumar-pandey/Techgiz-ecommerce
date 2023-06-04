import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context";

const MobileNavigation = ({ HandleSideNavbar, showSideNavbar }) => {
  const { user, logOutBtnHandler } = useAuth();
 
 
  return (
    <div className={`sidenav ${showSideNavbar && "active"} `}>
      <div className="sidenav-wrapper">
        <div className="sidenav_header">
          <div className="sidenav_header_text">
            <FaUserCircle style={{ fontSize: "1.8rem" }} />
            {user ? (
              <span className="mx-2">{user?.user?.firstName}</span>
            ) : (
              <span className="mx-2">Welcome</span>
            )}
 
          </div>
          <RxCross2 onClick={HandleSideNavbar} />
        </div>
        <div className="sidenav_links">
          <Link to={"/"} className="link w-full  ">
            <button className="w-full" onClick={HandleSideNavbar}>
              Home
            </button>
          </Link>
          <Link to={"/products"} className="link ">
            <button className="w-full" onClick={HandleSideNavbar}>
              Shop now
            </button>
          </Link>
          <Link to={"/profile"} className="link ">
            <button className="w-full" onClick={HandleSideNavbar}>
              Profile
            </button>
          </Link>
          <Link to={"/cart"} className="link  ">
            <button className="w-full" onClick={HandleSideNavbar}>
              Cart
            </button>
          </Link>
          <Link to={"/wishlist"} className="link  ">
            <button className="w-full" onClick={HandleSideNavbar}>
              Wishlist
            </button>
          </Link>
          {user ? (
            <>
              <button
                onClick={() => {
                  HandleSideNavbar();
                  logOutBtnHandler();
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <Link to={"/login"} className="link">
              <button className="w-full" onClick={HandleSideNavbar}>
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
