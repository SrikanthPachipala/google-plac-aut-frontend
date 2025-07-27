import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';

import placesReducer from './placesSlice';

const store = configureStore({
  reducer: {
    places: placesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk), 
});

export default store;
