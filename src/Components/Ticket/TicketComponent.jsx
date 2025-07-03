import {
  TicketMainContainer,
  StyledTicketUl,
  TableList,
  TableHeader,
  ScrollableBody,
} from "./ticketstyle";

import { useState, useEffect } from "react";
import TabItem from "./TabItem";
import PlantItems from "./PlantItems";
import getUserDate from "../../utils/getuserRole";
import { useGlobalContext } from "../../ui/globalContext";
import { ThreeCircles } from "react-loader-spinner";

const tabList = [
  {
    tabId: "open",
    displayText: "Open",
  },
  {
    tabId: "in progress",
    displayText: "In Progress",
  },
  {
    tabId: "resolved",
    displayText: "Resolved",
  },
];

const TicketComponent = () => {
  const [tabId, setStatus] = useState(tabList[0].tabId);
  const [issuesPlants, setIssuesPlants] = useState([]);
  const [zone, setZone] = useState("");
  const [engineerId, setEngineerId] = useState("");
  const [expandedId, setExpandedId] = useState(null);
  const { role, name } = getUserDate();
  const { state } = useGlobalContext();
  useEffect(() => {
    if (role === "admin" || role === "manager") {
      const filterIssues = state?.issuesPlants.filter((plants) => {
        const matchStatus = plants.status === tabId;
        const matchZone = zone ? plants.zone === zone : true;
        const matchedEngineer = engineerId
          ? plants.assignedEngineerName === engineerId
          : true;
        return matchStatus && matchZone && matchedEngineer;
      });

      setIssuesPlants(filterIssues);
      setExpandedId(null);
    } else {
      const filterIssues = state?.issuesPlants.filter(
        (plants) =>
          plants.status === tabId && plants.assignedEngineerName === name
      );
      setIssuesPlants(filterIssues);
      setExpandedId(null);
    }
  }, [tabId, state, zone, engineerId]);

  const updateTabId = (id) => {
    setStatus(id);
  };

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const loaderpinner = () => {
    return (
      <div
        style={{
          width: "90%",
          height: "50%",
          minHeight: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ThreeCircles
          visible={true}
          height="100"
          width="100"
          color="#4fa94d"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  };

  const noContentAvialble = () => {
    return (
      <div
        style={{
          width: "100%",
          height: "cal(100vh - 200px)",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://res.cloudinary.com/ducrzzdqj/image/upload/v1751386815/5928293_2953962_xv6ldo.jpg"
          alt="no content"
          style={{ width: "300px", aspectRatio: "1" }}
        />
        <h3 style={{ color: "var(--textBody)", fontSize: "1.8rem" }}>
          No{" "}
          <span style={{ color: "var(--successColor)" }}>
            {tabId.toUpperCase()}
          </span>{" "}
          Tickets at Present
        </h3>
      </div>
    );
  };

  const returnResultOnStatus = () => {
    if (state.loading.issuesPlants) {
      return loaderpinner();
    }
    if (issuesPlants.length === 0) {
      return noContentAvialble();
    }
    return (
      <>
        <ScrollableBody>
          {issuesPlants.map((plantDetails) => (
            <PlantItems
              key={plantDetails._id}
              plantDetails={plantDetails}
              toggleExpand={toggleExpand}
              role={role}
              isOpenPlus={expandedId === plantDetails._id}
            />
          ))}
        </ScrollableBody>
        ;
      </>
    );
  };

  return (
    <TicketMainContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StyledTicketUl>
          {tabList.map((tabDetails) => (
            <TabItem
              key={tabDetails.tabId}
              tabDetails={tabDetails}
              updateTabId={updateTabId}
              isActive={tabId === tabDetails.tabId}
            />
          ))}
        </StyledTicketUl>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            width: "100%",
            alignSelf: "center",
            marginTop: "1.3rem",
          }}
        >
          {(role === "admin" || role === "manager") && (
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <h1 style={{ fontSize: "1.2rem", color: "var(--textBody)" }}>
                Select Region
              </h1>
              <select
                value={zone}
                onChange={(e) => setZone(e.target.value)}
                style={{
                  width: "105px",
                  height: "25px",
                  borderRadius: "5px",
                  backgroundColor: "var(--inputBg)",
                  color: "var(--textBody)",
                  outline: "none",
                }}
              >
                <option value="">Select Region</option>
                <option value="East">East</option>
                <option value="North">North</option>
                <option value="South">South</option>
                <option value="West">West</option>
              </select>
            </div>
          )}
          {(role === "admin" || role === "manager") && (
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <h1 style={{ fontSize: "1.2rem", color: "var(--textBody)" }}>
                Select Engineer
              </h1>
              <select
                value={engineerId}
                onChange={(e) => setEngineerId(e.target.value)}
                style={{
                  width: "115px",
                  height: "25px",
                  borderRadius: "5px",
                  backgroundColor: "var(--inputBg)",
                  color: "var(--textBody)",
                  outline: "none",
                }}
              >
                <option value="">Select Engineer</option>
                {state.users.map((user) => (
                  <option key={user.id} value={user.name}>
                    {user.name}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>

      <TableList role="table">
        <TableHeader role="row" $isResolved={tabId}>
          {tabId === "resolved" && <div></div>}
          {tabId === "in progress" && <div></div>}
          <div>Plant Name</div>
          <div>Capacity (Kwp)</div>
          <div>Issue Title</div>
          <div>Created</div>
          {role === "admin" ? (
            <div>Assigned Engineer</div>
          ) : (
            <div>Raised By</div>
          )}
          <div>Status</div>
          {tabId !== "resolved" ? <div>Action</div> : null}
        </TableHeader>
        {returnResultOnStatus()}
      </TableList>
    </TicketMainContainer>
  );
};

export default TicketComponent;
