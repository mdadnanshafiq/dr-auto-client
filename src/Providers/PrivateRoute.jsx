import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="w-full mx-auto flex justify-center items-center p-10">
        <progress className="progress w-56 mx-auto"></progress>
      </div>
    );
  }
  if (user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/signin" replace></Navigate>;
};

export default PrivateRoute;
