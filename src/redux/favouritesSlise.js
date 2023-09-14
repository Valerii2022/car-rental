import { createSlice } from '@reduxjs/toolkit';

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

export const favouritesReducer = favouritesSlice.reducer;

export const { addFavourites, deleteFavourites, addFilters } =
  favouritesSlice.actions;
