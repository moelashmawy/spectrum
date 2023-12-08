import React from "react";
import {
  Chart,
  ChartWrapperOptions,
  GoogleChartWrapperChartType,
} from "react-google-charts";
import styled from "styled-components";

const StyledGauge = styled.div`
  height: "100%";
  width: "100%";
  text-align: center;
`;

interface GaugeChartProps {
  type: GoogleChartWrapperChartType;
  chartData: Array<Array<string | number>>;
  chartOptions: ChartWrapperOptions["options"];
  width?: number;
  height?: number;
}

const GaugeChart: React.FC<GaugeChartProps> = ({
  type,
  chartData,
  chartOptions,
  width,
  height,
}) => {
  return (
    <StyledGauge>
      <Chart
        chartType={type}
        height={`${height}px`}
        width={`${width}px`}
        data={chartData}
        options={chartOptions}
      />
    </StyledGauge>
  );
};

export default GaugeChart;
