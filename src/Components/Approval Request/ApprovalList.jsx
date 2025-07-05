import {
  StyledUserManagementTableRow,
  StyledUserRoleUpdateButton,
} from "../UserManagement/userManagementStyle";
import { RotatingLines } from "react-loader-spinner";
import { TiTick } from "react-icons/ti";

const AprovalList = ({
  pendingUser,
  handlingApprovalrequestToServer,
  loadingStatus,
}) => {
  const handleApproval = () => {
    handlingApprovalrequestToServer(pendingUser.id);
  };
  return (
    <StyledUserManagementTableRow role="row">
      <div>{pendingUser.name}</div>
      <div>{pendingUser.email}</div>
      <div>{pendingUser.role}</div>
      <div>{pendingUser.status}</div>
      <StyledUserRoleUpdateButton onClick={handleApproval}>
        <TiTick title="approve account" />{" "}
        {loadingStatus && (
          <RotatingLines
            visible={true}
            height="15"
            width="15"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
          />
        )}
      </StyledUserRoleUpdateButton>
    </StyledUserManagementTableRow>
  );
};

export default AprovalList;
