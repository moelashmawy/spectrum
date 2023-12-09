import React, { useEffect, useState } from "react";
import StyledChart from "../../components/Chart/Chart";
import StyledRocketImage from "../../components/Image/Image";
import Rocket from "../../assets/rocket.png";
import { useAppSelector } from "../../redux/hooks";
import { getCurrentTime } from "../../utils/time";
import Card from "../../components/Card/Card";
import {
  ALTITUDE_OPTIONS,
  TEMP_OPTIONS,
  VELOCITY_OPTIONS,
} from "../../constants/chart";
import {
  StyledCharContainer,
  StyledVisContainer,
} from "./SensorVisualization.styles";

const ALTITUDE_THROUG = 10;

interface SensorVisualizationProps {
  onUpdateClick?: () => void;
  onActClick?: () => void;
  isManual: boolean;
}

const SensorVisualization: React.FC<SensorVisualizationProps> = ({
  isManual,
  onActClick,
  onUpdateClick,
}) => {
  const velocity = useAppSelector((state) => state.spectrum.velocity);
  const altitude = useAppSelector((state) => state.spectrum.altitude);
  const temperature = useAppSelector((state) => state.spectrum.temperature);
  const isAscending = useAppSelector((state) => state.spectrum.isAscending);
  const isActionRequired = useAppSelector(
    (state) => state.spectrum.isActionRequired,
  );
  const statusMessage = useAppSelector((state) => state.spectrum.statusMessage);

  const [altitudeData, setAltitudeData] = useState([
    ["Time", "Altitude"],
    [getCurrentTime(), 0],
  ]);

  useEffect(() => {
    if (altitudeData.length === ALTITUDE_THROUG) {
      setAltitudeData([
        ...altitudeData.splice(1, 1),
        [getCurrentTime(), Math.trunc(altitude)],
      ]);
    }

    if (altitudeData.length < ALTITUDE_THROUG) {
      setAltitudeData([
        ...altitudeData,
        [getCurrentTime(), Math.trunc(altitude)],
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [altitude]);

  return (
    <StyledVisContainer>
      <div>
        <StyledCharContainer>
          <StyledChart
            type="Gauge"
            chartData={[["Speed"], [velocity]]}
            chartOptions={VELOCITY_OPTIONS}
            width={300}
            height={300}
          />
          <StyledRocketImage
            image={Rocket}
            isAscending={isAscending}
            width={160}
            height={160}
          />
        </StyledCharContainer>
        <StyledChart
          type="Gauge"
          chartData={[["Temperature"], [Math.trunc(temperature)]]}
          chartOptions={TEMP_OPTIONS}
          width={450}
          height={450}
        />
      </div>

      <StyledChart
        type="SteppedAreaChart"
        chartData={altitudeData}
        chartOptions={ALTITUDE_OPTIONS}
        width={700}
        height={700}
      />

      <Card
        statusMessage={statusMessage}
        isActionRequired={isActionRequired}
        isManual={isManual}
        onUpdateClick={onUpdateClick}
        onActClick={onActClick}
      />
    </StyledVisContainer>
  );
};

export default SensorVisualization;
