import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const PublicRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);

  return auth.authStatus ? <Navigate to="/" /> : children;
};
