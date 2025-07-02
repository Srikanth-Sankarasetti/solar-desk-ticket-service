import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const token = Cookies.get("token");
  return token ? <Navigate to="/" replace /> : <Outlet />;
};

export default PublicRoute;
