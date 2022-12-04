import { combineReducers } from "redux";

import { todos } from "./todos/todosReducer";
import { filters } from "./filters/filtersReducers";


export const rootReducer = combineReducers({
  todos,
  filters
});
