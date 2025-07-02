import { styled } from "styled-components";
import DatePicker from "react-datepicker";
import { ThreeCircles } from "react-loader-spinner";
import "react-datepicker/dist/react-datepicker.css";

export const StyledOverViewMainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledOverviewDashboard = styled.div`
  height: calc(100vh - 130px);
  overflow-y: scroll;
`;

export const StyledDatePickerWraper = styled.div`
  .react-datepicker {
    background-color: var(--cardBg);
    border: 1px solid var(--inputBorder);
    color: var(--inputText);
    border-radius: 8px;
    box-shadow: var(--inputShadowFocus);
    padding: 0.5rem;
  }

  .react-datepicker__header {
    background-color: var(--navBg);
    border-bottom: 1px solid var(--inputBorder);
    color: var(--textHeader);
  }

  .react-datepicker__current-month,
  .react-datepicker__year-read-view--selected-year {
    color: var(--textHeader);
    font-weight: bold;
  }

  .react-datepicker__day,
  .react-datepicker__year-option {
    color: var(--textBody);
  }

  .react-datepicker__day--selected,
  .react-datepicker__year-option--selected {
    background-color: var(--buttonPrimarybg);
    color: var(--buttonPrimaryText);
    border-radius: 50%;
  }

  .react-datepicker__day:hover,
  .react-datepicker__year-option:hover {
    background-color: var(--navHoverBg);
    color: var(--navHoverText);
  }

  .react-datepicker__day--keyboard-selected {
    background-color: var(--buttonPrimaryHoverBg);
    color: var(--buttonPrimaryText);
  }

  .react-datepicker__triangle {
    display: none;
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  padding: 0.8rem 1rem;
  font-size: 1.5rem;
  border: 1px solid var(--inputBorder);
  border-radius: 6px;
  background-color: var(--inputBg);
  color: var(--inputText);
  height: 30px;

  &:focus {
    outline: none;
    border-color: var(--inputBorderFocus);
    box-shadow: var(--inputShadowFocus);
  }

  &::placeholder {
    color: var(--inputPlaceholder);
  }

  &:disabled {
    background-color: var(--inputBgDisabled);
    color: var(--inputTextDisabled);
  }
`;

export const StyleOverViewMainContainerCart = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 1rem;
  margin: 1rem 2rem;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    grid-template-columns: auto;
  }
`;

export const StyledOverViewCartContainer = styled.div`
  background-color: ${(props) =>
    props.$backgroundValue === "optimal"
      ? "var(--statusOptimalBg)"
      : props.$backgroundValue === "warning"
      ? "var(--statusWarningBg)"
      : "var(--statusCriticalBg)"};
  width: 100%;
  gap: 1rem;
  padding: 1rem 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  border: 2px solid
    ${(props) =>
      props.$backgroundValue === "optimal"
        ? "var(--statusOptimalBorder)"
        : props.$backgroundValue === "warning"
        ? "var(--statusWarningBorder)"
        : "var(--statusCriticalBorder)"};
`;

export const StyledOverviewSubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.6rem;
`;

export const StyledOverViewTitleContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  color: ${(props) =>
    props.color === "optimal"
      ? "var(--statusOptimalText)"
      : props.color === "warning"
      ? "var(--statusWarningText)"
      : "var(--statusCriticalText)"};
  svg {
    width: 2rem;
    aspect-ratio: 1;
    color: ${(props) =>
      props.color === "optimal"
        ? "var(--statusOptimalText)"
        : props.color === "warning"
        ? "var(--statusWarningText)"
        : "var(--statusCriticalText)"};
  }
`;

export const StyleOverViewStatus = styled.div`
  background-color: ${(props) =>
    props.color === "optimal"
      ? "var(--statusOptimalBorder)"
      : props.color === "warning"
      ? "var(--statusWarningBorder)"
      : "var(--statusCriticalBorder)"};
  padding: 0.3rem 1.3rem;
  border-radius: 5px;
`;

export const StyledoverviewCartItemDisplay = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.3rem;
`;

export const StyledOverviewCartValue = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 2rem;
  color: ${(props) =>
    props.color === "optimal"
      ? "var(--statusOptimalText)"
      : props.color === "warning"
      ? "var(--statusWarningText)"
      : "var(--statusCriticalText)"};
  font-weight: bold;
  display: flex;
  align-items: center;
`;

export const StyledOverViewCartTrending = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  color: ${(props) => (props.$trendvalue > 0 ? "#dc2626" : "#059669")};
  font-weight: 500;
  font-size: 1.2rem;
  font-weight: 500;
`;

export const StyledOverviewPiechartMainContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  width: 100%;
  @media (max-width: 1000px) {
    grid-template-columns: auto;
  }
`;

export const StyledOverViewPieContainer = styled.div`
  width: 100%;
  height: 300px; /* or any height */
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledPichartHeader = styled.h3`
  color: var(--textBody);
  text-align: center;
  margin-bottom: 2rem;
`;

export const StyledOverViewTopPlantContainer = styled.div`
  margin: 3rem 2rem;
`;

export const StyledOverviewSpinner = styled(ThreeCircles)``;
