import { useParams, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import useApiRequest from "../../../ui/apiRequest";
import { RotatingLines } from "react-loader-spinner";

import {
  MainContainer,
  Form,
  EmailInput,
  LoginImage,
  InputLabel,
  ErrorPara,
  SubmitButton,
  Navlink,
  ExternalContainer,
  PassowrdContainer,
  HidePassword,
  LoginName,
  HorizentalLine,
  LoginLogo,
  LoginLogoMobile,
} from "../styles/loginStyles";
import { useState } from "react";

const ResetPassowrd = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const [newPassword, setNewPassowrd] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [isPassowrdShow, setPasswordShow] = useState(false);
  const { isLoading, error, makeApi } = useApiRequest();

  const formdata = async (e) => {
    e.preventDefault();
    const data = {
      password: newPassword,
      confirmPassword,
    };
    try {
      const response = await makeApi({
        url: `https://solar-desk.onrender.com/api/solar/v1/users/reset-password/${token}`,
        method: "PATCH",
        body: data,
      });

      if (response?.status === "success") {
        toast.success(`${response.message}, please login`);
        navigate("/login", { replace: true });
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <MainContainer>
      <LoginLogoMobile
        src="https://res.cloudinary.com/ducrzzdqj/image/upload/v1751454134/20602817_6321602_dvnca6.jpg"
        alt="login-log"
      />
      <LoginImage
        src="https://res.cloudinary.com/ducrzzdqj/image/upload/v1751454134/20602817_6321602_dvnca6.jpg"
        alt="login-Image"
      />

      <Form onSubmit={formdata}>
        <LoginLogo
          src="https://res.cloudinary.com/ducrzzdqj/image/upload/v1749878248/solar_ticket_logo_4_ijwnps.svg"
          alt="login-log"
        />
        <LoginName>Reset Password</LoginName>
        <HorizentalLine />

        <InputLabel htmlFor="password">New Password :</InputLabel>
        <PassowrdContainer>
          <EmailInput
            id="password"
            type={isPassowrdShow ? "text" : "password"}
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassowrd(e.target.value)}
          />
          <HidePassword onClick={() => setPasswordShow((prev) => !prev)}>
            {isPassowrdShow ? (
              <FaEyeSlash title="Hide Password" />
            ) : (
              <FaEye title="Show Password" />
            )}
          </HidePassword>
        </PassowrdContainer>
        <InputLabel htmlFor="confirmPassword">New Password :</InputLabel>
        <EmailInput
          autoFocus
          id="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <SubmitButton type="submit">
          Change Password{" "}
          {isLoading && (
            <RotatingLines
              visible={true}
              height="20"
              width="20"
              color="grey"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
            />
          )}
        </SubmitButton>
        {error && <ErrorPara>* {error}</ErrorPara>}
        <ExternalContainer>
          <Navlink to="/login">Login</Navlink>
          <Navlink to="/signup">Signup</Navlink>
        </ExternalContainer>
      </Form>
    </MainContainer>
  );
};

export default ResetPassowrd;
