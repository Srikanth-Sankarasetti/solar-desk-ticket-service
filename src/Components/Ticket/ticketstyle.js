import { styled } from "styled-components";

export const TicketMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  gap: 1.2rem;
  width: 100%;
  overflow: hidden;
  height: calc(100vh - 100px);
  position: relative;
`;

export const StyledTicketUl = styled.ul`
  display: flex;
  align-self: center;
  gap: 2.4rem;
  font-size: 1.8rem;
  flex-shrink: 0;
`;

export const TableList = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 0;
`;

export const TableHeader = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${(porps) =>
    porps.$isResolved === "in progress" ? "repeat(8,1fr)" : "repeat(7, 1fr)"};
  width: 100%;
  color: var(--textHeader);
  font-weight: 500;
  flex-shrink: 0;
  gap: 1.2rem;
  padding: 2rem 1rem;
  font-size: 1.4rem;
  @media (max-width: 1010px) {
    font-size: 1.2rem;
  }
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: ${(porps) =>
    porps.$isResolved ? "repeat(8 , 1fr)" : "repeat(7, 1fr)"};
  align-content: center;
  color: var(--textBody);
  min-height: 20px;
  font-size: 1.4rem;
  padding: 2rem 1rem;
  gap: 1.2rem;
  border-bottom: 0.01rem solid lightgray;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: var(--scrollbarTrack);
  }
  &:last-child {
    border-bottom: none;
  }
  @media (max-width: 1010px) {
    font-size: 1.2rem;
  }
`;

export const ScrollableBody = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  min-height: 0; // again helps in scroll
  overflow-x: hidden;
  width: 100%;
  max-height: calc(100vh - 250px);

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: var(--scrollbarTrack);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--scrollbarThumb);
    border-radius: 4px;
    border: 1px solid var(--scrollbarTrack);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--scrollbarThumbHover);
  }

  &::-webkit-scrollbar-thumb:active {
    background: var(--scrollbarThumbActive);
  }

  ::-webkit-scrollbar-corner {
    background: var(--scrollbarTrack);
  }
`;
