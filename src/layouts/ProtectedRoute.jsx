import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserNameContext } from "../context/UserNameContext";
import { useContext } from "react";

const ProtectedRoute = () => {
  const { userName } = useContext(UserNameContext);
  const location = useLocation();

  return (
    <>
      {userName ? (
        <div>
          <Outlet />
        </div>
      ) : (
        <Navigate
          to="/"
          state={{ from: location.pathname + location.search }}
        />
      )}
    </>
  );
};

export default ProtectedRoute;
