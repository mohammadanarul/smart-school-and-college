import { useStoreState } from "easy-peasy";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const user = useStoreState((state) => state.userModel.user);
  let location = useLocation();

  if (!user.isAuthenticate) {
    return <Navigate to="/login" state={{ from: location }} replace={true} />;
  }
  return children;
};
