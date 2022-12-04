import { TOGGLE_THEME } from "./themesConst";

export const theme = (state = "light", action) => {
  switch (action.type) {
    case TOGGLE_THEME: {
      return state === "light" ? "dark" : "light";
    }

    default: {
      return state;
    }
  }
};
