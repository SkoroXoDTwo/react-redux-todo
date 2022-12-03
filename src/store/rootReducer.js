import { combineReducers } from "redux";

import { todos } from "./todos/todosReducer";

export const rootReducer = combineReducers({
  todos,
});
