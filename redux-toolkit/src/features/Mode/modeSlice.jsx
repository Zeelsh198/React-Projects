import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "light",
};

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    light: (state) => {
      state.value = "light";
    },
    dark: (state) => {
      state.value = "dark";
    },
  },
});

export const { light, dark } = modeSlice.actions;
export default modeSlice.reducer;
