import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  admin: {
    firstName: "Sara",
    lastName: "Hsu",
    email:"okgo.sara@gmail.com",
    location: "Taipei",
    position: "Sale",
    phone:"+886-987675849",
    partner:[
      {
        id:"001",
        firstName: "Davis",
        lastName: "Chen",
        location: "Taipei",
        position: "Team Leader",
        phone:"+886-9098765341"
      },
      {
        id:"002",
        firstName: "Amy",
        lastName: "Wu",
        location: "Taipei",
        position: "Manager",
        phone:"+886-9909000000"
      }
    ]

  }
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
