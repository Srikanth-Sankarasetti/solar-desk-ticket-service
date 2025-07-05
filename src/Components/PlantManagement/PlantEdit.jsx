import schema from "../../utils/PlantEditvalidation";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import UserSelect from "./UserSelect";
import { RotatingLines } from "react-loader-spinner";
import PlantSelectForm from "../TicketRaise/PlantSelectForm";
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
  StyledRotateArrow,
} from "./plantManagementStyle";

import { useGlobalContext, ACTIONS } from "../../ui/globalContext";
import useApiRequest from "../../ui/apiRequest";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useState } from "react";

const PlantEdit = () => {
  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { state, dispatch } = useGlobalContext();
  const { isLoading, error, makeApi } = useApiRequest();
  const [isOpen, setOpen] = useState(false);
  const token = Cookies.get("token");

  const handleAddPlantSubmitForm = async (data) => {
    try {
      const result = await makeApi({
        url: "https://solar-desk.onrender.com/api/solar/v1/plants/assignPlantToUser",
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: data,
      });
      if (result?.status === "success") {
        console.log(result);
        const updatedPlants = state.plants.map((opt) => {
          if (opt._id === result.data.plant._id) {
            const update = {
              id: result.data.plant._id,
              plantName: result.data.plant.plantName,
              plantType: result.data.plant.plantType,
              capacityKwp: result.data.plant.capacityKwp,
              ownerName: result.data.plant.plantOwner?.name,
              Zone: result.data.plant.Zone,
            };
            return { ...opt, ...update };
          } else {
            return opt;
          }
        });
        dispatch({ type: ACTIONS.SET_PLANTS, payload: updatedPlants });
        toast.success("Plant Updated Successfully");
        reset();
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const sortedPlants = state.plants.sort((a, b) =>
    a.plantName.localeCompare(b.plantName)
  );

  return (
    <StyledAddPlantContainer>
      <StyledRaiseTickedHeader>
        <RiasedTiecketHand />
        <span>Edit Plant Details Bellow </span>
      </StyledRaiseTickedHeader>
      <StyledRaisedTicketForm onSubmit={handleSubmit(handleAddPlantSubmitForm)}>
        <StyledInputContainer>
          <StyledRaisedTicketLable htmlFor="plantOwner">
            Plant Name
          </StyledRaisedTicketLable>
          <Controller
            name="plantId"
            control={control}
            render={({ field }) => (
              <PlantSelectForm
                {...field}
                options={sortedPlants}
                placeholder="Select a Plant Name"
              />
            )}
          />
        </StyledInputContainer>
        {errors.plantId && (
          <p style={{ color: "red" }}>{errors.plantId.message}</p>
        )}
        <StyledInputContainer>
          <StyledRaisedTicketLable htmlFor="capacityKwp">
            Plant Capacity Kwp (optional)
          </StyledRaisedTicketLable>
          <StyledRaisedTicketInput
            type="number"
            id="capacityKwp"
            {...register("capacityKwp")}
          />
        </StyledInputContainer>

        <StyledInputContainer>
          <StyledRaisedTicketLable htmlFor="plantType">
            Plant Type
          </StyledRaisedTicketLable>
          <StyledAddPlantSelect
            id="plantType"
            defaultValue=""
            onClick={() => setOpen((prev) => !prev)}
            {...register("plantType")}
          >
            <option value="" disabled>
              Select Plant
            </option>
            <option value="Opex">Opex</option>
            <option value="Renew-Opex">Renew-Opex</option>
            <option value="Capex">Capex</option>
          </StyledAddPlantSelect>
          <StyledRotateArrow $isOpen={isOpen} />
        </StyledInputContainer>
        {errors.plantType && (
          <p style={{ color: "red" }}>{errors.plantType.message}</p>
        )}

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
          Update Plant{" "}
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

export default PlantEdit;
