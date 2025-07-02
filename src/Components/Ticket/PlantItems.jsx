import { TableRow } from "./ticketstyle";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { FaPencilAlt } from "react-icons/fa";

const StyledTicketUpdateButton = styled.button`
  width: fit-content;
  height: fit-content;
  padding: 0.5rem;
  border-radius: 5px;
  font-size: 1.5rem;
  color: var(--textBody);
  background-color: transparent;
  border: none;
  cursor: pointer;
  @media (max-width: 1092px) {
    font-size: 1.2rem;
  }
  &:hover {
    color: var(--buttonPrimaryHoverBg);
  }
`;

const StyledTcketOpenDetailsButton = styled.div`
  color: var(--buttonPrimaryText);
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 50%;
  align-self: center;
  background-color: var(--buttonPrimarybg);
  border: none;
  outline: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const StyledResolvedTicketsContainer = styled.div`
  width: 80%;
  min-height: 100px;
  margin: 1.5rem auto;
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-evenly;
  gap: 3rem;
  flex-wrap: wrap;
`;

const StyledResolvedItemContainer = styled.div`
  width: 200px;
`;
const StyledResolvedHeaderData = styled.h2`
  font-size: 1.4rem;
  color: var(--textBody);
`;

const StyledResolvedParaData = styled.p`
  color: var(--textSecondary);
  font-size: 1.5rem;
`;

const PlantItems = ({ plantDetails, toggleExpand, isOpenPlus, role }) => {
  const navigate = useNavigate();
  const formateDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const getDays = () => {
    if (plantDetails.solvedAt) {
      const created = new Date(plantDetails.createdAt);
      const solved = new Date(plantDetails.solvedAt);
      const daydiff = solved - created;
      const days = Math.ceil(daydiff / (1000 * 60 * 60 * 24));
      return days;
    }
  };
  const updateOpen = () => {
    toggleExpand(plantDetails._id);
  };

  return (
    <>
      <TableRow role="row" $isResolved={plantDetails.status === "in progress"}>
        {plantDetails.status === "resolved" ||
        plantDetails.status === "in progress" ? (
          isOpenPlus ? (
            <StyledTcketOpenDetailsButton onClick={updateOpen}>
              -
            </StyledTcketOpenDetailsButton>
          ) : (
            <StyledTcketOpenDetailsButton onClick={updateOpen}>
              +
            </StyledTcketOpenDetailsButton>
          )
        ) : null}
        <div>{plantDetails.plantName}</div>
        <div>{plantDetails.plantCapacityKwp}</div>
        <div>{plantDetails.issueTitle}</div>
        <div>{formateDate(plantDetails.createdAt)}</div>
        {role === "admin" || role === "manager" ? (
          <div>{plantDetails.assignedEngineerName}</div>
        ) : (
          <div>{plantDetails.raisedByName}</div>
        )}
        <div>{plantDetails.status}</div>
        {plantDetails.status !== "resolved" && (
          <StyledTicketUpdateButton
            onClick={() => {
              navigate(`/issue-update/${plantDetails._id}`);
            }}
          >
            <FaPencilAlt />
          </StyledTicketUpdateButton>
        )}
      </TableRow>
      {isOpenPlus && (
        <StyledResolvedTicketsContainer>
          <StyledResolvedItemContainer>
            <StyledResolvedHeaderData>Description</StyledResolvedHeaderData>
            <StyledResolvedParaData>
              {plantDetails.issueDescription}
            </StyledResolvedParaData>
          </StyledResolvedItemContainer>
          <StyledResolvedItemContainer>
            <StyledResolvedHeaderData>Type Of Loss</StyledResolvedHeaderData>
            <StyledResolvedParaData>
              {plantDetails.issueType}
            </StyledResolvedParaData>
          </StyledResolvedItemContainer>
          <StyledResolvedItemContainer>
            <StyledResolvedHeaderData>Genration Loss</StyledResolvedHeaderData>
            <StyledResolvedParaData>
              {plantDetails.generationLossKwh} Kwh
            </StyledResolvedParaData>
          </StyledResolvedItemContainer>
          <StyledResolvedItemContainer>
            <StyledResolvedHeaderData>Action Taken</StyledResolvedHeaderData>
            <StyledResolvedParaData>
              {plantDetails.actionTaken}
            </StyledResolvedParaData>
          </StyledResolvedItemContainer>
          <StyledResolvedItemContainer>
            <StyledResolvedHeaderData>Resolved Date</StyledResolvedHeaderData>
            <StyledResolvedParaData>
              {formateDate(plantDetails.solvedAt)}
            </StyledResolvedParaData>
          </StyledResolvedItemContainer>
          <StyledResolvedItemContainer>
            <StyledResolvedHeaderData>
              Turn Arround Time
            </StyledResolvedHeaderData>
            <StyledResolvedParaData>{getDays()} Days</StyledResolvedParaData>
          </StyledResolvedItemContainer>
          <StyledResolvedItemContainer>
            <StyledResolvedHeaderData>Category</StyledResolvedHeaderData>
            <StyledResolvedParaData>
              {plantDetails.category}
            </StyledResolvedParaData>
          </StyledResolvedItemContainer>
          {plantDetails?.subIssue && (
            <StyledResolvedItemContainer>
              <StyledResolvedHeaderData>Sub Issue</StyledResolvedHeaderData>
              <StyledResolvedParaData>
                {plantDetails.subIssue}
              </StyledResolvedParaData>
            </StyledResolvedItemContainer>
          )}
        </StyledResolvedTicketsContainer>
      )}
    </>
  );
};

export default PlantItems;
