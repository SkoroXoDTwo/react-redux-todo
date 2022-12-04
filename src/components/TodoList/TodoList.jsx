import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../../store/todos/todosActions";
import { allTodos, activeTodos } from "../../store/todos/todosSelectors";

function TodoList() {
  const todos = useSelector(allTodos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          {todo.title}
          <button onClick={() => dispatch(removeTodo(todo.id))}>Удалить</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList;
