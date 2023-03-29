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
    handleColseHam: (state) => {
      state.value =false;
    },
  },
});

export const { handleHam ,handleColseHam} = hamburgerSlice.actions;

export default hamburgerSlice.reducer;
