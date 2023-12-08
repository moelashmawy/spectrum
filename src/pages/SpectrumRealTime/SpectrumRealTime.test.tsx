import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import WebSocket from "jest-websocket-mock";
import SpectrumRealTime from "./SpectrumRealTime";
import { store } from "../../redux/store";
import { Toastr } from "../../components/Toaster/Toaster";

jest.mock("axios");

const renderApp = () =>
  render(
    <Provider store={store}>
      <BrowserRouter>
        <SpectrumRealTime />
        <Toastr />
      </BrowserRouter>
    </Provider>,
  );

describe("SpectrumRealTime Component", () => {
  let server: WebSocket;

  beforeAll(() => {
    server = new WebSocket(
      "wss://webfrontendassignment-isaraerospace.azurewebsites.net/api/SpectrumWS",
    );
  });

  afterAll(() => {
    server.close();
  });

  test("renders SpectrumRealTime component", async () => {
    renderApp();

    expect(screen.getByText("Manual Mode", { exact: false })).toBeDefined();
  });

  test("handles WebSocket message and updates state", async () => {
    renderApp();

    // Simulate a WebSocket message
    server.send(
      '{"Velocity": 100, "Altitude": 3000, "Temperature": -15, "IsAscending": true, "StatusMessage": "Mocked status message", "IsActionRequired": false}',
    );

    await waitFor(() => {
      expect(
        screen.getByText("Mocked status message", { exact: false }),
      ).toBeDefined();
    });
  });

  test("handles WebSocket close and reconnects", async () => {
    renderApp();

    // Simulate WebSocket close
    server.close();

    // Wait for the reconnection attempt
    await waitFor(() => {
      expect(
        screen.getByText("Connection closed. Reconnecting..."),
      ).toBeDefined();
    });
  });
});
