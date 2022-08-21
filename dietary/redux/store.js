import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import dietSlice from "./dietSlice";

export const store = configureStore({
  reducer: {
    dietary: dietSlice,
    auth: authSlice,
  },
});
