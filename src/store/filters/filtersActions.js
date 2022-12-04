import { SET_FILTER } from "./filtersConst";

export const setFilter = (filter) => {
  return {
    type: SET_FILTER,
    filter,
  }
}
