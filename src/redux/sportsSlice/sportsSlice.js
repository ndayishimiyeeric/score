import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getData = createAsyncThunk('getData/score', async () => {
  const response = await fetch('https://sports.api.decathlon.com/sports');
  const data = await response.json();
  const newData = data.data.slice(8, 28).map((item) => ({
    id: item.id,
    icon: item.attributes.icon,
    name: item.attributes.name,
    tags: item.relationships.tags.data,
  }));
  return newData;
});

const leaguesReducer = createSlice({
  name: 'leagues',
  initialState: [],
  reducers: {},
  extraReducers: {
    [getData.fulfilled]: (state, action) => action.payload,
  },
});

export default leaguesReducer.reducer;
