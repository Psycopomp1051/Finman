// store.js
import { configureStore } from '@reduxjs/toolkit';
import forecastingReducer from '../slice/forecastingSlice';

export default configureStore({
  reducer: {
    forecasting: forecastingReducer,
  },
});
