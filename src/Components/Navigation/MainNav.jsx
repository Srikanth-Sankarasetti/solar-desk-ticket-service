import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import getuserRole from "../../utils/getuserRole";
import {
  HiOutlineSquares2X2,
  HiOutlinePlusCircle,
  HiOutlineArrowDownTray,
  HiOutlineUsers,
} from "react-icons/hi2";
import { FaTicketAlt } from "react-icons/fa"; // Font Awesome
import { FaClipboardCheck, FaSolarPanel } from "react-icons/fa";
import { useGlobalContext } from "../../ui/globalContext";

const NavList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledNavlink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem 3.4rem;
  font-size: 1.6rem;
  font-weight: 500;
  gap: 1rem;
  color: var(--navText);
  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--navIconColor);
  }

  &:hover {
    background-color: var(--navHoverBg);
    color: var(--navHoverText);

    svg {
      color: var(--navIconHover);
    }
  }

  &.active {
    background-color: var(--navActiveBg);
    color: var(--navActiveText);
    svg {
      color: var(--navIconActive);
    }
  }
`;

const MainNav = () => {
  const { state } = useGlobalContext();
  const { role } = getuserRole();
  const isAdmin = role === "admin";
  const isManager = role === "manager";
  const filterPendingUsers = state.users.filter(
    (user) => user.status === "pending"
  );
  const totalApprovalRequest = filterPendingUsers.length;
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavlink to="/">
            <HiOutlineSquares2X2 />
            <span>Overview</span>
          </StyledNavlink>
        </li>
        <li>
          <StyledNavlink to="tickets">
            <FaTicketAlt />
            <span>Tickets</span>
          </StyledNavlink>
        </li>
        {(isAdmin || isManager) && (
          <>
            <li>
              <StyledNavlink to="raise-tickets">
                <HiOutlinePlusCircle />
                <span>Raise Ticket</span>
              </StyledNavlink>
            </li>
          </>
        )}
        {isAdmin && (
          <li>
            <StyledNavlink to="user-management">
              <HiOutlineUsers />
              <span>User Management</span>
            </StyledNavlink>
          </li>
        )}
        {isAdmin && (
          <li>
            <StyledNavlink to="approval-requests">
              <FaClipboardCheck />
              <span>Approval Requests </span>
              {totalApprovalRequest > 0 && (
                <span
                  style={{
                    backgroundColor: "green",
                    borderRadius: "50%",
                    padding: "0.5rem",
                    fontSize: "1.3rem",
                    color: "#ffff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {totalApprovalRequest}
                </span>
              )}
            </StyledNavlink>
          </li>
        )}
        {(isAdmin || isManager) && (
          <>
            {" "}
            <li>
              <StyledNavlink to="manage-plants">
                <FaSolarPanel />
                <span>Manage Plants</span>
              </StyledNavlink>
            </li>
          </>
        )}
        <li>
          <StyledNavlink to="downloads">
            <HiOutlineArrowDownTray />
            <span>Download Reports</span>
          </StyledNavlink>
        </li>
      </NavList>
    </nav>
  );
};

export default MainNav;
