import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { rootReducer } from "./rootReducer";
import { loadState, saveState } from "../utils/localStorage";
import { throttle } from "lodash";

export const cofigureStore = () => {
  const presistedState = loadState();

  const store = createStore(rootReducer, presistedState, devToolsEnhancer());

  store.subscribe(
    throttle(() => {
      saveState({
        todos: store.getState().todos,
        themes: store.getState().themes,
      });
    }),
    1000
  );

  return store;
};
