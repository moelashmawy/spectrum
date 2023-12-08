import Chart from "./Chart";
import { createSnapshot } from "../../utils/test";
import { VELOCITY_OPTIONS } from "../../constants/chart";

describe("Chart", () => {
  test("Gauge Chart snapshot", () => {
    createSnapshot(
      <Chart
        type="Gauge"
        chartData={[["Mock title"], [50]]}
        chartOptions={VELOCITY_OPTIONS}
        width={300}
        height={300}
      />,
    );
  });

  test("Gauge SteppedAreaChart snapshot", () => {
    createSnapshot(
      <Chart
        type="SteppedAreaChart"
        chartData={[["Mock title"], [50]]}
        chartOptions={VELOCITY_OPTIONS}
      />,
    );
  });
});
