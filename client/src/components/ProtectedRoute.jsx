import { useAuthContext } from "@/context/AuthContext";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { user } = useAuthContext();
  const isAdmin = user?.isAdmin;

  return isAdmin ? <Outlet /> : <Navigate to={'/'} replace />;
};

export default ProtectedRoute;
