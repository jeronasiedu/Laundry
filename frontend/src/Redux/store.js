import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice';
export default configureStore({
  reducer: {
    user: userReducer,
  },
});
