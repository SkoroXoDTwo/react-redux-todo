import { TOGGLE_THEME } from "./themeConst";

export const setTheme = (theme) => {
  return {
    type: TOGGLE_THEME,
    theme,
  };
};
