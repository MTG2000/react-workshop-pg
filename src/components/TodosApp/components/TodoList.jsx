import React, { useContext } from "react";
import TodoCard from "./TodoCard";
import { TodosContext } from "./TodosContext";

export default function TodoList() {
  const { todos, handleRemove, handleToggle } = useContext(TodosContext);
  return (
    <div className="todos-list">
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          todo={todo}
          handleRemove={handleRemove}
          handleToggle={handleToggle}
        />
      ))}
    </div>
  );
}
