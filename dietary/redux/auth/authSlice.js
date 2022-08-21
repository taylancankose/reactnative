import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userInfo: [],
    isLoading: false,
    isError: null,
  },
  reducers: {},
  extraReducers: {
    [registerUser.fulfilled]: (state, action) => {
      state.userInfo = action.payload;
      state.isLoading = false;
    },
    [registerUser.pending]: (state, action) => {
      state.isLoading = true;
    },
    [registerUser.rejected]: (state, action) => {
      state.isLoading = true;
      state.isError = action.error.message;
    },
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
