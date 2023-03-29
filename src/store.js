import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import hamburgerReducer from "./features/hamburger/hamburgerSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    hamburger: hamburgerReducer,
  },
});
