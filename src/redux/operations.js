import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64881a170e2469c038fcf3d6.mockapi.io';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAll',
  async (page, search) => {
    const response = await axios.get('/adverts', {
      params: { page: page, limit: 8, search: search },
    });
    return response.data;
  }
);
