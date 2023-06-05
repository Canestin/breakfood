import { createSlice } from "@reduxjs/toolkit";

const appearanceSlice = createSlice({
  name: "appearance",
  initialState: "auto", // light | dark | auto
  reducers: {
    appearance: (state, action) => {
      return action.payload;
    },
  },
});

export default appearanceSlice.reducer;
export const { appearance } = appearanceSlice.actions;
