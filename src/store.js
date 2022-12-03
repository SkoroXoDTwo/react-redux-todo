import { createStore } from "redux";
import { devToolsEnhancer } from 'redux-devtools-extension';

let idTodo = 0;

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return [
        ...state,
        {
          id: ++idTodo,
          title: action.title,
          completed: false,
        },
      ];
    }

    case "TOGGLE_TODO": {
      return state.map((todo) =>
        todo.id === action.id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      );
    }

    case "REMOVE_TODO": {
      return state.filter((todo) => todo.id !== action.id);
    }

    default: {
      return state;
    }
  }
};

export const store = createStore(todos, devToolsEnhancer());

export const addTodo = (title) => {
  return {
    type: "ADD_TODO",
    title,
  };
};

export const toggleTodo = (id) => {
  return {
    type: "TOGGLE_TODO",
    id,
  };
};

export const removeTodo = (id) => {
  return {
    type: "REMOVE_TODO",
    id,
  };
};

