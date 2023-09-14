import { createSlice } from '@reduxjs/toolkit';

const favouritesSlice = createSlice({
  name: 'filter',
  initialState: { favourites: [9582, 9586, 9619, 9730] },
  reducers: {
    addFavourites(state, { payload }) {
      state.favourites.push(payload);
    },
    deleteFavourites(state, { payload }) {
      state.favourites = state.favourites.filter(id => id !== payload);
    },
  },
});

export const favouritesReducer = favouritesSlice.reducer;

export const { addFavourites, deleteFavourites } = favouritesSlice.actions;
