import {
  StyledUserManagementTableRow,
  StyeldUserRoleSelect,
  StyledUserRoleUpdateButton,
  StyledDeleteIcon,
} from "./userManagementStyle";
import { useState } from "react";
import toast from "react-hot-toast";

const UseList = ({
  users,
  updatingUserRoleToServer,
  deletedUserFromServer,
}) => {
  const [userRole, setRole] = useState("");
  const roleChange = (data) => {
    setRole(data);
  };

  const updateRoleButtonClick = () => {
    if (!userRole || userRole === users.role) {
      toast.error("Please select a different role to update");
      return;
    }
    if (userRole !== "") {
      updatingUserRoleToServer({ role: userRole, id: users.id });
      setRole("");
    }
  };

  const deletedUserAccount = () => {
    deletedUserFromServer(users.id);
  };

  return (
    <StyledUserManagementTableRow role="row" $tab="management">
      <div>{users.name}</div>
      <div>{users.email}</div>
      <div>{users.role}</div>
      <StyeldUserRoleSelect
        value={userRole || ""}
        onChange={(e) => {
          roleChange(e.target.value);
        }}
      >
        <option value="">Select Role to Update</option>
        <option value="engineer">Engineer</option>
        <option value="admin">Admin</option>
        <option value="manager">Manager</option>
        <option value="vendor">Vendor</option>
      </StyeldUserRoleSelect>
      <StyledUserRoleUpdateButton onClick={updateRoleButtonClick}>
        Update Role
      </StyledUserRoleUpdateButton>
      <StyledDeleteIcon onClick={deletedUserAccount} />
    </StyledUserManagementTableRow>
  );
};

export default UseList;
