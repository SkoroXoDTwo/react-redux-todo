import { createSlice } from "@reduxjs/toolkit";
export const filterSlice = createSlice({
  name: "@@filter",
  initialState: "all",
  reducers: {
    setFilter: (_, action) => {
      return action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
export const selectActiveFilter = (state) => state.filter;
