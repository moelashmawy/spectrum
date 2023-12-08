import { configureStore } from "@reduxjs/toolkit";
import spectrumSlice from "./slices/spectrumSlice";

export const store = configureStore({
  reducer: {
    spectrum: spectrumSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
