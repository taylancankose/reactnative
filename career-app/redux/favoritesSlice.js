import {createSlice, createEntityAdapter} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const favoriteAdaptor = createEntityAdapter();
const initialState = favoriteAdaptor.getInitialState();

export const favoriteSelectors = favoriteAdaptor.getSelectors(
  state => state.favorites,
);

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: initialState,
  reducers: {
    addFavorite: favoriteAdaptor.addOne,
    deleteFavorite: favoriteAdaptor.removeOne,
    clearFavorites: favoriteAdaptor.removeAll,
  },
});

export const {addFavorite, deleteFavorite, clearFavorites} =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
