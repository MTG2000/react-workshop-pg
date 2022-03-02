import React from "react";

export default function TodoCard({ todo, handleRemove, handleToggle }) {
  return (
    <div className={`todo-card ${todo.isCompleted ? "completed" : ""}`}>
      <p
        onClick={() => {
          handleToggle(todo.id);
        }}
      >
        {todo.text}
      </p>

      <button onClick={() => handleRemove(todo.id)} className="remove">
        Remove
      </button>
    </div>
  );
}
