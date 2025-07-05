import { styled } from "styled-components";
import { FaHandPointDown } from "react-icons/fa";

export const StyledRaiseTickedContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  height: calc(100vh - 120px);
  overflow: hidden;
  overflow-y: auto;
  border-radius: 10px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
`;

export const StyledRaiseTickedHeader = styled.div`
  color: var(--navActiveText);
  font-size: 2rem;
  background-color: var(--navActiveBg);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const StyledRaisedTicketForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: var(--formBg);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: auto;
  padding: 2rem 1.2rem;
  gap: 2rem;
`;

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  font-size: 1.4rem;
  position: relative;
`;
export const StyledRaisedTicketLable = styled.label`
  color: var(--formText);
  font-size: 1.5rem;
`;

export const StyledRaisedTicketInput = styled.input`
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

export const StyledRaisedTicketTextArea = styled.textarea`
  resize: none;
  padding: 1rem;
  color: var(--formText);
  background-color: var(--formInputBg);
  &:focus {
    outline: 2px solid var(--buttonPrimarybg);
    outline-offset: -1px;
  }
`;

export const StyledRaisedTicketSubmitButton = styled.button`
  padding: 1.2rem;
  cursor: pointer;
  border-radius: 5px;
  background-color: var(--buttonPrimarybg);
  color: var(--buttonPrimaryText);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const RiasedTiecketHand = styled(FaHandPointDown)`
  fill: #ffce48;
`;
