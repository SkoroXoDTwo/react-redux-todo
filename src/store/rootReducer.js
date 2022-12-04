import { combineReducers } from "redux";

import { todos } from "./todos/todosReducer";
import { filters } from "./filters/filtersReducers";
import { theme } from "./themes/themesReducers";

export const rootReducer = combineReducers({
  todos,
  filters,
  theme
});
