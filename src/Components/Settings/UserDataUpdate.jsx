import getuserRole from "../../utils/getuserRole";
import { useForm } from "react-hook-form";
import { useGlobalUserContext, USERACTION } from "../../ui/userContext";
import useApiRequest from "../../ui/apiRequest";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { RotatingLines } from "react-loader-spinner";
import {
  StyledUserDataUpdateMainContainer,
  StyeldUserUpdateForm,
  StyeduserUpdateContainer,
  StyeduserUpdateLabel,
  StyeduserUpdateInput,
  StyledFileInput,
  StyledUpdateAccountButton,
} from "./settings";

const UserDataUpdate = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { userDispatch } = useGlobalUserContext();
  const { isLoading, makeApi } = useApiRequest();
  const { email, id, name } = getuserRole();
  const token = Cookies.get("token");

  const handleUserAccountUpdate = async (data) => {
    const formData = new FormData();
    if (data.file[0]) {
      formData.append("photo", data.file[0]); // actual file}
    }
    if (data.fullName) {
      formData.append("name", data.fullName);
    }
    try {
      const result = await makeApi({
        url: `https://solar-desk.onrender.com/api/solar/v1/users/updateMe/${id}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (result?.status === "success") {
        toast.success("User Data updated successfully");
        const userDetails = {
          name: result.user.name,
          email: result.user.email,
          image: result.user.photo,
        };
        userDispatch({ type: USERACTION.SET_USER, payload: userDetails });
      }
    } catch (err) {
      toast.error(err.message);
    }
    reset();
  };
  return (
    <StyledUserDataUpdateMainContainer>
      <div style={{ fontSize: "2rem", color: "var(--textBody)" }}>
        Update User Data
      </div>
      <StyeldUserUpdateForm onSubmit={handleSubmit(handleUserAccountUpdate)}>
        <StyeduserUpdateContainer>
          <StyeduserUpdateLabel>Email</StyeduserUpdateLabel>
          <StyeduserUpdateInput
            type="text"
            readOnly
            disabled
            value={email}
            {...register("email")}
          />
        </StyeduserUpdateContainer>
        <StyeduserUpdateContainer>
          <StyeduserUpdateLabel>Full Name</StyeduserUpdateLabel>
          <StyeduserUpdateInput
            type="text"
            placeholder="Enter the your full name"
            value={name}
            readOnly
            disabled
            {...register("fullName")}
          />
        </StyeduserUpdateContainer>
        <StyeduserUpdateContainer>
          <StyeduserUpdateLabel htmlFor="avatar">Avatar</StyeduserUpdateLabel>
          <StyledFileInput
            id="avatar"
            type="file"
            accept="image/*"
            {...register("file")}
          />
        </StyeduserUpdateContainer>
        <StyledUpdateAccountButton type="submit">
          Update Account{" "}
          {isLoading && (
            <RotatingLines
              visible={true}
              height="20"
              width="20"
              color="white"
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

export default UserDataUpdate;
