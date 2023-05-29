import { configureStore } from '@reduxjs/toolkit';
import codeSlice from './codeSlice';

const store = configureStore(
  {
    reducer: codeSlice.reducer,
  },
);

export default store;
