import { useEffect } from "react";
import { useGlobalContext, ACTIONS } from "../../ui/globalContext";
import useApiRequest from "../../ui/apiRequest";
import Cookies from "js-cookie";
import getuserRole from "../../utils/getuserRole";
import { useGlobalUserContext, USERACTION } from "../../ui/userContext";

const DashboardInit = ({ children }) => {
  const { makeApi } = useApiRequest();
  const { dispatch } = useGlobalContext();
  const { userDispatch } = useGlobalUserContext();
  const token = Cookies.get("token");
  const { id } = getuserRole();
  const fetchingyUserDetails = async () => {
    dispatch({ type: ACTIONS.LOADING_USERS });
    try {
      const result = await makeApi({
        url: "https://solar-desk.onrender.com/api/solar/v1/users/",
        method: "GET",
        headers: {
          "Content-Type": "application/json", // Capitalized
          Authorization: `Bearer ${token}`,
        },
      });

      if (result?.status === "success") {
        const usersFilteration = result.data.users
          .filter((user) => user.isEmailVerfied)
          .map((user) => ({
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            status: user.status,
          }));

        dispatch({ type: ACTIONS.SET_USERS, payload: usersFilteration });
      } else {
        dispatch({
          type: ACTIONS.ERROR_USERS,
          payload: result?.message || "Something went wrong",
        });
      }
    } catch (err) {
      dispatch({ type: ACTIONS.ERROR_USERS, payload: err.message });
    }
  };

  const getloginUserDetails = async () => {
    userDispatch({ type: USERACTION.LOADING_USER });
    try {
      const userResult = await makeApi({
        url: `https://solar-desk.onrender.com/api/solar/v1/users/${id}/getUser`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (userResult.status === "success") {
        const userDetails = {
          name: userResult.user.name,
          email: userResult.user.email,
          image: userResult.user.photo,
        };
        userDispatch({ type: USERACTION.SET_USER, payload: userDetails });
      }
    } catch (err) {
      userDispatch({
        type: USERACTION.ERROR_USER,
        payload: { message: err.message },
      });
    }
  };

  const fetchingPlantsDetails = async () => {
    dispatch({ type: ACTIONS.LOADING_PLANTS });
    try {
      const result = await makeApi({
        url: "https://solar-desk.onrender.com/api/solar/v1/plants/",
        method: "GET",
        headers: {
          "Content-Type": "application/json", // Capitalized
          Authorization: `Bearer ${token}`,
        },
      });
      if (result?.status === "success") {
        const plantsFilteration = result.data.plants.map((user) => ({
          id: user._id,
          plantName: user.plantName,
          plantType: user.plantType,
          capacityKwp: user.capacityKwp,
          ownerName: user.plantOwner.name,
          Zone: user.Zone,
        }));
        dispatch({ type: ACTIONS.SET_PLANTS, payload: plantsFilteration });
      } else {
        dispatch({
          type: ACTIONS.ERROR_PLANTS,
          payload: result?.message || "Something went wrong",
        });
      }
    } catch (err) {
      dispatch({ type: ACTIONS.ERROR_USERS, payload: err.message });
    }
  };

  const fetchingPlantIssuesDetails = async () => {
    dispatch({ type: ACTIONS.LOADING_ISSUES_PLANTS });
    try {
      const result = await makeApi({
        url: `https://solar-desk.onrender.com/api/solar/v1/issues/${id}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (result?.status === "success") {
        const plantIssues = result.data.issues.map((issue) => ({
          _id: issue._id,
          issueTitle: issue.issueTitle,
          issueDescription: issue.issueTitleDescription,
          status: issue.status,
          createdAt: issue.createdAt,
          solvedAt: issue.resolvedAt,
          actionTaken: issue.actionDescription,
          issueType: issue.typeOfLoss,
          generationLossKwh: issue.generationLossKwh,
          plantName: issue.plantName,
          raisedByName: issue.raisedByName,
          assignedEngineerName: issue.assignedEngineerName,
          zone: issue.Zone,
          plantCapacityKwp: issue.plantCapacityKwp,
          category: issue.category,
          subIssue: issue.subIssue,
        }));

        dispatch({ type: ACTIONS.SET_ISSUES_PLNATS, payload: plantIssues });
      }
    } catch (err) {
      dispatch({ type: ACTIONS.ERROR_ISSUES_PLANTS, payload: err.message });
    }
  };

  useEffect(() => {
    fetchingyUserDetails();
    getloginUserDetails();
    fetchingPlantsDetails();
    fetchingPlantIssuesDetails();
  }, []);

  return children;
};

export default DashboardInit;
