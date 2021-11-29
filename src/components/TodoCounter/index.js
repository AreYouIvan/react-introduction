import React from "react";
import "./TodoCounter.css";

function TodoCounter({ totalTodos, completedTodos }) {
  return (
    <h2 className="TodoCounter">
      Completed {completedTodos} to {totalTodos}
    </h2>
  );
}

// Forced export
export { TodoCounter };
