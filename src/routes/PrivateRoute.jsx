import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading";

const PrivateRoute = ({ children }) => {
  const pathName = useLocation();
  const { email, isLoading } = useSelector((state) => state.auth);

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  if (!isLoading && !email) {
    return <Navigate to="/login" state={{ path: pathName }} replace />;
  }
  return children;
};

export default PrivateRoute;
