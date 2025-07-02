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

const UserManagement = () => {
  const [search, setSearch] = useState("");
  const { makeApi } = useApiRequest();
  const { state, dispatch } = useGlobalContext();

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
        url: `http://localhost:3000/api/solar/v1/users/${id}/delete`,
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
      </StyledUserManagementTableList>
    </StyledUserManagementMainContainer>
  );
};

export default UserManagement;
