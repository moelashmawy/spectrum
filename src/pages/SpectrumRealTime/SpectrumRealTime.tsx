import { useEffect, useCallback, useMemo } from "react";
import axios, { AxiosError } from "axios";
import SensorVisualization from "../../features/SensorVisualization/SensorVisualization";
import { useDispatch } from "react-redux";
import {
  setAltitude,
  setIsActionRequired,
  setIsAscending,
  setStatusMessage,
  setTemperature,
  setVelocity,
} from "../../redux/slices/spectrumSlice";
import { useAppSelector } from "../../redux/hooks";
import { Link } from "react-router-dom";
import { toastr } from "../../components/Toaster/Toaster";
import Button from "../../components/Button/Button";

function SpectrumRealTime() {
  const dispatch = useDispatch();

  const isActionRequired = useAppSelector(
    (state) => state.spectrum.isActionRequired,
  );

  const handleAction = async () => {
    try {
      const response = await axios.get(
        "https://webfrontendassignment-isaraerospace.azurewebsites.net/api/ActOnSpectrum",
      );

      if (response.status === 200) {
        dispatch(setIsActionRequired(false));
        toastr.success("Action was taken successfully", { autoClose: 500 });
      }
    } catch (error) {
      toastr.error((error as AxiosError).message);
    }
  };

  const socket = useMemo(
    () =>
      new WebSocket(
        "wss://webfrontendassignment-isaraerospace.azurewebsites.net/api/SpectrumWS",
      ),
    [],
  );

  const connectWebSocket = useCallback(() => {
    socket.onopen = () => {
      toastr.info("Connected to Spectrum");
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (!isActionRequired) {
        dispatch(setVelocity(data.Velocity));
        dispatch(setAltitude(data.Altitude));
        dispatch(setTemperature(data.Temperature));
        dispatch(setIsAscending(data.IsAscending));
        dispatch(setStatusMessage(data.StatusMessage));
        dispatch(setIsActionRequired(data.IsActionRequired));
      }
    };

    socket.onclose = () => {
      toastr.warn("Connection closed. Reconnecting...");
      connectWebSocket();
    };
  }, [socket, dispatch, isActionRequired]);

  useEffect(() => {
    connectWebSocket();
  }, [connectWebSocket]);

  return (
    <div>
      <Link
        to="/"
        onClick={() => {
          socket.close();
        }}
        style={{ float: "right" }}
      >
        <Button variant="secondary">Manual Mode {">>"}</Button>
      </Link>
      <SensorVisualization onActClick={handleAction} isManual={false} />
    </div>
  );
}

export default SpectrumRealTime;
