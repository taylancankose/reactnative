import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import Config from 'react-native-config';

export const fetchData = createAsyncThunk('career', async () => {
  const res = await axios.get(Config.API_JOB_URL);
  return res.data;
});

export const careerSlice = createSlice({
  name: 'career',
  initialState: {
    items: [],
    isLoading: false,
    isError: null,
  },
  reducers: {},
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [fetchData.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchData.rejected]: (state, action) => {
      state.isError = action.isError.message;
    },
  },
});

export default careerSlice.reducer;
