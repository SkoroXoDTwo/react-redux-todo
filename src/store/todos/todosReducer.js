import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, REMOVE_COMPLETED } from "./todosConst";

export const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [
        ...state,
        {
          id: Date.now(),
          title: action.title,
          completed: false,
        },
      ];
    }

    case TOGGLE_TODO: {
      return state.map((todo) =>
        todo.id === action.id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      );
    }

    case REMOVE_TODO: {
      return state.filter((todo) => todo.id !== action.id);
    }

    case REMOVE_COMPLETED: {
      return state.filter((todo) => !todo.completed);
    }

    default: {
      return state;
    }
  }
};
