import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { match } from "path-to-regexp";

const useDocumentTitleByRoute = () => {
  const location = useLocation();

  useEffect(() => {
    const pathToTitleMap = [
      { path: "/", title: "Overview" },
      { path: "/user-management", title: "User Management" },
      { path: "/raise-tickets", title: "Raise Tickets" },
      { path: "/approval-requests", title: "Requests" },
      { path: "/manage-plants/add-plant", title: "Add Plant" },
      { path: "/manage-plants/assign-engineer", title: "Assign Engineer" },
      { path: "/downloads", title: "Reports" },
      { path: "/tickets", title: "Tickets" },
      { path: "/settings", title: "Settings" },
      { path: "/issue-update/:id", title: "Update Ticket" },
      { path: "/not-found", title: "Not Found" },
    ];

    const matchedRoute = pathToTitleMap.find((route) =>
      match(route.path, { decode: decodeURIComponent })(location.pathname)
    );

    const appTitle = "Solar Desk";
    const pageTitle = matchedRoute ? matchedRoute.title : "Solar Desk";

    document.title = `${pageTitle} | ${appTitle}`;
  }, [location.pathname]);
};

export default useDocumentTitleByRoute;
