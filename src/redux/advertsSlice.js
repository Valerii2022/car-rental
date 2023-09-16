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
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (action.payload.length < 8) {
          state.loadMore = false;
        }
        if (action.meta.arg === 1) {
          state.items = action.payload;
        } else {
          state.items.push(...action.payload);
        }
      })
      .addCase(fetchAdverts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const advertsReducer = advertsSlice.reducer;
