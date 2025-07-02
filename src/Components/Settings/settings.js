import { styled } from "styled-components";

export const StyledSettingMainHeader = styled.div`
  display: flex;
  flex-direction: column;
  word-break: break-all;
  width: auto;
  gap: 3rem;
  padding: 2rem 0 0 4rem;
  height: calc(100vh - 130px);
  overflow-y: scroll;
`;

export const StyledSettingHeader = styled.div`
  font-size: 3.5rem;
  color: var(--textBody);
  @media (max-width: 704px) {
    font-size: 2rem;
  }
`;

export const StyledUserDataUpdateMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const StyeldUserUpdateForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 60%;
`;

export const StyeduserUpdateContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
  margin-left: 2rem;
  position: relative;
  @media (max-width: 867px) {
    width: 100%;
  }
`;

export const StyeduserUpdateLabel = styled.label`
  width: 20%;
  font-size: 1.2rem;
  color: var(--textBody);
`;

export const StyeduserUpdateInput = styled.input`
  width: 80%;
  height: 3rem;
  background-color: var(--inputBg);
  color: var(--inputText);
  border-radius: 5px;
  outline: none;
  border: 1px solid var(--inputBorder);
  padding: 0.8rem;
  &:focus {
    border: 1px solid var(--navActiveBg);
  }
  &:disabled {
    background-color: var(--inputTextDisabled);
  }
`;

export const StyledFileLabel = styled.label`
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  margin-top: 0.5rem;
  width: 20%;
  font-size: 1.2rem;
`;

export const StyledFileInput = styled.input`
  width: 60%;
  height: 3rem;
  color: var(--inputText);
  border-radius: 5px;
  outline: none;
  border: none;
  padding: 0.2rem;
  &:disabled {
    background-color: var(--inputTextDisabled);
  }
  &::file-selector-button {
    padding: 0.6rem 1rem;
    background-color: #0891b2;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    margin-right: 1rem;
    transition: background-color 0.3s ease;
  }
  &::file-selector-button:hover {
    background-color: #067e9b;
  }
`;

export const StyledUpdateAccountButton = styled.button`
  width: fit-content;
  padding: 0.6rem;
  border-radius: 5px;
  outline: none;
  border: none;
  background-color: var(--buttonPrimarybg);
  color: var(--buttonPrimaryText);
  cursor: pointer;
  align-self: flex-end;
  margin-top: 1rem;
  &:hover {
    background-color: var(--buttonPrimaryHoverBg);
  }
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
