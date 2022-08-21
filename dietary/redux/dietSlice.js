import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getFoodData = createAsyncThunk("dietary", async (id) => {
  try {
    const res = await axios.get(
      `https://api.nutritionix.com/v1_1/item?id=${id}`,
      {
        headers: {
          "x-app-id": "7992b614",
          "x-app-key": "ab289c4028b0d94832f595a2667b2fea",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
});

export const searchFood = createAsyncThunk("search", async (searchQuerry) => {
  try {
    const res = await axios.get(
      `https://trackapi.nutritionix.com/v2/search/instant?query=${searchQuerry}&common=true&detailed=true`,
      {
        headers: {
          "x-app-id": "7992b614",
          "x-app-key": "ab289c4028b0d94832f595a2667b2fea",
        },
      }
    );
    return res.data.branded;
  } catch (error) {
    console.log(error.message);
  }
});

export const dietSlice = createSlice({
  name: "dietary",
  initialState: {
    items: [],
    searchQuerry: "",
    searchResults: [],
    eatList: [],
    qty: 1,
    isLoading: false,
    isError: null,
    modal: false,
    loggedIn: false,
  },
  reducers: {
    foodList: (state, action) => {
      state.searchQuerry = action.payload;
    },
    increaseQty: (state, action) => {
      state.qty = state.qty + 1;
    },
    decreaseQty: (state, action) => {
      state.qty = state.qty - 1;
    },
    resetQty: (state, action) => {
      state.qty = 0;
    },
    addEatList: (state, action, id) => {
      if (id === action?.payload?.id) {
        state.eatList = [...state.eatList, state.items];
      }
    },
    toggleModal: (state, action) => {
      state.modal = !state.modal;
    },
    closeModal: (state, action) => {
      state.modal = false;
    },
    login: (state, action) => {
      state.loggedIn = true;
    },
    logout: (state, action) => {
      state.loggedIn = false;
    },
    removeEatList: (state, action, id) => {
      if (id === action?.payload?.id) {
        const id = action.payload;
        return {
          ...state,
          eatList: [...state.eatList.filter((list) => list.id !== id)],
        };
      }
    },
  },
  extraReducers: {
    [getFoodData.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [getFoodData.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getFoodData.rejected]: (state, action) => {
      state.isLoading = true;
      state.isError = action.error.message;
    },
    [searchFood.fulfilled]: (state, action) => {
      state.searchResults = action.payload;
      state.isLoading = false;
    },
    [searchFood.pending]: (state, action) => {
      state.isLoading = true;
    },
    [searchFood.rejected]: (state, action) => {
      state.isLoading = true;
      state.isError = action.error.message;
    },
  },
});

export const {
  foodList,
  increaseQty,
  decreaseQty,
  resetQty,
  addEatList,
  removeEatList,
  toggleModal,
  closeModal,
  login,
  logout,
} = dietSlice.actions;
export default dietSlice.reducer;
