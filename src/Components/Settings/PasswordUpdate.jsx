import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  StyledUserDataUpdateMainContainer,
  StyeldUserUpdateForm,
  StyeduserUpdateContainer,
  StyeduserUpdateLabel,
  StyeduserUpdateInput,
  StyledUpdateAccountButton,
} from "./settings";
import { RotatingLines } from "react-loader-spinner";
import getuserRole from "../../utils/getuserRole";
import useApiRequest from "../../ui/apiRequest";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const PasswordUpdate = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const { isLoading, error, makeApi } = useApiRequest();
  const token = Cookies.get("token");
  const { id } = getuserRole();
  const navigate = useNavigate();

  const password = watch("password");
  const currentPassword = watch("currentPassword");
  const handleUserPassowrdUpdate = async (data) => {
    try {
      const result = await makeApi({
        method: "PATCH",
        url: `https://solar-desk.onrender.com/api/solar/v1/users/updatePassword/${id}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: data,
      });
      if (result?.status === "success") {
        toast.success(result.message);
        Cookies.remove("token");
        reset();
        navigate("/login", { replace: true });
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <StyledUserDataUpdateMainContainer>
      <div style={{ fontSize: "2rem", color: "var(--textBody)" }}>
        Update Password
      </div>
      <StyeldUserUpdateForm onSubmit={handleSubmit(handleUserPassowrdUpdate)}>
        <StyeduserUpdateContainer>
          <StyeduserUpdateLabel>current Password</StyeduserUpdateLabel>
          <StyeduserUpdateInput
            type="text"
            placeholder="Enter the old password"
            {...register("currentPassword", {
              required: "* current password required",
            })}
          />
          <div style={{ position: "absolute", top: "100%", left: "23%" }}>
            {errors.currentPassword && (
              <p style={{ color: "red" }}>{errors.currentPassword.message}</p>
            )}
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
        </StyeduserUpdateContainer>

        <StyeduserUpdateContainer>
          <StyeduserUpdateLabel>New Password</StyeduserUpdateLabel>
          <StyeduserUpdateInput
            type="password"
            placeholder="Enter the new password"
            {...register("password", {
              required: "* New password required",
              validate: (value) =>
                value !== currentPassword ||
                "* new password and old password should be different",
            })}
          />
          <div style={{ position: "absolute", top: "100%", left: "23%" }}>
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password.message}</p>
            )}
          </div>
        </StyeduserUpdateContainer>
        <StyeduserUpdateContainer>
          <StyeduserUpdateLabel>Confirm Password</StyeduserUpdateLabel>
          <StyeduserUpdateInput
            type="text"
            placeholder="Confirm password"
            {...register("confirmPassword", {
              required: "* Password confirmation required",
              validate: (value) =>
                value === password ||
                "* Newpassword & Confirm Passowrd do not match",
            })}
          />
          <div style={{ position: "absolute", top: "100%", left: "23%" }}>
            {errors.confirmPassword && (
              <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
            )}
          </div>
        </StyeduserUpdateContainer>
        <StyledUpdateAccountButton type="submit">
          Update Password{" "}
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
        </StyledUpdateAccountButton>
      </StyeldUserUpdateForm>
    </StyledUserDataUpdateMainContainer>
  );
};

export default PasswordUpdate;
