import BackgroundImage from "./components/BackgroundImage/BackgroundImage";
import Header from "./components/Header/Header";
import NewTodo from "./components/NewTodo/NewTodo";
import TodoList from "./components/TodoList/TodoList";
import Filters from "./components/Filters/Filters";
import './App.scss'
import React from "react";

function App() {
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
