import { configureStore } from '@reduxjs/toolkit';
import { advertsReducer } from './advertsSlice';
import { favouritesReducer } from './favouritesSlise';

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    favourites: favouritesReducer,
  },
});
