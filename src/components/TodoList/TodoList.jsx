import { useSelector, useDispatch } from "react-redux";
import { selectVisibleTodo } from "../../features/NewTodo/newTodo-slice";
import { selectActiveFilter } from '../../features/Filters/filter-slice';
import { toggleTodo, removeTodo } from "../../features/NewTodo/newTodo-slice";
import './TodoList.scss';

function TodoList() {
  const activeFilter = useSelector(selectActiveFilter);
  const todos = useSelector(state => selectVisibleTodo(state, activeFilter));
  const dispatch = useDispatch();

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li className="todo-item" key={todo.id} draggable={true}>

          <label htmlFor={"checkbox-" + todo.id}>
            <input
              className="todo-item__checbox"
              type="checkbox"
              id={"checkbox-" + todo.id}
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            <span className="todo-item__checbox-custom"></span>
          </label>

          <p
            className={"todo-item__text " + (todo.completed ? "todo-item__text_completed" : "")}
            onClick={() => dispatch(toggleTodo(todo.id))}
          >
            {todo.title}
          </p>
          <button className="todo-item__delete-btn" onClick={() => dispatch(removeTodo(todo.id))}></button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList;
