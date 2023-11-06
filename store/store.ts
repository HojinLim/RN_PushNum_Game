import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "./tokenSlice";

export const store = configureStore({
  reducer: {
    profile: profileSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
