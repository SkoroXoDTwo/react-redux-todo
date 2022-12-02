import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo } from "./store";
import React from "react";

function App() {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(e.target.title.value));
  };

  console.log(todos);

  return (
    <div className="App">
      <h1>React Redux Todo</h1>
      <form onSubmit={handleAddTodo}>
        <input type="text" name="title" placeholder="Введите текст" />
        <button type="submit">Добавить</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} title={todo.title} completed={todo.completed} id={todo.id}/>
        ))}
      </ul>
    </div>
  );
}

function Todo({ title, completed, id }) {
  const dispatch = useDispatch();

  return (
    <li>
      <input type="checkbox" checked={completed} onChange={() => dispatch(toggleTodo(id))}/>
      {title}
    </li>
  );
}

export default App;
