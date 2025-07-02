import { schema } from "../../../utils/forgotValidationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { LoginButtonInForgotPassword } from "../styles/forgotPassword";
import useApiRequest from "../../../ui/apiRequest";
import toast from "react-hot-toast";
import { RotatingLines } from "react-loader-spinner";
import {
  MainContainer,
  Form,
  LoginImage,
  EmailInput,
  LoginName,
  HorizentalLine,
  InputLabel,
  SubmitButton,
  ErrorPara,
  LoginLogo,
  LoginLogoMobile,
} from "../styles/loginStyles";

const ForgotPassowrd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { isLoading, error, makeApi } = useApiRequest();

  const handleResetEmail = async (email) => {
    try {
      const result = await makeApi({
        url: "https://solar-desk.onrender.com/api/solar/v1/users/forgotPassword",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: email,
      });

      if (result?.status === "success") {
        toast.success(result.message);
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
        src="https://res.cloudinary.com/ducrzzdqj/image/upload/v1749779811/11906379_4841115_vxbny8.jpg"
        alt="rest-passowrd"
      />
      <Form onSubmit={handleSubmit(handleResetEmail)}>
        <LoginLogo
          src="https://res.cloudinary.com/ducrzzdqj/image/upload/v1749878248/solar_ticket_logo_4_ijwnps.svg"
          alt="login-log"
        />
        <LoginName>Forgot Password</LoginName>
        <HorizentalLine />
        <InputLabel htmlFor="email">Email</InputLabel>
        <EmailInput
          id="email"
          autoFocus
          placeholder="Enter Email Id"
          {...register("email", { required: "* email field is required" })}
        />
        {errors.email && <ErrorPara>{errors.email.message}</ErrorPara>}
        <SubmitButton type="submit">
          Send Password Reset Email{" "}
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
        <LoginButtonInForgotPassword to="/login">
          Go back to login{" "}
        </LoginButtonInForgotPassword>
      </Form>
    </MainContainer>
  );
};

export default ForgotPassowrd;
