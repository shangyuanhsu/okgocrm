import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import hamburgerReducer from "./features/hamburger/hamburgerSlice";
import allSetReducer from "./features/allSet/allSet";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    hamburger: hamburgerReducer,
    allSet: allSetReducer,
  },
});
