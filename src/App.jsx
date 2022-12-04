import NewTodo from "./components/NewTodo/NewTodo";
import TodoList from "./components/TodoList/TodoList";

import React from "react";

function App() {
  return (
    <div className="App">
      <h1>React Redux Todo</h1>
      <NewTodo />
      <TodoList />
    </div>
  );
}

export default App;
