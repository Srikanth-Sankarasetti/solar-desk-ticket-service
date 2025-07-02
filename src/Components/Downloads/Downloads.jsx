import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { useState, useRef, useEffect } from "react";
import dateSchema from "../../utils/dateValidation";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import DateSelection from "./DateSelection";
import { useGlobalContext } from "../../ui/globalContext";
import Cookies from "js-cookie";
import { StyledDownloadInput, StyledDownloadContainer } from "./downloadStyles";
import { RotatingLines } from "react-loader-spinner";

import {
  StyledRaisedTicketForm,
  StyledRaisedTicketLable,
  StyledRaiseTickedHeader,
  RiasedTiecketHand,
  StyledRaisedTicketSubmitButton,
} from "../TicketRaise/ticketRaiseStyle";
import toast from "react-hot-toast";
import {
  StyledAddPlantContainer,
  StyledAddPlantSelect,
} from "../PlantManagement/plantManagementStyle";

import UserSelect from "../PlantManagement/UserSelect";

const Downloads = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      dateRange: { from: undefined, to: undefined },
      plantType: "",
      zone: "",
      plantOwner: "",
    },
    resolver: yupResolver(dateSchema),
  });
  const [showCalendar, setShowCalendar] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const { state } = useGlobalContext();

  const ref = useRef();
  const token = Cookies.get("token");

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShowCalendar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDownloadData = async (data) => {
    setLoadingStatus(true);
    const queryData = {
      startDate: data.dateRange.from,
      endDate: data.dateRange.to,
      plantType: data?.plantType || "",
      zone: data?.zone || "",
      plantOwner: data?.plantOwner || "",
    };

    try {
      const response = await fetch(
        "https://solar-desk.onrender.com/api/solar/v1/issues/download-report",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(queryData),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to download file");
      }
      setLoadingStatus(false);
      const blob = await response.blob();

      // Create a download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Issues_Report.xlsx"; // desired file name
      document.body.appendChild(link);
      link.click();
      link.remove();
      toast.success("Report Downloaded Successfully");
      reset();
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <StyledAddPlantContainer>
      <StyledRaiseTickedHeader>
        <RiasedTiecketHand />
        <span>DownLoad Issues Report </span>
      </StyledRaiseTickedHeader>
      <StyledRaisedTicketForm onSubmit={handleSubmit(handleDownloadData)}>
        <StyledDownloadContainer>
          <StyledRaisedTicketLable>Date Range</StyledRaisedTicketLable>
          <Controller
            name="dateRange"
            control={control}
            render={({ field }) => (
              <>
                <StyledDownloadInput
                  readOnly
                  value={
                    field.value?.from && field.value?.to
                      ? `${format(field.value.from, "dd-MM-yyyy")} to ${format(
                          field.value.to,
                          "dd-MM-yyyy"
                        )}`
                      : ""
                  }
                  onClick={() => setShowCalendar((prev) => !prev)}
                  placeholder="Click to select date range"
                />
                {showCalendar && (
                  <div
                    ref={ref}
                    style={{ position: "absolute", top: "100%", zIndex: "20" }}
                  >
                    <DateSelection {...field} />
                  </div>
                )}
              </>
            )}
          />
          {errors.dateRange?.from && (
            <p style={{ color: "red" }}>{errors.dateRange.from.message}</p>
          )}
          {errors.dateRange?.to && (
            <p style={{ color: "red" }}>{errors.dateRange.to.message}</p>
          )}
        </StyledDownloadContainer>
        <StyledDownloadContainer>
          <StyledRaisedTicketLable>Plant Type</StyledRaisedTicketLable>
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
        </StyledDownloadContainer>
        <StyledDownloadContainer>
          <StyledRaisedTicketLable>Zone</StyledRaisedTicketLable>
          <StyledAddPlantSelect defaultValue="" id="zone" {...register("zone")}>
            <option value="" disabled>
              Select Zone
            </option>
            <option value="East">East</option>
            <option value="North">North</option>
            <option value="South">South</option>
            <option value="West">West</option>
          </StyledAddPlantSelect>
        </StyledDownloadContainer>
        <StyledDownloadContainer>
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
        </StyledDownloadContainer>
        <StyledRaisedTicketSubmitButton type="submit">
          DownLoad Report{" "}
          {loadingStatus && (
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
      </StyledRaisedTicketForm>
    </StyledAddPlantContainer>
  );
};

export default Downloads;
