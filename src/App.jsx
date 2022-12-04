import NewTodo from "./components/NewTodo/NewTodo";
import TodoList from "./components/TodoList/TodoList";
import Filters from "./components/Filters/Filters";

import React from "react";

function App() {
  return (
    <div className="App">
      <h1>React Redux Todo</h1>
      <NewTodo />
      <Filters />
      <TodoList />
    </div>
  );
}

export default App;
