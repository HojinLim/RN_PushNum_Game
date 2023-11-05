import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Token {
  content: string;
}

const initialState: Token = {
  content: "",
};

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.content = action.payload;
    },
  },
});

export const { setToken } = tokenSlice.actions;
export default tokenSlice.reducer;
