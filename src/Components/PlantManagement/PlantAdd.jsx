import schema from "../../utils/addplantValidation";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import UserSelect from "./UserSelect";
import useApiRequest from "../../ui/apiRequest";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { RotatingLines } from "react-loader-spinner";

import {
  StyledRaisedTicketForm,
  StyledInputContainer,
  StyledRaisedTicketLable,
  StyledRaisedTicketInput,
  StyledRaiseTickedHeader,
  RiasedTiecketHand,
  StyledRaisedTicketSubmitButton,
} from "../TicketRaise/ticketRaiseStyle";
import {
  StyledAddPlantContainer,
  StyledAddPlantSelect,
} from "./plantManagementStyle";
import { useGlobalContext, ACTIONS } from "../../ui/globalContext";

const PlantAdd = () => {
  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { isLoading, error, makeApi } = useApiRequest();
  const { state, dispatch } = useGlobalContext();

  const token = Cookies.get("token");

  const handleAddPlantSubmitForm = async (data) => {
    console.log(data);
    try {
      const result = await makeApi({
        url: "https://solar-desk.onrender.com/api/solar/v1/plants",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: data,
      });
      if (result?.status === "success") {
        console.log(result);
        const filterDataPlants = {
          id: result.data.plant._id,
          plantName: result.data.plant.plantName,
          plantType: result.data.plant.plantType,
          capacityKwp: result.data.plant.capacityKwp,
          ownerName: result.data.plant.plantOwner.name,
          Zone: result.data.plant.Zone,
        };
        const newplantAdd = [...state.plants, filterDataPlants];
        dispatch({ type: ACTIONS.SET_PLANTS, payload: newplantAdd });
        toast.success("New plant added successfully");
        reset();
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <StyledAddPlantContainer>
      <StyledRaiseTickedHeader>
        <RiasedTiecketHand />
        <span>Add Plant Details Bellow </span>
      </StyledRaiseTickedHeader>
      <StyledRaisedTicketForm onSubmit={handleSubmit(handleAddPlantSubmitForm)}>
        <StyledInputContainer>
          <StyledRaisedTicketLable htmlFor="plantName">
            Plant Name
          </StyledRaisedTicketLable>
          <StyledRaisedTicketInput
            type="text"
            autoFocus
            placeholder="Enter the Plant Name . . ."
            id="plantName"
            {...register("plantName")}
          />
        </StyledInputContainer>
        {errors.plantName && (
          <p style={{ color: "red" }}>{errors.plantName.message}</p>
        )}
        <StyledInputContainer>
          <StyledRaisedTicketLable htmlFor="plantCapacity">
            Plant Capacity (Kwp)
          </StyledRaisedTicketLable>
          <StyledRaisedTicketInput
            type="text"
            placeholder="Enter the Plant Capacity (Kwp) . . ."
            id="plantCapacity"
            {...register("capacityKwp")}
          />
        </StyledInputContainer>
        {errors.capacityKwp && (
          <p style={{ color: "red" }}>{errors.capacityKwp.message}</p>
        )}
        <StyledInputContainer>
          <StyledRaisedTicketLable htmlFor="plantType">
            Plant Type
          </StyledRaisedTicketLable>
          <StyledAddPlantSelect
            id="plantType"
            defaultValue=""
            {...register("plantType")}
          >
            <option value="" disabled>
              Select Plant
            </option>
            <option value="Opex">Opex</option>
            <option value="Renew-Opex">Renew-Opex</option>
            <option value="Capex">Capex</option>
          </StyledAddPlantSelect>
        </StyledInputContainer>
        {errors.plantType && (
          <p style={{ color: "red" }}>{errors.plantType.message}</p>
        )}
        <StyledInputContainer>
          <StyledRaisedTicketLable htmlFor="zone">
            Add Zone
          </StyledRaisedTicketLable>
          <StyledAddPlantSelect defaultValue="" id="zone" {...register("Zone")}>
            <option value="" disabled>
              Select Zone
            </option>
            <option value="East">East</option>
            <option value="North">North</option>
            <option value="South">South</option>
            <option value="West">West</option>
          </StyledAddPlantSelect>
        </StyledInputContainer>
        {errors.Zone && <p style={{ color: "red" }}>{errors.Zone.message}</p>}
        <StyledInputContainer>
          <StyledRaisedTicketLable htmlFor="plantOwner">
            Plant Owner
          </StyledRaisedTicketLable>
          <Controller
            name="plantOwner"
            control={control}
            render={({ field }) => (
              <UserSelect
                {...field}
                options={state.users}
                placeholder="Select a Owner"
              />
            )}
          />
        </StyledInputContainer>
        {errors.plantOwner && (
          <p style={{ color: "red" }}>{errors.plantOwner.message}</p>
        )}
        <StyledRaisedTicketSubmitButton type="submit">
          Add Plant{" "}
          {isLoading && (
            <RotatingLines
              visible={true}
              height="15"
              width="15"
              color="grey"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
            />
          )}
        </StyledRaisedTicketSubmitButton>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </StyledRaisedTicketForm>
    </StyledAddPlantContainer>
  );
};

export default PlantAdd;
