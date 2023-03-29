import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

export const allSetSlice = createSlice({
  name: "allSet",
  initialState,
  reducers: {
    handleLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { handleLoading } = allSetSlice.actions;

export default allSetSlice.reducer;
