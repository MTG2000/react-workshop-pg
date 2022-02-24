import React from "react";

export default function TodoCard({ todo, handleToggleTodo }) {
  return (
    <div className={`todo-card ${todo.isCompleted ? "completed" : ""}`}>
      <p onClick={() => handleToggleTodo(todo.id)}>{todo.text}</p>

      <button className="remove">Remove</button>
    </div>
  );
}
