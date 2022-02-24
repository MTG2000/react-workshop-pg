import React, { useState } from "react";

export default function TodoFilters({ filter, handleChangeFilter }) {
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
