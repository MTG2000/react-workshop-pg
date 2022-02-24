import React, { useState } from "react";
import TodoCard from "./TodoCard";

export default function TodoList({ todos, handleToggleTodo }) {
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
