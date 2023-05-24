import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  code: 'function add(a,b) {\n return (a+b); \n}',
};

const codeSlice = createSlice(
  {
    name: 'code',
    initialState,
    reducers: {
      updateStateCode: (state, { payload }) => (
        { ...state, code: payload }
      ),
    },
  },
);

export const { updateStateCode } = codeSlice.actions;
export default codeSlice;
