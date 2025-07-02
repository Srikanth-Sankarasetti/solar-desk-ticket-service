import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledPlantManagementMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const StyledPlantManagementNavlinkContainer = styled.div`
  display: flex;
  padding-top: 0.5rem;
`;

export const StyledPlantManagementNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1.4rem;
  padding: 0.5rem 1rem;
  border-radius: 2px;
  color: var(--statusTabHoverBg);
  background-color: var(--navIconColor);
  &.active {
    background-color: var(--textBody);
  }
`;

export const StyledAddPlantContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  height: calc(100vh - 145px);
  overflow: hidden;
  overflow-y: auto;
  border-radius: 10px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
`;

export const StyledAddPlantSelect = styled.select`
  height: 4.3rem;
  padding: 1rem;
  border: 1.5px solid var(--borderColor);
  border-radius: 3px;
  outline: none;
  background-color: var(--formInputBg);
  color: var(--formText);
  font-size: 1.7rem;
  &:focus {
    outline: none;
    border: none;
    border-bottom: 3px solid var(--buttonPrimarybg);
    outline-offset: -1px;
  }
`;

export const StyledEditPlantInput = styled.input``;
