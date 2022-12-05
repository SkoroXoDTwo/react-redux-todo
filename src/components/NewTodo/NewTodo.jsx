import { addTodo } from "../../store/todos/todosActions";
import { useDispatch } from "react-redux";
import './NewTodo.scss'

function NewTodo() {
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(e.target.title.value));
    e.target.reset();
  };

  return (
    <form className="form-add" onSubmit={handleAddTodo}>
      <button className="form-add__btn" type="submit" ></button>
      <input
        className="form-add__input"
        type="text" name="title"
        placeholder="Введите текст..."
        required
        minLength={2}
      />
    </form>
  )
}

export default NewTodo;
