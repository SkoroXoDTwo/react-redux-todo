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
        theme: store.getState().theme,
      });
    }),
    1000
  );

  return store;
};
