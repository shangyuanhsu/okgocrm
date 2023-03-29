import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};
export const hamburgerSlice = createSlice({
  name: "hamburger",
  initialState,
  reducers: {
    handleHam: (state) => {
      state.value = !state.value;
    },
  },
});

export const { handleHam } = hamburgerSlice.actions;

export default hamburgerSlice.reducer;
