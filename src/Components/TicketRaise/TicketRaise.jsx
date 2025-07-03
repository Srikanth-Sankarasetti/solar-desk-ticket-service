import {
  StyledRaiseTickedContainer,
  StyledRaiseTickedHeader,
  StyledRaisedTicketForm,
  StyledInputContainer,
  StyledRaisedTicketInput,
  StyledRaisedTicketLable,
  StyledRaisedTicketTextArea,
  StyledRaisedTicketSubmitButton,
  RiasedTiecketHand,
} from "./ticketRaiseStyle";
import { useGlobalContext, ACTIONS } from "../../ui/globalContext";

import { useForm, Controller } from "react-hook-form";

import schema from "../../utils/tickerRaiseValidationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import PlantSelectForm from "./PlantSelectForm";
import useApiRequest from "../../ui/apiRequest";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { RotatingLines } from "react-loader-spinner";

const TicketRaise = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { state, dispatch } = useGlobalContext();
  const { isLoading, error, makeApi } = useApiRequest();

  const token = Cookies.get("token");

  const handleSubmitForm = async (data) => {
    const selectedPlant = state.plants.find((p) => p.id === data.plantId);
    console.log(selectedPlant);
    console.log(state.users);
    const assignedengineer = state.users.find(
      (p) =>
        p.name === selectedPlant?.ownerName ||
        p.id === selectedPlant?.plantOwner
    );
    console.log(assignedengineer);
    console.log(data);

    try {
      const result = await makeApi({
        url: "https://solar-desk.onrender.com/api/solar/v1/issues/raiseTicket",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: data,
      });
      if (result?.status === "success") {
        const addedIssuePlant = [
          ...state.issuesPlants,
          {
            _id: result.data.issue._id,
            issueTitle: result.data.issue.issueTitle,
            issueDescription: result.data.issue.issueTitleDescription,
            status: result.data.issue.status,
            createdAt: result.data.issue.createdAt,
            plantName: selectedPlant?.plantName, // ✅ derived from plant list
            raisedByName: result.data.issue.raisedByName,
            assignedEngineerName: assignedengineer.name,
            plantCapacityKwp: selectedPlant?.capacityKwp,
          },
        ];
        dispatch({
          type: ACTIONS.SET_ISSUES_PLNATS,
          payload: addedIssuePlant,
        });
        toast.success("Ticket Raised Successfully");
        reset();
      }
    } catch (err) {
      toast.error(err.message);
      console.log(err);
    }
  };

  return (
    <StyledRaiseTickedContainer>
      <StyledRaiseTickedHeader>
        <RiasedTiecketHand />
        <span>Raise The Ticket Below </span>
      </StyledRaiseTickedHeader>
      <StyledRaisedTicketForm onSubmit={handleSubmit(handleSubmitForm)}>
        <StyledInputContainer>
          <StyledRaisedTicketLable htmlFor="issue-title">
            Issue Title:
          </StyledRaisedTicketLable>
          <StyledRaisedTicketInput
            type="text"
            autoFocus
            placeholder="Enter issue title..."
            id="issue-title"
            {...register("issueTitle")}
          />
          {errors.issueTitle && (
            <p style={{ color: "red" }}>{errors.issueTitle.message}</p>
          )}
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledRaisedTicketLable htmlFor="plant-name">
            Plant Name:
          </StyledRaisedTicketLable>
          <Controller
            name="plantId"
            control={control}
            render={({ field }) => (
              <PlantSelectForm
                {...field}
                options={state.plants}
                placeholder="Select a Plant"
              />
            )}
          />
          {errors.plantId && (
            <p style={{ color: "red" }}> {errors.plantId.message}</p>
          )}
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledRaisedTicketLable htmlFor="issueDiscrption">
            Issue Title Description
          </StyledRaisedTicketLable>
          <StyledRaisedTicketTextArea
            cols={20}
            rows={10}
            type="text"
            placeholder="Enter Issue Title Description..."
            id="issueDiscrption"
            {...register("issueTitleDescription")}
          />
          {errors.issueTitleDescription && (
            <p style={{ color: "red" }}>
              {errors.issueTitleDescription.message}
            </p>
          )}
        </StyledInputContainer>
        <StyledRaisedTicketSubmitButton type="submit">
          Raise Ticket{" "}
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
        </StyledRaisedTicketSubmitButton>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </StyledRaisedTicketForm>
    </StyledRaiseTickedContainer>
  );
};

export default TicketRaise;
