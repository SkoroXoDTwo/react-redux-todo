import { createStore } from "redux";

import { rootReducer } from "./rootReducer";

export const cofigureStore = () => {
  return createStore(rootReducer);
};
