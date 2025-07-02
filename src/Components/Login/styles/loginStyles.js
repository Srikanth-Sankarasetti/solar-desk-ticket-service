import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  background-color: #ffff;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100dvh;
  min-width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const LoginImage = styled.img`
  width: 100%;
  width: 50rem;
  height: 100%;

  display: inline-block;
  @media (max-width: 992px) {
    width: 30rem;
    height: 30rem;
  }
  @media (max-width: 460px) {
    width: 25rem;
    height: 25rem;
  }
`;

export const LoginLogo = styled.img`
  width: 60%;
  align-self: center;
  height: auto;
  @media (max-width: 992px) {
    display: none;
  }
`;

export const LoginLogoMobile = styled.img`
  width: 30%;
  height: auto;
  @media (min-width: 993px) {
    display: none;
  }
`;

export const Form = styled.form`
  width: 50rem;
  height: 100%;
  padding: 2rem;
  background-color: #ffffff;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 1.2rem;
  @media (max-width: 992px) {
    background-color: none;
    box-shadow: none;
    width: 40rem;
    order: 2;
    padding-top: 0;
  }
  @media (max-width: 460px) {
    background-color: none;
    box-shadow: none;
    width: 25rem;
    padding-top: 0;
  }
`;

export const InputLabel = styled.label`
  color: #000000;
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 1rem;
  @media (max-width: 568px) {
    font-size: 1.2rem;
  }
`;

export const PassowrdContainer = styled.div`
  position: relative;
  width: 100%;
  border: none;
`;

export const EmailInput = styled.input`
  width: 100%;
  height: 4rem;
  padding: 0 1rem;
  color: #8d9198;
  font-weight: 700;
  background-color: #e2e8f0;
  font-size: 1.5rem;
  outline: none;

  margin: 0.6rem 0 0.3rem 0;
  border: 1px solid #000000;
  border-radius: 5px;
  &:focus {
    border: none;
    border-bottom: 0.3rem solid green;
    box-shadow: 0 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.2);
  }
`;

export const HidePassword = styled.span`
  position: absolute;
  top: 50%;
  right: 1.2rem;
  transform: translateY(-40%);
  display: inline-block;
  cursor: pointer;
  color: #555;
  font-size: 1.9rem;
  &:hover {
    color: #000;
  }
`;
export const ErrorPara = styled.p`
  color: red;
  font-size: 1.2rem;
`;

export const SubmitButton = styled.button`
  background-color: rgb(55, 139, 96);
  color: #ffffff;
  font-size: 1.5rem;
  height: 4.2rem;
  border-radius: 0.5rem;
  margin-top: 2rem;
  cursor: pointer;
  transition: transform 300ms ease;
  &:hover {
    background-color: #194830;
  }
  &:active {
    transform: translateY(2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2) inset;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const LoginName = styled.h3`
  font-size: 2.4rem;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: 100;
  color: green;
`;

export const HorizentalLine = styled.hr`
  margin: 0.8rem 0 0.2rem 0;
  background-color: green;
  height: 0.2rem;
  width: 100%;
`;

export const ExternalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Navlink = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  color: rgb(11, 116, 228);
  padding: 2rem 0;
  @media (max-width: 460px) {
    font-size: 1.2rem;
  }
`;
