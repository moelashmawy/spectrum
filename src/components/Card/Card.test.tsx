import Card from "./Card";
import { createSnapshot } from "../../utils/test";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
  test("Card snapshot with all data", () => {
    createSnapshot(
      <Card
        statusMessage="Rocket systems are operational and monitoring."
        isActionRequired={false}
        isManual={true}
      />,
    );
  });

  test("Show action required when action is required", () => {
    render(
      <Card
        statusMessage="Rocket systems are operational and monitoring."
        isActionRequired={true}
        isManual={true}
      />,
    );

    const ActionRequired = screen.getByText("Action Required");
    expect(ActionRequired).toBeInTheDocument();
  });

  test("Show Update Data button when mode is manual", () => {
    render(
      <Card
        statusMessage="Rocket systems are operational and monitoring."
        isActionRequired={true}
        isManual={true}
      />,
    );

    const UpdateDataButton = screen.getByText("Update Data");
    expect(UpdateDataButton).toBeInTheDocument();
  });

  test("Show Take Action button when mode is real time and action required", () => {
    render(
      <Card
        statusMessage="Rocket systems are operational and monitoring."
        isActionRequired={true}
        isManual={false}
      />,
    );

    const TakeActionButton = screen.getByText("Take Action");
    expect(TakeActionButton).toBeInTheDocument();
  });
});
