import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoFilters from "./components/TodoFilters";
import TodoList from "./components/TodoList";

let idCntr = 4;

const initialData = [
  { id: 1, text: "Do The Dishes", isCompleted: false },
  { id: 2, text: "Take out the trash", isCompleted: true },
  { id: 3, text: "Watch AOT", isCompleted: false },
];

function App() {
  const [filter, setFilter] = useState(0);

  const [todos, setTodos] = useState(initialData);

  const handleAddTodo = (newTodo) => {
    setTodos([
      ...todos,
      {
        id: idCntr++,
        text: newTodo,
        isCompleted: false,
      },
    ]);
  };

  const handleChangeFilter = (value) => {
    setFilter(value);
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        } else return todo;
      })
    );
  };

  const filteredTodos = todos.filter((todo) => {
    return (
      filter === 0 ||
      (filter === 1 && todo.isCompleted) ||
      (filter === 2 && !todo.isCompleted)
    );
  });

  return (
    <div className="container">
      <div className="card">
        <TodoFilters filter={filter} handleChangeFilter={handleChangeFilter} />
        <TodoList todos={filteredTodos} handleToggleTodo={handleToggleTodo} />
        <AddTodo handleAddTodo={handleAddTodo} />
      </div>
    </div>
  );
}

export default App;
