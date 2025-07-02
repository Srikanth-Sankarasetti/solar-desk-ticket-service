import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { schema } from "../../../utils/createUseValidationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import useApiRequest from "../../../ui/apiRequest";
import toast from "react-hot-toast";
import { RotatingLines } from "react-loader-spinner";
import {
  MainContainer,
  Form,
  LoginName,
  HorizentalLine,
  EmailInput,
  InputLabel,
  PassowrdContainer,
  HidePassword,
  ErrorPara,
  LoginImage,
  LoginLogo,
  LoginLogoMobile,
} from "../styles/loginStyles";
import {
  RequiredSpan,
  SignupButton,
  ButtonContainer,
  LoginButtonInSignUp,
} from "../styles/createAccount";

const AccountCreation = () => {
  const [isPassowrdShow, setPasswordShow] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { isLoading, error, makeApi } = useApiRequest();

  const handleSignupForm = async (formData) => {
    try {
      const result = await makeApi({
        url: "https://solar-desk.onrender.com/api/solar/v1/users",
        method: "POST",
        headers: {
          "Cotent-Type": "application/json",
        },
        body: formData,
      });
      if (result?.status === "success") {
        toast.success(result?.message);
        reset();
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <MainContainer>
      <LoginLogoMobile
        src="https://res.cloudinary.com/ducrzzdqj/image/upload/v1749878248/solar_ticket_logo_4_ijwnps.svg"
        alt="login-log"
      />
      <LoginImage
        src="https://res.cloudinary.com/ducrzzdqj/image/upload/v1749739633/5423351_Mobile-login_sbmdjf.jpg"
        alt="signup_image"
      />
      <Form onSubmit={handleSubmit(handleSignupForm)}>
        <LoginLogo
          src="https://res.cloudinary.com/ducrzzdqj/image/upload/v1749878248/solar_ticket_logo_4_ijwnps.svg"
          alt="login-log"
        />
        <LoginName>Create Account</LoginName>
        <HorizentalLine />
        <InputLabel htmlFor="name">
          <RequiredSpan>* </RequiredSpan>Name :
        </InputLabel>
        <EmailInput
          id="name"
          autoFocus
          placeholder="Name"
          {...register("name", { required: "* Name Field Required" })}
        />
        {errors.name && <ErrorPara>{errors.name.message}</ErrorPara>}
        <InputLabel htmlFor="email">
          <RequiredSpan>* </RequiredSpan>Email :
        </InputLabel>
        <EmailInput
          id="email"
          placeholder="Email"
          {...register("email", { required: "* email Field Required" })}
        />
        {errors.email && <ErrorPara>{errors.email.message}</ErrorPara>}
        <InputLabel htmlFor="password">
          <RequiredSpan>* </RequiredSpan>Password :
        </InputLabel>
        <PassowrdContainer>
          <EmailInput
            id="password"
            type={isPassowrdShow ? "text" : "password"}
            placeholder="Password"
            {...register("password", { required: "* Password is required" })}
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
        <InputLabel htmlFor="confirmPassword">
          <RequiredSpan>* </RequiredSpan>Confirm Password :
        </InputLabel>
        <EmailInput
          id="confirmPassword"
          type="text"
          placeholder="Confirm Password"
          {...register("confirmPassword", {
            required: "* confirmPassword Field Required",
          })}
        />
        {errors.confirmPassword && (
          <ErrorPara>{errors.confirmPassword.message}</ErrorPara>
        )}
        <ButtonContainer>
          <SignupButton type="submit">
            Sign Up{" "}
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
          </SignupButton>
          <LoginButtonInSignUp to="/login">Sign In</LoginButtonInSignUp>
        </ButtonContainer>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </Form>
    </MainContainer>
  );
};

export default AccountCreation;
