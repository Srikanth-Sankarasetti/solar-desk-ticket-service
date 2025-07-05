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
import { ThreeCircles } from "react-loader-spinner";

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
        url: `https://solar-desk.onrender.com/api/solar/v1/users/approve/${id}`,
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
          <span style={{ color: "var(--successColor)" }}>NO </span>
          approval request at present
        </h3>
      </div>
    );
  };

  const returnResultOnStatus = () => {
    if (state.loading.users) {
      return loaderpinner();
    }
    if (searchUserData.length === 0) {
      return noContentAvialble();
    }
    return (
      <>
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
      </>
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
        <StyledUserManagmentTableHeader role="row">
          <div>Name</div>
          <div>Email</div>
          <div>Role</div>
          <div>Approval Status</div>
          <div>Action</div>
        </StyledUserManagmentTableHeader>
        {returnResultOnStatus()}
      </StyledUserManagementTableList>
    </StyledUserManagementMainContainer>
  );
};

export default ApprovalRequest;
