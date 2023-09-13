import { configureStore } from '@reduxjs/toolkit';
import { advertsReducer } from './advertsSlice';

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
  },
});
