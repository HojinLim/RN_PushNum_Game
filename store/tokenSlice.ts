import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Profile } from "../constants/types";

const initialState: Profile = {
  idToken: "",
  email: "",
};

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<Profile>) => {
      return {
        idToken: action.payload.idToken,
        email: action.payload.email,
      };
    },
  },
});

export const { setToken } = tokenSlice.actions;
export default tokenSlice.reducer;
