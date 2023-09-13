import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64881a170e2469c038fcf3d6.mockapi.io';

export const fetchAdverts = createAsyncThunk('adverts/fetchAll', async () => {
  const response = await axios.get('/adverts');
  return response.data;
});
