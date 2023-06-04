import React from "react";
import { useAuth } from "../../Context";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  return (
    <div>
      {user ? children : <Navigate to={"/login"} state={{ from: location }} />}
    </div>
  );
};

export default RequireAuth;
