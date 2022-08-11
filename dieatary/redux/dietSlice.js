import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getFoodData = createAsyncThunk("dietary", async () => {
  try {
    const res = await axios.get(
      "https://api.nutritionix.com/v1_1/item?id=5955f82ff754dc336504a32f&appId=7992b614&appKey=ab289c4028b0d94832f595a2667b2fea"
    );
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
});

export const searchFood = createAsyncThunk("search", async () => {
  try {
    const res = await axios.get(
      "https://api.nutritionix.com/v1_1/search/pizza&appId=7992b614&appKey=ab289c4028b0d94832f595a2667b2fea"
    );
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
});

export const dietSlice = createSlice({
  name: "dietary",
  initialState: {
    item: [],
    searchQuerry: "",
    searchResults: [],
    isLoading: false,
    isError: null,
  },
  reducers: {},
  extraReducers: {
    [getFoodData.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
    [searchFood.fulfilled]: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

export default dietSlice.reducer;
