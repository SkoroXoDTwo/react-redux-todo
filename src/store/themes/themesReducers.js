import {TOGGLE_THEME} from './themesConst'

export const theme = (state = 'light', action) => {
  switch (action.type) {
    case TOGGLE_THEME: {
      return {
        ...state,
        theme: action.theme === 'light' ? 'dark' : 'light',
      }
    }

    default: {
      return state;
    }
  }
};
