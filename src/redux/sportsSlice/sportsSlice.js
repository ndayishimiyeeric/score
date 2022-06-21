import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// const myHeaders = new Headers();
// myHeaders.append('x-rapidapi-key', '1c951e927b203ddc9f238b8feed45ff8');
// myHeaders.append('x-rapidapi-host', 'v3.football.api-sports.io');

// const requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow',
// };

export const getData = createAsyncThunk('getData/score', async () => {
  const response = await fetch('https://sports.api.decathlon.com/sports');
  const data = await response.json();
  return data.data;
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
