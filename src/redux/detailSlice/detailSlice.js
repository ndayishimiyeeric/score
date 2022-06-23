import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  details: [],
  index: JSON.parse(localStorage.getItem('sport')),
  searchItem: '',
};

export const getDetails = createAsyncThunk('getDetails/score', async () => {
  const response = await fetch('https://sports.api.decathlon.com/sports/');
  const data = await response.json();
  const result = data.data;
  return result;
});

const detailReducer = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    updateIndex: (state, action) => {
      state.index = action.payload; //eslint-disable-line
    },

    updateSearchItem: (state, action) => {
      state.searchItem = action.payload; //eslint-disable-line
    },
  },
  extraReducers: {
    [getDetails.fulfilled]: (state, action) => {
      const newState = state;
      newState.details = action.payload;
    },
  },
});

export const { updateIndex, updateSearchItem } = detailReducer.actions;

export default detailReducer.reducer;
