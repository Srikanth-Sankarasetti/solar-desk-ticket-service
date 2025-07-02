import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const SignupImage = styled.img`
  width: 100%;
  max-width: 50rem;
  height: 100%;
  display: inline-block;
`;

export const RequiredSpan = styled.span`
  color: red;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SignupButton = styled.button`
  background-color: rgb(55, 139, 96);
  color: #ffffff;
  height: 4rem;
  width: 14rem;
  border-radius: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: transform 300ms ease;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  &:hover {
    background-color: rgb(7, 90, 7);
  }
  &:active {
    transform: translateY(2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2) inset;
  }
  padding: 0.1rem;
  @media (max-width: 460px) {
    width: 7rem;
  }
`;

export const LoginButtonInSignUp = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  color: rgb(11, 116, 228);
`;
