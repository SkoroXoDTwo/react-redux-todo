import BackgroundImage from "./components/BackgroundImage/BackgroundImage";
import Header from "./components/Header/Header";
import NewTodo from "./components/NewTodo/NewTodo";
import TodoList from "./components/TodoList/TodoList";
import Filters from "./components/Filters/Filters";
import './App.scss'
import React from "react";
import { setHTMLTheme } from './utils/setHTMLTheme'
import { selectTheme } from './store/themes/themesSelectors'
import { useSelector } from 'react-redux'

function App() {
  const activeTheme = useSelector(selectTheme);
  setHTMLTheme(activeTheme);

  return (
    <div className="app">
      <BackgroundImage />
      <div className="app__container">
        <Header />
        <NewTodo />
        <TodoList />
        <Filters />
      </div>
    </div>
  );
}

export default App;
