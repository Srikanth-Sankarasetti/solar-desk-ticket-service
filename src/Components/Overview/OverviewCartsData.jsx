import { StyleOverViewMainContainerCart } from "./overviewStyle";

import { Card } from "./OverviewItems";

import {
  Zap,
  AlertCircle,
  TrendingUp,
  TrendingDown,
  Target,
} from "lucide-react";

const OverViewCartsData = ({ currentData, previousData, loadingState }) => {
  //active Case caluculation
  const currentActive = currentData?.open + currentData?.inProgress || 0;
  const previousActive = previousData?.open + previousData?.inProgress || 0;

  const activeTrend = previousActive
    ? ((currentActive - previousActive) / previousActive) * 100
    : 0;

  const openIssuestrendingIcon = activeTrend >= 0 ? TrendingUp : TrendingDown;

  //total tickets caluculations
  const activeTotaltrendRaw =
    previousData?.totalIssues || 0
      ? ((currentData?.totalIssues - previousData?.totalIssues) /
          previousData?.totalIssues) *
        100
      : 0;

  const totalIssueTrending =
    activeTotaltrendRaw >= 0 ? TrendingUp : TrendingDown;

  //resolutionRate calaucualtion

  const activeResolutionTrend =
    previousData?.resolutionRate || 0
      ? ((currentData?.resolutionRate - previousData?.resolutionRate) /
          previousData?.resolutionRate) *
        100
      : 0;
  const resolutionRateTrending =
    activeResolutionTrend >= 0 ? TrendingUp : TrendingDown;

  //GenrationLoss Caluculation
  const ActiveGenrationLossTrend =
    previousData?.generationLossKwh || 0
      ? ((currentData?.generationLossKwh - previousData?.generationLossKwh) /
          previousData?.generationLossKwh) *
        100
      : 0;

  const ActiveGenerationLossTrending =
    ActiveGenrationLossTrend >= 0 ? TrendingUp : TrendingDown;
  return (
    <StyleOverViewMainContainerCart>
      <Card
        title="Total Tickets"
        trend={activeTotaltrendRaw.toFixed(2)}
        value={currentData?.totalIssues || 0}
        loadingState={loadingState}
        unit="Items"
        status={
          activeTotaltrendRaw <= 10
            ? "optimal"
            : activeTotaltrendRaw > 10 && activeTotaltrendRaw <= 20
            ? "warning"
            : "critical"
        }
        icon={AlertCircle}
        trendingIcon={totalIssueTrending}
      />
      <Card
        title="Active Tickets"
        trend={activeTrend.toFixed(2)}
        value={currentActive}
        loadingState={loadingState}
        unit="Items"
        status={
          currentActive <= 20
            ? "optimal"
            : currentActive <= 25
            ? "warning"
            : "critical"
        }
        icon={AlertCircle}
        trendingIcon={openIssuestrendingIcon}
      />
      <Card
        title="Resolution Rate"
        trend={activeResolutionTrend.toFixed(2)}
        value={currentData?.resolutionRate || 0}
        loadingState={loadingState}
        unit="%"
        status={
          currentData?.resolutionRate >= 80
            ? "optimal"
            : currentData?.resolutionRate >= 70
            ? "warning"
            : "critical"
        }
        icon={Target}
        trendingIcon={resolutionRateTrending}
        isShow={false}
      />
      <Card
        title="Genrationloss Kwh"
        trend={ActiveGenrationLossTrend.toFixed(2)}
        value={currentData?.generationLossKwh || 0}
        loadingState={loadingState}
        unit="Kwh"
        status={
          ActiveGenrationLossTrend <= 10
            ? "optimal"
            : ActiveGenrationLossTrend <= 20
            ? "warning"
            : "critical"
        }
        icon={Zap}
        trendingIcon={ActiveGenerationLossTrending}
      />
    </StyleOverViewMainContainerCart>
  );
};

export default OverViewCartsData;
