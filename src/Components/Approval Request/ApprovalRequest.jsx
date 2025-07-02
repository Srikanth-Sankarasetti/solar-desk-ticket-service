import { Search } from "lucide-react";
import { useState } from "react";
import AprovalList from "./ApprovalList";
import { useGlobalContext } from "../../ui/globalContext";
import {
  StyledUserManagementMainContainer,
  StyledUserManagementTableList,
  StyledUserManagmentTableHeader,
} from "../UserManagement/userManagementStyle";
import { StyledInputSearch } from "../TicketRaise/plantselectionStyle";
import { ScrollableBody } from "../Ticket/ticketstyle";
import useApiRequest from "../../ui/apiRequest";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const ApprovalRequest = () => {
  const [search, setSearch] = useState("");
  const { state, dispatch } = useGlobalContext();
  const { isLoading, makeApi } = useApiRequest();

  const token = Cookies.get("token");

  const filterPendingSearchUser = state.users.filter(
    (opt) => opt.status.toLowerCase() === "pending"
  );

  const searchUserData = filterPendingSearchUser.filter(
    (opt) =>
      opt.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      opt.email.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  const handlingApprovalrequestToServer = async (id) => {
    try {
      const statusUpdate = {
        status: "approved",
      };
      const result = await makeApi({
        url: `http://localhost:3000/api/solar/v1/users/approve/${id}`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: statusUpdate,
      });
      if (result.status === "success") {
        toast.success("User approved successfully");
        const updatedUsers = state.users.map((user) =>
          user.id === id ? { ...user, status: "approved" } : user
        );
        dispatch({ type: "SET_USERS", payload: updatedUsers });
      } else {
        toast.error("Something Went Wrong");
      }
    } catch (err) {
      toast.error(err.message);
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
        <StyledUserManagmentTableHeader role="row">
          <div>Name</div>
          <div>Email</div>
          <div>Role</div>
          <div>Approval Status</div>
          <div>Account Approval</div>
        </StyledUserManagmentTableHeader>
        <ScrollableBody>
          {searchUserData.map((pendingUser) => (
            <AprovalList
              key={pendingUser.id}
              pendingUser={pendingUser}
              handlingApprovalrequestToServer={handlingApprovalrequestToServer}
              loadingStatus={isLoading}
            />
          ))}
        </ScrollableBody>
      </StyledUserManagementTableList>
    </StyledUserManagementMainContainer>
  );
};

export default ApprovalRequest;
