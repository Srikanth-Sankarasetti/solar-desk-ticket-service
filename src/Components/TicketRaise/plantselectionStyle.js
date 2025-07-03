import { styled } from "styled-components";
import { ChevronDown } from "lucide-react";

export const PlantselectFormContainer = styled.div`
  position: relative;
`;

export const StyledPlantSelectionButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: var(--formText);
  border: 1.5px solid var(--borderColor);
  border-radius: 3px;
  background-color: var(--formInputBg);
  cursor: pointer;
`;

export const StyledChevronDown = styled(ChevronDown)`
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: all 200ms ease-in;
`;

export const StyledSlectFormContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;

  background-color: var(--formInputBg);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  z-index: 20;
  width: 100%;
  height: 250px;
  border-radius: 5px;
  overflow-y: scroll;
`;

export const StyledInputSearch = styled.input`
  width: 98%;
  display: block;
  padding: 1rem;
  border-radius: 5px;
  margin: 1rem auto;
  border: 1.5px solid var(--navHoverText);
  outline: none;
  background-color: var(--formInputBg);
  color: var(--formText);
  font-size: 1.7rem;
  &:focus {
    border: 1.5px solid #9dc0fa;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 1175px) {
    font-size: 1rem;
  }
`;

export const StyledPlantsListShowSelect = styled.div`
  display: flex;
  align-items: center;
  padding: 0.6rem 1.2rem;
  gap: 1rem;
  cursor: pointer;
  &:hover {
    background-color: var(--borderColor);
  }
`;
export const StyledPlantNameSelect = styled.div`
  font-weight: 500;
  font-size: 1.6rem;
  color: var(--formText);
`;
export const StyledSelectMapin = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 1.2rem;
  color: var(--formLabel);
`;
