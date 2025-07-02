import { styled } from "styled-components";

export const IssueUpdateMainContainer = styled.div`
  margin: 1rem 1.5rem;
  height: calc(100vh - 120px);
  overflow: hidden;
  overflow-y: auto;
`;

export const IssueUpdateMailTitle = styled.h2`
  color: var(--textBody);
`;

export const IssueUpdatePresentDataContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const IssueUpdatePresentDataInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const IssueUpdatePresetDataInputLabel = styled.label`
  font-size: 1.4rem;
  color: var(--formLabel);
`;

export const IssuesUpdatePresentDataInput = styled.input`
  margin-top: 0.3rem;
  height: 3rem;
  border-radius: 5px;
  padding: 1rem;
  background-color: var(--scrollbarThumbActive);
  color: var(--buttonPrimaryText);
  outline: none;
  border: none;
`;

export const IssuesUpdatePresetTextArea = styled.textarea`
  resize: none;
  margin-top: 0.3rem;
  border-radius: 5px;
  padding: 1rem;
  background-color: var(--scrollbarThumbActive);
  color: var(--buttonPrimaryText);
  outline: none;
  border: none;
`;

export const IssuesUpdateDataFormContainer = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const IssuesUpdateDataMainLabel = styled.label`
  font-size: 1.4rem;
  color: var(--textBody);
`;

export const IssueUpdateDataMainSelect = styled.select`
  height: 4.5rem;
  padding: 1rem;
  background-color: var(--formInputBg);
  color: var(--textBody);
  border-radius: 5px;
  outline: none;
  border: 0.1px solid var(--scrollbarThumb);
`;

export const IssueUpdateDataMainInput = styled.input`
  height: 4.5rem;
  padding: 1rem;
  background-color: var(--formInputBg);
  color: var(--textBody);
  border-radius: 5px;
  outline: none;
  border: 0.1px solid var(--scrollbarThumb);
`;

export const IssueUpdateDataActionTextArea = styled.textarea`
  resize: none;
  padding: 1rem;
  background-color: var(--formInputBg);
  color: var(--textBody);
  border-radius: 5px;
  outline: none;
  border: 0.1px solid var(--scrollbarThumb);
`;

export const IssueUpdateDataMainButton = styled.button`
  margin-top: 2rem;
  height: 3.5rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: var(--successColor);
`;
