import { configureStore } from '@reduxjs/toolkit';
import sportsReducer from './sportsSlice/sportsSlice';
import detailReducer from './detailSlice/detailSlice';

const store = configureStore({
  reducer: {
    sports: sportsReducer,
    detail: detailReducer,
  },
});

export default store;
