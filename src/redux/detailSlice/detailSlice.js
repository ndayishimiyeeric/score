/* eslint-disable no-param-reassign */
/* eslint-disable comma-dangle */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getDetails = createAsyncThunk('getDetails/score', async () => {
  const response = await fetch('https://sports.api.decathlon.com/sports');
  const data = await response.json();
  const result = data.data;
  return result;
});

const detailReducer = createSlice({
  name: 'detail',
  initialState: [],
  reducers: {},
  extraReducers: {
    [getDetails.fulfilled]: (state, action) => action.payload,
  },
});

export default detailReducer.reducer;
