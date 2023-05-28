import { createSlice } from '@reduxjs/toolkit';
import filter from '../util/Helpers/filter';

const initialState = {
  code: 'function add(a,b) {\n return (a+b); \n}',
  dataSet: [],
  filteredBySearch: [],
  focus: false,
};

const codeSlice = createSlice(
  {
    name: 'code',
    initialState,
    reducers: {
      updateStateCode: (state, { payload }) => (
        { ...state, code: payload }
      ),
      feedDataSet: (state, { payload }) => (
        { ...state, dataSet: payload }
      ),
      feedFilteredBySearch: (state, { payload }) => {
        const filteredItems = filter(state.dataSet, payload)
        || [{ tagName: 'Not-Found' }];
        return (
          { ...state, filteredBySearch: filteredItems }
        );
      },
      feedFocus: (state, { payload }) => ((
        { ...state, focus: payload }
      )
      ),
    },
  },
);

export const {
  updateStateCode, feedDataSet, feedFilteredBySearch,
  feedFocus,
} = codeSlice.actions;
export default codeSlice;
