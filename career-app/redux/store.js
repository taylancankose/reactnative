import {configureStore} from '@reduxjs/toolkit';
import careerSlice from './careerSlice';
import favoritesSlice from './favoritesSlice';

export const store = configureStore({
  reducer: {
    career: careerSlice,
    favorites: favoritesSlice,
  },
});
