import { useAuthContext } from "@/context/AuthContext";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isAdmin } = useAuthContext();

  return isAdmin ? <Outlet /> : <Navigate to={'/'} replace />;
};

export default ProtectedRoute;
