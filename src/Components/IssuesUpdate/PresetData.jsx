import {
  IssueUpdatePresentDataContainer,
  IssueUpdatePresentDataInputContainer,
  IssueUpdatePresetDataInputLabel,
  IssuesUpdatePresentDataInput,
  IssuesUpdatePresetTextArea,
} from "./issuesUpdateStyle";

const PresentData = ({ issueData }) => {
  return (
    <IssueUpdatePresentDataContainer>
      <IssueUpdatePresentDataInputContainer>
        <IssueUpdatePresetDataInputLabel>
          Plant Name
        </IssueUpdatePresetDataInputLabel>
        <IssuesUpdatePresentDataInput
          value={issueData?.plantName || ""}
          readOnly
        />
      </IssueUpdatePresentDataInputContainer>
      <IssueUpdatePresentDataInputContainer>
        <IssueUpdatePresetDataInputLabel>
          Plant Capacity(Kwp)
        </IssueUpdatePresetDataInputLabel>
        <IssuesUpdatePresentDataInput
          value={issueData?.plantCapacityKwp || ""}
          readOnly
        />
      </IssueUpdatePresentDataInputContainer>
      <IssueUpdatePresentDataInputContainer>
        <IssueUpdatePresetDataInputLabel>
          Plant Type
        </IssueUpdatePresetDataInputLabel>
        <IssuesUpdatePresentDataInput
          value={issueData?.plantType || ""}
          readOnly
        />
      </IssueUpdatePresentDataInputContainer>
      <IssueUpdatePresentDataInputContainer>
        <IssueUpdatePresetDataInputLabel>
          Preset Status
        </IssueUpdatePresetDataInputLabel>
        <IssuesUpdatePresentDataInput
          value={issueData?.status || ""}
          readOnly
        />
      </IssueUpdatePresentDataInputContainer>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <IssueUpdatePresentDataInputContainer>
          <IssueUpdatePresetDataInputLabel>
            Issue Title
          </IssueUpdatePresetDataInputLabel>
          <IssuesUpdatePresentDataInput
            value={issueData?.issueTitle || ""}
            readOnly
          />
        </IssueUpdatePresentDataInputContainer>
        <IssueUpdatePresentDataInputContainer>
          <IssueUpdatePresetDataInputLabel>
            Issue Description
          </IssueUpdatePresetDataInputLabel>
          <IssuesUpdatePresetTextArea
            rows="3"
            cols="3"
            value={issueData?.issueTitleDescription || ""}
            readOnly
          />
        </IssueUpdatePresentDataInputContainer>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <IssueUpdatePresentDataInputContainer>
          <IssueUpdatePresetDataInputLabel>
            Raised By
          </IssueUpdatePresetDataInputLabel>
          <IssuesUpdatePresentDataInput
            value={issueData?.raisedBy || ""}
            readOnly
          />
        </IssueUpdatePresentDataInputContainer>
        <IssueUpdatePresentDataInputContainer>
          <IssueUpdatePresetDataInputLabel>
            Assigned Engineer
          </IssueUpdatePresetDataInputLabel>
          <IssuesUpdatePresentDataInput
            value={issueData?.assignedEngineer || ""}
            readOnly
          />
        </IssueUpdatePresentDataInputContainer>
      </div>
    </IssueUpdatePresentDataContainer>
  );
};

export default PresentData;
