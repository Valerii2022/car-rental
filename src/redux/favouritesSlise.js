import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const favouritesSlice = createSlice({
  name: 'filter',
  initialState: { favourites: [], filters: null },
  reducers: {
    addFavourites(state, { payload }) {
      state.favourites.push(payload);
    },
    deleteFavourites(state, { payload }) {
      state.favourites = state.favourites.filter(id => id !== payload);
    },
    addFilters(state, { payload }) {
      state.filters = payload;
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

export const { addFavourites, deleteFavourites, addFilters } =
  favouritesSlice.actions;
