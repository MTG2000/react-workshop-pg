import React, { useContext, useState } from "react";
import { TodosContext } from "./TodosContext";

export default function AddTodo() {
  const [input, setInput] = useState("");
  const { handleAddTodo } = useContext(TodosContext);

  const handleInputChange = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length > 0) {
      // Add the todo to the todos list
      handleAddTodo(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo">
      <input
        type="text"
        placeholder="New Todo"
        value={input}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
}
