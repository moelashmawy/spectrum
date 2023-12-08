import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SpectrumState } from "../../types/state";

const initialState: SpectrumState = {
  velocity: 0,
  altitude: 0,
  temperature: 0,
  isAscending: false,
  statusMessage: "",
  isActionRequired: false,
};

export const spectrumSlice = createSlice({
  name: "spectrum",
  initialState,
  reducers: {
    setVelocity: (state, action: PayloadAction<number>) => {
      state.velocity = Math.abs(action.payload);
    },
    setAltitude: (state, action: PayloadAction<number>) => {
      state.altitude = Math.abs(action.payload);
    },
    setTemperature: (state, action: PayloadAction<number>) => {
      state.temperature = action.payload;
    },
    setIsAscending: (state, action: PayloadAction<boolean>) => {
      state.isAscending = action.payload;
    },
    setStatusMessage: (state, action: PayloadAction<string>) => {
      state.statusMessage = action.payload;
    },
    setIsActionRequired: (state, action: PayloadAction<boolean>) => {
      state.isActionRequired = action.payload;
    },
  },
});

export const {
  setVelocity,
  setAltitude,
  setTemperature,
  setIsAscending,
  setStatusMessage,
  setIsActionRequired,
} = spectrumSlice.actions;

export default spectrumSlice.reducer;
