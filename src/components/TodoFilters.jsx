import React, { useContext, useState } from "react";
import { TodosContext } from "./TodosContext";

export default function TodoFilters() {
  const { filter, handleChangeFilter } = useContext(TodosContext);

  return (
    <div className="filters">
      <button
        className={filter === 0 ? "active" : ""}
        onClick={() => handleChangeFilter(0)}
      >
        All
      </button>
      <button
        className={filter === 1 ? "active" : ""}
        onClick={() => handleChangeFilter(1)}
      >
        Completed
      </button>
      <button
        className={filter === 2 ? "active" : ""}
        onClick={() => handleChangeFilter(2)}
      >
        Pending
      </button>
    </div>
  );
}
