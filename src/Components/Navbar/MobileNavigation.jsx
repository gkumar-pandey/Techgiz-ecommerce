import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useAuth } from "../../Context";

const MobileNavigation = ({ HandleSideNavbar, showSideNavbar }) => {
  const {
    userState: {
      user: { firstName }
    }
  } = useAuth();

  console.log(firstName);
  return (
    <div className={`sidenav ${showSideNavbar && "active"} `}>
      <div className="sidenav-wrapper">
        <div className="sidenav_header">
          <div className="sidenav_header_text">
            <FaUserCircle />
            <span>{firstName ? firstName : "Welcome"}</span>
          </div>
          <RxCross2 onClick={HandleSideNavbar} />
        </div>
        <div className="sidenav_links">
          <button>Home</button>
          <button>Shop now</button>
          <button>Profile</button>
          <button>Cart</button>
          <button>Wishlist</button>
          <button>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
