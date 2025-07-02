import { useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import useApiRequest from "../../ui/apiRequest";
import { issuesCategories, typeOfLoss } from "./issuesList";
import Cookies from "js-cookie";
import issueUpdateSchema from "../../utils/ticketUpdateSchema";
import { useGlobalContext, ACTIONS } from "../../ui/globalContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { RotatingLines } from "react-loader-spinner";
import {
  IssuesUpdateDataFormContainer,
  IssuesUpdateDataMainLabel,
  IssueUpdatePresentDataInputContainer,
  IssueUpdateDataMainSelect,
  IssueUpdateDataMainInput,
  IssueUpdateDataActionTextArea,
  IssueUpdateDataMainButton,
} from "./issuesUpdateStyle";

import CategorySelect from "./CategorySelect";
import { useState } from "react";

const IssueUpdateForm = () => {
  const { isLoading, error, makeApi } = useApiRequest();
  const { id } = useParams();
  const [subIssue, setSubIssues] = useState([]);
  const { state, dispatch } = useGlobalContext();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,

    setValue,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(issueUpdateSchema),
    defaultValues: {
      resolvedAt: new Date(),
    },
  });
  const token = Cookies.get("token");
  const sortedIsusesCategories = issuesCategories.sort((a, b) =>
    a.category.localeCompare(b.category)
  );

  const changeSelectedCategory = (category) => {
    const selected = issuesCategories.find((opt) => opt.category === category);
    const issues = selected?.subIssues || [];
    setSubIssues(issues);
    setValue("subIssue", ""); // clear sub-issue on category change
  };

  const handleSubmitedIssue = async (data) => {
    try {
      const result = await makeApi({
        url: `https://solar-desk.onrender.com/api/solar/v1/issues/${id}`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: data,
      });
      if (result?.status === "success") {
        const updatedPlantIssues = state.issuesPlants.map((opt) => {
          if (opt._id === id) {
            const updatedIssue = {
              _id: result.updatedIssue._id,
              issueTitle: result.updatedIssue.issueTitle,
              issueDescription: result.updatedIssue.issueTitleDescription,
              status: result.updatedIssue.status,
              createdAt: result.updatedIssue.createdAt,
              solvedAt: result.updatedIssue.resolvedAt,
              actionTaken: result.updatedIssue.actionDescription,
              issueType: result.updatedIssue.typeOfLoss,
              generationLossKwh: result.updatedIssue.generationLossKwh,
              category: result.updatedIssue.category,
              subIssue: result.updatedIssue.subIssue,
              // Retain some existing fields
              plantName: opt.plantName,
              raisedByName: opt.raisedByName,
              assignedEngineerName: opt.assignedEngineerName,
              plantCapacityKwp: opt.plantCapacityKwp,
            };
            return { ...opt, ...updatedIssue };
          } else {
            return opt;
          }
        });
        dispatch({
          type: ACTIONS.SET_ISSUES_PLNATS,
          payload: updatedPlantIssues,
        });
        toast.success("Ticket Updated Successfully");
        navigate("/tickets", { replace: true });
        reset();
      }
    } catch (err) {
      toast.err(err);
    }
  };

  return (
    <IssuesUpdateDataFormContainer onSubmit={handleSubmit(handleSubmitedIssue)}>
      <IssueUpdatePresentDataInputContainer>
        <IssuesUpdateDataMainLabel>Issue</IssuesUpdateDataMainLabel>
        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <CategorySelect
              {...field}
              options={sortedIsusesCategories}
              placeholder="Select a issue category"
              changeSelectedCategory={changeSelectedCategory}
            />
          )}
        />
        {errors.category && (
          <p style={{ color: "red", fontSize: "1.2rem" }}>
            {errors.category.message}
          </p>
        )}
      </IssueUpdatePresentDataInputContainer>
      <IssueUpdatePresentDataInputContainer>
        <IssuesUpdateDataMainLabel>Sub Issue</IssuesUpdateDataMainLabel>
        <IssueUpdateDataMainSelect {...register("subIssue")}>
          <option value="">-- Select Sub-Issue --</option>
          {subIssue.length > 0 ? (
            <>
              {subIssue.map((subIssue) => (
                <option key={subIssue} value={subIssue}>
                  {subIssue}
                </option>
              ))}
            </>
          ) : null}
        </IssueUpdateDataMainSelect>
      </IssueUpdatePresentDataInputContainer>
      <IssueUpdatePresentDataInputContainer>
        <IssuesUpdateDataMainLabel>
          Generation loss (Kwh)
        </IssuesUpdateDataMainLabel>
        <IssueUpdateDataMainInput
          type="text"
          {...register("generationLossKwh", {
            required: "Generation loss required",
          })}
        />
        {errors.generationLossKwh && (
          <p style={{ color: "red", fontSize: "1.2rem" }}>
            {errors.generationLossKwh.message}
          </p>
        )}
      </IssueUpdatePresentDataInputContainer>
      <IssueUpdatePresentDataInputContainer>
        <IssuesUpdateDataMainLabel>Type of loss</IssuesUpdateDataMainLabel>
        <IssueUpdateDataMainSelect
          {...register("typeOfLoss", { required: "Type of loss required" })}
        >
          <option value="">-- Select Sub-Issue --</option>

          {typeOfLoss.map((lossType) => (
            <option key={lossType.id} value={lossType.controllability}>
              {lossType.controllability}
            </option>
          ))}
        </IssueUpdateDataMainSelect>
        {errors.typeOfLoss && (
          <p style={{ color: "red", fontSize: "1.2rem" }}>
            {errors.typeOfLoss.message}
          </p>
        )}
      </IssueUpdatePresentDataInputContainer>
      <IssueUpdatePresentDataInputContainer>
        <IssuesUpdateDataMainLabel>Status</IssuesUpdateDataMainLabel>
        <IssueUpdateDataMainSelect
          {...register("status", { required: "status required" })}
        >
          <option value="">-- Select-Status --</option>
          <option value="open">Open</option>
          <option value="in progress">In Progress</option>
          <option value="resolved">Resolved</option>
        </IssueUpdateDataMainSelect>
        {errors.status && (
          <p style={{ color: "red", fontSize: "1.2rem" }}>
            {errors.status.message}
          </p>
        )}
      </IssueUpdatePresentDataInputContainer>
      <IssueUpdatePresentDataInputContainer>
        <IssuesUpdateDataMainLabel>
          Action Description
        </IssuesUpdateDataMainLabel>
        <IssueUpdateDataActionTextArea
          rows="5"
          cols="4"
          draggable={false}
          {...register("actionDescription", {
            required: "action description required",
          })}
        />
        {errors.actionDescription && (
          <p style={{ color: "red", fontSize: "1.2rem" }}>
            {errors.actionDescription.message}
          </p>
        )}
      </IssueUpdatePresentDataInputContainer>
      <IssueUpdateDataMainButton type="submit">
        Update Issue{" "}
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
      </IssueUpdateDataMainButton>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </IssuesUpdateDataFormContainer>
  );
};

export default IssueUpdateForm;
