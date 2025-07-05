import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import OverViewCartsData from "./OverviewCartsData";
import useApiRequest from "../../ui/apiRequest";
import getuserRole from "../../utils/getuserRole";
import { useGlobalContext } from "../../ui/globalContext";
import {
  StyledOverViewMainContainer,
  StyledDatePickerWraper,
  StyledDatePicker,
  StyledOverviewDashboard,
  StyledOverviewPiechartMainContainer,
  StyledOverViewTopPlantContainer,
} from "./overviewStyle";
import Cookies from "js-cookie";

import { CustomePieChart } from "./OverviewItems";
import { useEffect } from "react";

const OverView = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [zone, setZone] = useState("");
  const [engineerId, setEngineerId] = useState("");
  const [overviewStats, setOverviewStats] = useState([]);
  const [topPlants, setTopplants] = useState([]);
  const { isLoading, makeApi } = useApiRequest();
  const { role } = getuserRole();
  const { state } = useGlobalContext();

  useEffect(() => {
    const fetchOverViewStats = async () => {
      const token = Cookies.get("token");
      const result = await makeApi({
        url: `https://solar-desk.onrender.com/api/solar/v1/issues/stats?zone=${zone}&engineerId=${engineerId}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (result?.status === "success") {
        setOverviewStats(result.stats);
        setTopplants(result.topPlants);
      }
    };
    fetchOverViewStats();
  }, [zone, engineerId]);

  const filterDataByYear = overviewStats.find(
    (opt) => opt.year === selectedDate.getFullYear()
  );

  const currentData = overviewStats.find(
    (opt) => opt.year === selectedDate.getFullYear()
  );

  const previousData = overviewStats.find(
    (opt) => opt.year === selectedDate.getFullYear() - 1
  );

  const issueDataType = [
    { name: "Controllable", value: filterDataByYear?.controllable || 0.001 },
    {
      name: "UnControllable",
      value: filterDataByYear?.uncontrollable || 0.001,
    },
  ];

  const issueStatusData = [
    { name: "Resolved", value: filterDataByYear?.resolved || 0 },
    { name: "In Progress", value: filterDataByYear?.inProgress || 0 },
    { name: "Open", value: filterDataByYear?.open || 0 },
  ];

  const statusData = issueStatusData.filter((item) => item.value > 0);

  return (
    <>
      <StyledOverViewMainContainer>
        <div
          style={{
            display: "flex",
            gap: "1.4rem",
            alignItems: "center",
            alignSelf: "flex-end",
            margin: "1rem 2rem 1rem 0",
            marginLeft: "1rem",
          }}
        >
          {(role === "admin" || role === "manager") && (
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <h1 style={{ fontSize: "1.4rem", color: "var(--textBody)" }}>
                Select Region
              </h1>
              <select
                value={zone}
                onChange={(e) => setZone(e.target.value)}
                style={{
                  width: "120px",
                  height: "30px",
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
              <h1 style={{ fontSize: "1.4rem", color: "var(--textBody)" }}>
                Select Engineer
              </h1>
              <select
                value={engineerId}
                onChange={(e) => setEngineerId(e.target.value)}
                style={{
                  width: "120px",
                  height: "30px",
                  borderRadius: "5px",
                  backgroundColor: "var(--inputBg)",
                  color: "var(--textBody)",
                  outline: "none",
                }}
              >
                <option value="">Select Engineer</option>
                {state.users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <h1 style={{ color: "var(--textBody)", fontSize: "1.4rem" }}>
              Select Year
            </h1>
            <StyledDatePickerWraper>
              <StyledDatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                showYearPicker
                dateFormat="yyyy"
                placeholderText="Select year"
              />
            </StyledDatePickerWraper>
          </div>
        </div>
        <StyledOverviewDashboard>
          <OverViewCartsData
            currentData={currentData}
            previousData={previousData}
            loadingState={isLoading}
          />
          <h1
            style={{
              textAlign: "center",
              color: "var(--textBody)",
              fontWeight: "bold",
              padding: "2rem",
            }}
          >
            Issue Breakdown by Type & Status
          </h1>
          <StyledOverviewPiechartMainContainer>
            <CustomePieChart
              data={issueDataType}
              title="Controllable vs Uncontrollable Issues"
              loadingState={isLoading}
            />
            <CustomePieChart
              data={statusData}
              title="Issue Status Distribution"
              loadingState={isLoading}
            />
          </StyledOverviewPiechartMainContainer>
          <StyledOverViewTopPlantContainer>
            <div>
              <div>
                <div
                  style={{
                    fontSize: "2.5rem",
                    color: "var(--textBody)",
                    padding: "2rem 0 1rem 0",
                  }}
                >
                  👇 Top 5 Generation loss Plants
                </div>
                <ul
                  style={{
                    marginTop: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "1rem",
                  }}
                >
                  {topPlants.map((plant) => (
                    <div
                      key={plant.plantName}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1.3rem",
                      }}
                    >
                      <li
                        style={{
                          color: "var(--textBody)",
                          fontSize: "1.8rem",
                          paddingBottom: "0.3rem",
                        }}
                      >
                        {plant.plantName}
                      </li>
                      <li
                        style={{
                          color: "var(--buttonSecondaryText)",
                          fontSize: "1.2rem",
                        }}
                      >
                        -Genration Loss:-{plant.totalGenerationLossKwh} Kwh
                      </li>
                      <li
                        style={{
                          color: "var(--buttonSecondaryText)",
                          fontSize: "1.2rem",
                        }}
                      >
                        -Issues Count:- {plant.issueCount}
                      </li>
                      <li
                        style={{
                          color: "var(--buttonSecondaryText)",
                          fontSize: "1.2rem",
                        }}
                      >
                        -Last Issue Date:-
                        {new Date(plant.lastIssueDate).toLocaleDateString()}
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </StyledOverViewTopPlantContainer>
        </StyledOverviewDashboard>
      </StyledOverViewMainContainer>
    </>
  );
};

export default OverView;
