// Define a type for the slice state
export interface SpectrumState {
  velocity: number;
  altitude: number;
  temperature: number;
  isAscending: boolean;
  statusMessage: string;
  isActionRequired: boolean;
}
