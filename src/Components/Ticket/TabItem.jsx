import { styled } from "styled-components";

const StyledTicketTabItem = styled.li`
  color: ${(props) =>
    props.isActive ? "var(--statusTabTextActive)" : "var(--statusTabText)"};
  border-bottom: 3px solid
    ${(props) =>
      props.isActive
        ? props.tabId === "open"
          ? "var(--statusOpenBorder)"
          : props.tabId === "resolved"
          ? "var(--statusResolvedBorder)"
          : "var(--statusProgressBorder)"
        : "transparent"};
  &:hover {
    color: var(--statusTabHoverText);
    background-color: var(--statusTabHoverBg);
    cursor: pointer;
  }
`;

const TabItem = (props) => {
  const { tabDetails, updateTabId, isActive } = props;

  const tabClick = () => {
    updateTabId(tabDetails.tabId);
  };

  return (
    <StyledTicketTabItem
      isActive={isActive}
      tabId={tabDetails.tabId}
      onClick={tabClick}
    >
      {tabDetails.displayText}
    </StyledTicketTabItem>
  );
};

export default TabItem;
