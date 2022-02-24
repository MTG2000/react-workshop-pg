import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoFilters from "./components/TodoFilters";
import TodoList from "./components/TodoList";
import TodosContextProvider from "./components/TodosContext";

function App() {
  return (
    <TodosContextProvider>
      <div className="container">
        <div className="card">
          <TodoFilters />
          <TodoList />
          <AddTodo />
        </div>
      </div>
    </TodosContextProvider>
  );
}

export default App;
