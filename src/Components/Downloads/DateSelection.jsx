import {
  StyledDownloadDateContainer,
  StyledDownlaodDateSecondContainer,
  StyledDownloadDateSelectContainer,
  StyledDownloadSelectLabel,
  StyledDownloadSlectInput,
} from "./downloadStyles";

const DateSelection = ({ value, onChange }) => {
  const handleStartChange = (e) => {
    onChange({
      ...value,
      from: new Date(e.target.value),
    });
  };

  const handleEndChange = (e) => {
    onChange({
      ...value,
      to: new Date(e.target.value),
    });
  };
  return (
    <StyledDownloadDateContainer>
      <StyledDownlaodDateSecondContainer>
        <StyledDownloadDateSelectContainer>
          <StyledDownloadSelectLabel>Start Date</StyledDownloadSelectLabel>
          <StyledDownloadSlectInput
            type="date"
            value={value?.from ? value.from.toISOString().split("T")[0] : ""}
            onChange={handleStartChange}
          />
        </StyledDownloadDateSelectContainer>
        <StyledDownloadDateSelectContainer>
          <StyledDownloadSelectLabel>End Date</StyledDownloadSelectLabel>
          <StyledDownloadSlectInput
            type="date"
            value={value?.to ? value.to.toISOString().split("T")[0] : ""}
            onChange={handleEndChange}
          />
        </StyledDownloadDateSelectContainer>
      </StyledDownlaodDateSecondContainer>
    </StyledDownloadDateContainer>
  );
};

export default DateSelection;
