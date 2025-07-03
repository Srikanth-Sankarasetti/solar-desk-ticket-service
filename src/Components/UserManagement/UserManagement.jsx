import { Search } from "lucide-react";
import UseList from "./UserList";
import {
  StyledUserManagementMainContainer,
  StyledUserManagementTableList,
  StyledUserManagmentTableHeader,
} from "./userManagementStyle";
import { StyledInputSearch } from "../TicketRaise/plantselectionStyle";
import { ScrollableBody } from "../Ticket/ticketstyle";
import { useState } from "react";
import useApiRequest from "../../ui/apiRequest";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useGlobalContext } from "../../ui/globalContext";
import { ThreeCircles } from "react-loader-spinner";

const UserManagement = () => {
  const [search, setSearch] = useState("");
  const { makeApi } = useApiRequest();
  const { isLoading, state, dispatch } = useGlobalContext();

  const token = Cookies.get("token");

  const filteruser = state.users.filter((user) => {
    return (
      user.status === "approved" &&
      (user.email.toLowerCase().includes(search.toLowerCase()) ||
        user.name.toLowerCase().includes(search.toLowerCase()))
    );
  });

  const updatingUserRoleToServer = async ({ role, id }) => {
    if (role !== "") {
      const roles = { role };
      try {
        const result = await makeApi({
          url: `https://solar-desk.onrender.com/api/solar/v1/users/${id}/updateRole`,
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: roles,
        });
        if (result.status === "success") {
          toast.success("User role updated successfully");
          const updatedUsers = state.users.map((user) =>
            user.id === id ? { ...user, role: role } : user
          );
          dispatch({ type: "SET_USERS", payload: updatedUsers });
        }
      } catch (err) {
        toast.error(err.message);
      }
    }
  };

  const deletedUserFromServer = async (id) => {
    try {
      const result = await makeApi({
        url: `https://solar-desk.onrender.com/api/solar/v1/users/${id}/delete`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (result.status === "success") {
        toast.success("User Deleted successfully");
        const updatedUsers = state.users.filter((user) => user.id !== id);
        dispatch({ type: "SET_USERS", payload: updatedUsers });
      }
    } catch (err) {
      toast.error(err.message || "Some thing went wrong");
    }
  };

  const loaderpinner = () => {
    return (
      <div
        style={{
          width: "90%",
          height: "50%",
          minHeight: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ThreeCircles
          visible={true}
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  };

  const noContentAvialble = () => {
    return (
      <div
        style={{
          width: "90%",
          height: "50%",
          minHeight: "400px",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://res.cloudinary.com/ducrzzdqj/image/upload/v1751386815/5928293_2953962_xv6ldo.jpg"
          alt="no content"
          style={{ width: "300px", aspectRatio: "1" }}
        />
        <h3 style={{ color: "var(--textBody)", fontSize: "1.8rem" }}>
          <span style={{ color: "var(--successColor)" }}>NO </span> users
          Register Yet
        </h3>
      </div>
    );
  };

  const returnResultOnStatus = () => {
    if (state.loading.users) {
      return loaderpinner();
    }
    if (filteruser.length === 0) {
      return noContentAvialble();
    }
    return (
      <ScrollableBody>
        {filteruser.map((users) => (
          <UseList
            key={users.id}
            users={users}
            updatingUserRoleToServer={updatingUserRoleToServer}
            deletedUserFromServer={deletedUserFromServer}
          />
        ))}
      </ScrollableBody>
    );
  };

  return (
    <StyledUserManagementMainContainer>
      <div style={{ width: "35%", position: "relative" }}>
        <Search
          style={{
            position: "absolute",
            top: "30%",
            right: "15px",
            color: "var(--formText)",
            width: "20px",
          }}
        />
        <StyledInputSearch
          type="search"
          placeholder="Search User By Email or Name . . ."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <StyledUserManagementTableList role="table">
        <StyledUserManagmentTableHeader role="row" tab="management">
          <div>Name</div>
          <div>Email</div>
          <div>Role</div>
          <div>Change Role</div>
          <div>Update Role</div>
          <div>Delete User</div>
        </StyledUserManagmentTableHeader>
        {returnResultOnStatus()}
      </StyledUserManagementTableList>
    </StyledUserManagementMainContainer>
  );
};

export default UserManagement;
