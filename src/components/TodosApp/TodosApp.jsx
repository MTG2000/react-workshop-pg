import "./todos-app-styles.css";
import AddTodo from "./components/AddTodo";
import TodoFilters from "./components/TodoFilters";
import TodoList from "./components/TodoList";
import TodosContextProvider from "./components/TodosContext";

function TodosApp() {
  document.title = "Todos App";

  return (
    <div className="todos-app">
      <div className="container">
        <div className="card">
          <TodosContextProvider>
            <TodoFilters />
            <TodoList />
            <AddTodo />
          </TodosContextProvider>
        </div>
      </div>
    </div>
  );
}

export default TodosApp;
