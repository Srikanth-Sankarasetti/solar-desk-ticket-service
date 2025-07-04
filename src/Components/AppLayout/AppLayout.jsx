import NavigationComponent from "../Navigation/Navigation";
import HeaderComponent from "../Header/Header.jsx";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { ApplayoutContainer, ApplayoutMain } from "./appLayoutStyle.js";
import DashboardInit from "./DashboardInit.jsx";
import useDocumentTitleByRoute from "../../ui/DocumentTitle.jsx";
import getuserRole from "../../utils/getuserRole.js";
import Cookies from "js-cookie";
import { useEffect } from "react";
import toast from "react-hot-toast";
const AppLayout = () => {
  const navigate = useNavigate();
  const { role } = getuserRole();
  const location = useLocation();

  useEffect(() => {
    const token = Cookies.get("token");
    console.log(token);
    if (!token) {
      navigate("/login", { replace: true });
      return;
    }
    const fetchUserRole = async () => {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const result = await fetch(
          "https://solar-desk.onrender.com/api/solar/v1/users/userRole",
          options
        );
        const response = await result.json();
        if (response.role !== role) {
          toast.error("Role changed. Please login again.");
          Cookies.remove("token");
          navigate("/login", { replace: true });
        }
      } catch (err) {
        toast.error("Session expired. Please login again.");
        Cookies.remove("token");
        navigate("/login", { replace: true });
      }
    };
    fetchUserRole();
  }, [location.pathname]);

  useDocumentTitleByRoute();

  return (
    <DashboardInit>
      <ApplayoutContainer>
        <HeaderComponent />
        <NavigationComponent />
        <ApplayoutMain>
          <Outlet />
        </ApplayoutMain>
      </ApplayoutContainer>
    </DashboardInit>
  );
};

export default AppLayout;
