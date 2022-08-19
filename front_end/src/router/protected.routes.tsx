import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { store } from "./../index";
import { useLocation } from "react-router-dom";

const ProtectedRoutes = (props: any) => {
  const auth = store.getState().loginReducer.result;

  const location = auth ? useLocation() : "/login";

  console.log(auth);
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
