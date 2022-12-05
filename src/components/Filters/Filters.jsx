import { useSelector, useDispatch } from 'react-redux'
import { setFilter } from '../../store/filters/filtersActions';
import { selectActiveFilter } from '../../store/filters/filtersSelectors'
import { selectVisibleTodos } from "../../store/todos/todosSelectors";
import './Filters.scss'

function Filters() {
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectActiveFilter);
  const todosActive = useSelector((state) => selectVisibleTodos(state, 'active'));

  return (
    <div className='filters'>
      <p className='filters__counter'>{todosActive.length} items left</p>
      <nav className='filters__container'>
        <button
          className={'filters__select-btn ' + (activeFilter === 'all' ? 'filters__select-btn_active' : '')}
          onClick={() => { dispatch(setFilter('all')) }}
        >
          All
        </button>
        <button
          className={'filters__select-btn ' + (activeFilter === 'active' ? 'filters__select-btn_active' : '')}
          onClick={() => { dispatch(setFilter('active')) }}
        >
          Active
        </button>
        <button
          className={'filters__select-btn ' + (activeFilter === 'completed' ? 'filters__select-btn_active' : '')}
          onClick={() => { dispatch(setFilter('completed')) }}
        >
          Completed
        </button>
      </nav>

      <button className='filters__clear-btn'>Clear completed</button>
    </div>
  );
}

export default Filters;
