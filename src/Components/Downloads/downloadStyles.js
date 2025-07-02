import { styled } from "styled-components";

export const StyledDownloadContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  font-size: 1.4rem;
  position: relative;
`;

export const StyledDownloadInput = styled.input`
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

export const StyledDownloadDateContainer = styled.div`
  background-color: var(--navBorderColor);
  width: 100%;
  max-width: 400px;
  padding: 1rem;
  border: 1px solid var(--textMuted);
  border-radius: 5px;
`;
export const StyledDownlaodDateSecondContainer = styled.div``;

export const StyledDownloadDateSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`;

export const StyledDownloadSelectLabel = styled.label`
  display: block;
  padding-bottom: 0.2rem;
  color: var(--textBody);
  padding-bottom: 0.7rem;
  font-size: 1.8rem;
`;

export const StyledDownloadSlectInput = styled.input`
  height: 5rem;
  width: 350px;
  cursor: pointer;
  font-size: 2rem;
  outline: none;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  outline: none;
  border: 1px solid var(--navText);
  color: var(--headerBg);
  background-color: var(--navText);
  &::-webkit-calendar-picker-indicator {
    color: var(--headerBg);
    cursor: pointer;
  }
  &:hover {
    border-color: #888;
  }
  &:focus {
    border-color: #0ea5e9;
    box-shadow: 0 0 0 2px rgba(14, 165, 233, 0.2);
  }
  @media (max-width: 723px) {
    width: 100%;
  }
  &::-moz-focus-inner {
    border: 0;
  }
`;
