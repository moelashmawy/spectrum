import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import SpectrumHTTP from "./SpectrumHTTP";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { Toastr } from "../../components/Toaster/Toaster";

jest.mock("axios");

const renderApp = () =>
  render(
    <Provider store={store}>
      <BrowserRouter>
        <SpectrumHTTP />
        <Toastr />
      </BrowserRouter>
    </Provider>,
  );

describe("SpectrumHTTP Component", () => {
  test("renders SpectrumHTTP component", async () => {
    renderApp();
    expect(screen.getByText("Real time Mode", { exact: false })).toBeDefined();
  });

  test("fetches data and updates state on button click", async () => {
    // Mock axios.get to return a specific response
    (axios.get as jest.Mock).mockResolvedValue({
      data: {
        velocity: 100,
        altitude: 3000,
        temperature: -15,
        isAscending: true,
        statusMessage: "Mocked status message",
        isActionRequired: false,
      },
    });

    renderApp();

    await waitFor(() => {
      expect(
        screen.getByText("Mocked status message", { exact: false }),
      ).toBeDefined();
    });
  });

  test("handles error during data fetching", async () => {
    renderApp();
    // Mock axios.get to simulate an error response
    (axios.get as jest.Mock).mockRejectedValue(new Error("Network Error"));

    // Click the "Update Data" button
    fireEvent.click(screen.getByText("Update Data"));

    await waitFor(() => {
      expect(screen.getByText("Network Error")).toBeDefined();
    });
  });
});
