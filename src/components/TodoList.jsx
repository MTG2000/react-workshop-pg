import React, { useContext, useState } from "react";
import TodoCard from "./TodoCard";
import { TodosContext } from "./TodosContext";

export default function TodoList() {
  const { todos, handleToggleTodo } = useContext(TodosContext);
  return (
    <div className="todos-list">
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          todo={todo}
          handleToggleTodo={handleToggleTodo}
        />
      ))}
    </div>
  );
}
