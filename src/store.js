import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./features/NewTodo/newTodo-slice";
import { filterReducer } from "./features/Filters/filter-slice";
import { themeReducer } from "./features/Theme/theme-slice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    filter: filterReducer,
    theme: themeReducer,
  },
  devTools: true,
});
