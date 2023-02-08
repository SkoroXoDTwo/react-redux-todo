import BackgroundImage from "./components/BackgroundImage/BackgroundImage";
import Header from "./components/Header/Header";
import NewTodo from "./features/NewTodo/NewTodo";
import TodoList from "./components/TodoList/TodoList";
import Filters from "./features/Filters/Filters";
import './App.scss'
import React from "react";
import { setHtmlTheme } from './utils/setHtmlTheme'
import { selectTheme } from './features/Theme/theme-slice'
import { useSelector } from 'react-redux'

function App() {
  const activeTheme = useSelector(selectTheme);
  setHtmlTheme(activeTheme);

  return (
    <div className="app">
      <BackgroundImage />
      <div className="app__container">
        <Header />
        <NewTodo />
        <Filters />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
