import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const favouritesSlice = createSlice({
  name: 'filter',
  initialState: { favourites: [] },
  reducers: {
    addFavourites(state, { payload }) {
      state.favourites.push(payload);
    },
    deleteFavourites(state, { payload }) {
      state.favourites = state.favourites.filter(id => id !== payload);
    },
  },
});

const persistConfig = {
  key: 'filter',
  storage,
};

export const favouritesReducer = persistReducer(
  persistConfig,
  favouritesSlice.reducer
);

export const { addFavourites, deleteFavourites } = favouritesSlice.actions;
