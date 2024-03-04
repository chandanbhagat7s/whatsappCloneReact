import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

// the need of this component is we are cecking the user is logeed in or not and on the basic of his/her role we are authorizing the routes
export default function Authentication({ allow }) {
  const { isLoggedIn } = useSelector((state) => state.auth);
  console.log(isLoggedIn);
  return isLoggedIn ? (
    // this outlet is the children route which will be accessed on the half of roles
    <Outlet />
  ) : isLoggedIn ? (
    <Navigate to="/denide" />
  ) : (
    <Navigate to="/login" />
  );
}
