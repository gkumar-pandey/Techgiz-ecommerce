import React from "react";
import { useAuth } from "../../Context";

const ProfileCard = () => {
  const {
    user: { user },
    logOutBtnHandler
  } = useAuth();
  return (
    <div>
      <div className=" font-semibold  ">
        <h3>Profile Details</h3>
      </div>

      <div className="my-1">
        <p>
          Name : {user?.firstName} {user?.lastName}{" "}
        </p>
      </div>
      <div>
        <p>Email : {user?.email}</p>
      </div>
      <div className="my-1">
        <button className="solid-btn" onClick={logOutBtnHandler}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
