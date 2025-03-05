import { configureStore } from '@reduxjs/toolkit';
import themeSlice from '../common/themeSlice';

const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
});

export default store;