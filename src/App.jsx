import { useSelector, useDispatch } from "react-redux";

import { addTodo, removeTodo, toggleTodo } from "./store/todos/todosActions";
import { allTodos, activeTodos } from "./store/todos/todosSelectors";

import React from "react";

function App() {
  const todos = useSelector(allTodos);
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(e.target.title.value));
    e.target.reset();
  };

  return (
    <div className="App">
      <h1>React Redux Todo</h1>
      <form onSubmit={handleAddTodo}>
        <input type="text" name="title" placeholder="Введите текст" />
        <button type="submit">Добавить</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            title={todo.title}
            completed={todo.completed}
            id={todo.id}
          />
        ))}
      </ul>
    </div>
  );
}

function Todo({ title, completed, id }) {
  const dispatch = useDispatch();

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodo(id))}
      />
      {title}
      <button onClick={() => dispatch(removeTodo(id))}>Удалить</button>
    </li>
  );
}

export default App;
