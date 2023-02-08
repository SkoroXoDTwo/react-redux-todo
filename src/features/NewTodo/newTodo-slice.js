import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "@@todo",
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title) => ({
        payload: {
          title,
          id: Date.now(),
          completed: false,
        },
      }),
    },
    toggleTodo: (state, action) => {
      const id = action.payload;
      const todo = state.find((todo) => todo.id === id);
      todo.completed = !todo.completed;
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      return state.filter((todo) => todo.id !== id);
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export const selectTodos = (state) => state.todo;
export const selectVisibleTodo = (state, filter) => {
  console.log(state)
  switch (filter) {
    case "all": {
      return state.todos;
    }

    case "active": {
      return state.todos.filter((todo) => !todo.completed);
    }

    case "completed": {
      return state.todos.filter((todo) => todo.completed);
    }

    default: {
      return state.todos;
    }
  }
};
