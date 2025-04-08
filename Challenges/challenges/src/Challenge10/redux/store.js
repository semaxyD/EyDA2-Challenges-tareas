import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer";
import stackReducer from "./stackSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    stack: stackReducer,
  },
});