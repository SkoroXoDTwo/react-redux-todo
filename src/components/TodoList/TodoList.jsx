import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../../store/todos/todosActions";
import { selectVisibleTodos } from "../../store/todos/todosSelectors";
import { selectActiveFilter } from '../../store/filters/filtersSelectors'
import './TodoList.scss'

function TodoList() {
  const activeFilter = useSelector(selectActiveFilter);
  const todos = useSelector((state) => selectVisibleTodos(state, activeFilter));
  const dispatch = useDispatch();

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li className="todo-item" key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          <p className="todo-item__text">{todo.title}</p>
          <button className="todo-item__delete-btn" onClick={() => dispatch(removeTodo(todo.id))}></button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList;
