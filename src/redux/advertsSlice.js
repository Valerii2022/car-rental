import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './operations';

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: { items: [], isLoading: false, error: null, loadMore: true },
  extraReducers: builder => {
    builder
      .addCase(fetchAdverts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAdverts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        if (payload.length < 8) {
          state.loadMore = false;
        }
        state.items = payload;
      })
      .addCase(fetchAdverts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const advertsReducer = advertsSlice.reducer;
