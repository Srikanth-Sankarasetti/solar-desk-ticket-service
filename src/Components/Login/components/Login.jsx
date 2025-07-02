import { useForm } from "react-hook-form";
import { schema } from "../../../utils/validationSchema";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Cookies from "js-cookie";
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

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const [isPassowrdShow, setPasswordShow] = useState(false);

  const { isLoading, error, makeApi } = useApiRequest();

  const formdata = async (loginData) => {
    const response = await makeApi({
      url: "https://solar-desk.onrender.com/api/solar/v1/users/login",
      method: "POST",
      body: loginData,
    });

    if (response?.status === "success") {
      Cookies.set("token", response.token);
      navigate("/", { replace: true });
    }
  };

  return (
    <MainContainer>
      <LoginLogoMobile
        src="https://res.cloudinary.com/ducrzzdqj/image/upload/v1749878248/solar_ticket_logo_4_ijwnps.svg"
        alt="login-log"
      />
      <LoginImage
        src="https://res.cloudinary.com/ducrzzdqj/image/upload/v1749576013/freepik__a-25-year-old-asian-man-holding-a-key-in-front-of-__9340_vygsgq.jpg"
        alt="login-Image"
      />

      <Form onSubmit={handleSubmit(formdata)}>
        <LoginLogo
          src="https://res.cloudinary.com/ducrzzdqj/image/upload/v1749878248/solar_ticket_logo_4_ijwnps.svg"
          alt="login-log"
        />
        <LoginName>Login</LoginName>
        <HorizentalLine />
        <InputLabel htmlFor="email">Email :</InputLabel>
        <EmailInput
          autoFocus
          id="email"
          placeholder="Email"
          {...register("email", { required: "* email is required" })}
        />
        {errors.email && <ErrorPara>{errors.email.message}</ErrorPara>}
        <InputLabel htmlFor="password">Password :</InputLabel>
        <PassowrdContainer>
          <EmailInput
            id="password"
            type={isPassowrdShow ? "text" : "password"}
            placeholder="Password"
            {...register("password", {
              required: "*   Password is required",
            })}
          />
          <HidePassword onClick={() => setPasswordShow((prev) => !prev)}>
            {isPassowrdShow ? (
              <FaEyeSlash title="Hide Password" />
            ) : (
              <FaEye title="Show Password" />
            )}
          </HidePassword>
        </PassowrdContainer>
        {errors.password && <ErrorPara>{errors.password.message}</ErrorPara>}
        <SubmitButton type="submit">
          Login{" "}
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
          <Navlink to="/signup">Create Account</Navlink>
          <Navlink to="/forgot-password">Forgot Passowrd</Navlink>
        </ExternalContainer>
      </Form>
    </MainContainer>
  );
};

export default Login;
