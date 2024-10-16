import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/counter/counterSlice';
import appReducer from '../redux/app/appSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
