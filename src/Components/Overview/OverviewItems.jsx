import {
  StyledOverViewCartContainer,
  StyledOverviewSubContainer,
  StyledOverViewTitleContainer,
  StyleOverViewStatus,
  StyledoverviewCartItemDisplay,
  StyledOverviewCartValue,
  StyledOverViewCartTrending,
  StyledOverViewPieContainer,
  StyledPichartHeader,
} from "./overviewStyle";
import { ThreeCircles } from "react-loader-spinner";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const Card = ({
  title,
  status,
  icon: Icon,
  value,
  trend,
  unit,
  loadingState,
  trendingIcon: TrendingIcon,
  isShow = true,
}) => {
  return (
    <StyledOverViewCartContainer $backgroundValue={status}>
      <StyledOverviewSubContainer>
        <StyledOverViewTitleContainer color={status}>
          {Icon && <Icon />}
          <h3>{title}</h3>
        </StyledOverViewTitleContainer>
        <StyleOverViewStatus color={status}>{status}</StyleOverViewStatus>
      </StyledOverviewSubContainer>
      <StyledoverviewCartItemDisplay>
        <StyledOverviewCartValue color={status}>
          {loadingState ? (
            <ThreeCircles
              visible={true}
              height="20"
              width="20"
              color={
                status === "optimal"
                  ? "#059669"
                  : status === "warning"
                  ? "#d97706"
                  : "#dc2626"
              }
              ariaLabel="three-circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          ) : (
            <>{typeof value === "number" ? value.toLocaleString() : value}</>
          )}

          <span style={{ fontWeight: "normal" }}>{unit}</span>
        </StyledOverviewCartValue>
        {isShow && (
          <StyledOverViewCartTrending $trendvalue={trend}>
            {TrendingIcon && <TrendingIcon size={18} />}
            <span>{trend}% Vs last period</span>
          </StyledOverViewCartTrending>
        )}
      </StyledoverviewCartItemDisplay>
    </StyledOverViewCartContainer>
  );
};

export const CustomePieChart = ({ data, title, loadingState }) => {
  return (
    <>
      <StyledOverViewPieContainer>
        {loadingState ? (
          <ThreeCircles
            visible={true}
            height="100"
            width="100"
            color="#4fa94d"
            ariaLabel="three-circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        ) : (
          <div style={{ margin: "1rem 0" }}>
            <StyledPichartHeader>{title}</StyledPichartHeader>
            <ResponsiveContainer width="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  label={({ name, percent }) =>
                    `${name} (${(percent * 100).toFixed(2)}%)`
                  }
                  outerRadius={100}
                  dataKey="value"
                  nameKey="name"
                  fill="#8884d8"
                >
                  {data.map((value, index) => (
                    <Cell
                      key={`cell-${value.name}`}
                      fill={
                        value.name === "Open"
                          ? "#ef4444"
                          : value.name === "In Progress" ||
                            value.name === "UnControllable"
                          ? "#f59e0b"
                          : value.name === "Resolved" ||
                            value.name === "Controllable"
                          ? "#10b981"
                          : ""
                      }
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend layout="vertical" verticalAlign="top" align="right" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </StyledOverViewPieContainer>
    </>
  );
};
