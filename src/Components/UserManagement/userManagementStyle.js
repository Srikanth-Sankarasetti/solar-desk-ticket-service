import { styled } from "styled-components";
import { MdDelete } from "react-icons/md";

export const StyledUserManagementMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-right: 1rem;
`;

export const StyledUserManagementTableList = styled.div`
  width: 100%;
  padding-left: 5rem;
  padding-top: 1rem;
  gap: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledUserManagmentTableHeader = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${(props) =>
    props.$tab === "management" ? "repeat(6, 1fr)" : "repeat(5, 1fr)"};
  color: var(--textHeader);
  font-size: 1.4rem;
  font-weight: 500;
  flex-shrink: 0;
  padding-left: 1rem;
  gap: 1.5rem;
  word-break: break-all;
  @media (max-width: 1010px) {
    font-size: 1.2rem;
  }
`;

export const StyledUserManagementTableRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${(props) =>
    props.$tab === "management" ? "repeat(6, 1fr) " : "repeat(5, 1fr)"};
  color: var(--textBody);
  gap: 2rem;
  padding: 1rem 1rem;
  font-size: 1.5rem;
  border-bottom: 0.01rem solid lightgray;
  transition: background-color 0.2s ease-in;
  word-break: break-all;
  &:hover {
    background-color: var(--scrollbarTrack);
  }
  &:last-child {
    border-bottom: none;
  }
  @media (max-width: 1010px) {
    font-size: 1.2rem;
  }
`;

export const StyeldUserRoleSelect = styled.select`
  width: fit-content;
  text-overflow: ellipsis;
  outline: none;
  background-color: var(--rowBorderColor);
  color: var(--textBody);
  border: none;
  border-radius: 5px;
  &:focus {
    border: 1px solid var(--infoColor);
  }
  @media (max-width: 1092px) {
    width: 90%;
  }
`;

export const StyledUserRoleUpdateButton = styled.button`
  width: fit-content;
  height: fit-content;
  padding: 1rem;
  border-radius: 10px;
  color: var(--buttonPrimaryText);
  background-color: var(--buttonPrimarybg);
  border: none;
  cursor: pointer;
  @media (max-width: 1092px) {
    font-size: 1.2rem;
  }
  &:hover {
    background-color: var(--buttonPrimaryHoverBg);
  }
`;

export const StyledDeleteIcon = styled(MdDelete)`
  fill: #ef4444;
  margin: 0.5rem;
  cursor: pointer;
  &:hover {
    fill: #b91c1c;
  }
  font-size: 2.2rem;
`;
