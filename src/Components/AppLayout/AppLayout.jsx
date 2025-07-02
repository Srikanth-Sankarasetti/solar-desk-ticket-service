import NavigationComponent from "../Navigation/Navigation";
import HeaderComponent from "../Header/Header.jsx";
import { Outlet } from "react-router-dom";
import { ApplayoutContainer, ApplayoutMain } from "./appLayoutStyle.js";
import DashboardInit from "./DashboardInit.jsx";
import useDocumentTitleByRoute from "../../ui/DocumentTitle.jsx";

const AppLayout = () => {
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
