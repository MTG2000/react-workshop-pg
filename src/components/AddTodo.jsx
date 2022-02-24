import React, { useState } from "react";

export default function AddTodo({ handleAddTodo }) {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const handleAdd = (e) => {
    e.preventDefault();
    if (input.length > 0) {
      handleAddTodo(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleAdd} className="add-todo">
      <input
        type="text"
        placeholder="New Todo"
        value={input}
        onChange={handleInputChange}
      />
      <button onClick={handleAdd}>Add</button>
    </form>
  );
}
