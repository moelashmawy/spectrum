import { useEffect, useCallback } from "react";
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
import { Link } from "react-router-dom";
import { toastr } from "../../components/Toaster/Toaster";
import Button from "../../components/Button/Button";

function SpectrumHTTP() {
  const dispatch = useDispatch();

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://webfrontendassignment-isaraerospace.azurewebsites.net/api/SpectrumStatus",
        {
          method: "get",
          withCredentials: false,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
        },
      );

      dispatch(setVelocity(response.data.velocity));
      dispatch(setAltitude(response.data.altitude));
      dispatch(setTemperature(response.data.temperature));
      dispatch(setIsAscending(response.data.isAscending));
      dispatch(setStatusMessage(response.data.statusMessage));
      dispatch(setIsActionRequired(response.data.isActionRequired));
    } catch (error) {
      toastr.error((error as AxiosError).message);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <Link to="realtime" style={{ float: "right" }}>
        <Button variant="secondary">Real time Mode {">>"}</Button>
      </Link>

      <SensorVisualization onUpdateClick={fetchData} isManual />
    </div>
  );
}

export default SpectrumHTTP;
