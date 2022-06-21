import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getDetails = createAsyncThunk('getDetails/score', async (payload) => {
  const response = await fetch(`https://sports.api.decathlon.com/sports/${payload.id}`);
  const data = await response.json();
  return data;
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
