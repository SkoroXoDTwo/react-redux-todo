import { addTodo } from "../../store/todos/todosActions";
import { useDispatch } from "react-redux";

function NewTodo() {
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(e.target.title.value));
    e.target.reset();
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input type="text" name="title" placeholder="Введите текст" />
      <button type="submit">Добавить</button>
    </form>
  )
}

export default NewTodo;
