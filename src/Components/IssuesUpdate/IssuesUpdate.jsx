import { useParams } from "react-router-dom";

import useApiRequest from "../../ui/apiRequest";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

import {
  IssueUpdateMainContainer,
  IssueUpdateMailTitle,
} from "./issuesUpdateStyle";
import PresentData from "./PresetData";
import IssueUpdateForm from "./IssueUpdateForm";

const IssuesUpdate = () => {
  const [issueData, setissueData] = useState();
  const { makeApi } = useApiRequest();
  const { id } = useParams();
  const token = Cookies.get("token");

  useEffect(() => {
    const fethIssueToUpdate = async () => {
      const result = await makeApi({
        method: "GET",
        url: `https://solar-desk.onrender.com/api/solar/v1/issues/getPlant/${id}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (result?.status === "success") {
        setissueData(result.result[0]);
      }
    };
    fethIssueToUpdate();
  }, []);

  return (
    <IssueUpdateMainContainer>
      <IssueUpdateMailTitle>
        👇 Update Open / Inprogress ticket below
      </IssueUpdateMailTitle>
      <PresentData issueData={issueData} />
      <IssueUpdateForm />
    </IssueUpdateMainContainer>
  );
};

export default IssuesUpdate;
