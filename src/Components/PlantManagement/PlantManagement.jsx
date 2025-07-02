import { useEffect } from "react";
import {
  StyledPlantManagementMainContainer,
  StyledPlantManagementNavLink,
  StyledPlantManagementNavlinkContainer,
} from "./plantManagementStyle";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const PlantManagement = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/manage-plants") {
      navigate("add-plant", { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <StyledPlantManagementMainContainer>
      <StyledPlantManagementNavlinkContainer>
        <StyledPlantManagementNavLink to="add-plant">
          Add Plant
        </StyledPlantManagementNavLink>
        <StyledPlantManagementNavLink to="assign-engineer">
          Edit Plant
        </StyledPlantManagementNavLink>
      </StyledPlantManagementNavlinkContainer>
      <Outlet />
    </StyledPlantManagementMainContainer>
  );
};

export default PlantManagement;
