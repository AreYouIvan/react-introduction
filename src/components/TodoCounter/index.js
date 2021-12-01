import React from "react";
import "./TodoCounter.css";

function TodoCounter({ totalTodos, completedTodos, loading }) {
  return (
    <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}
     >
      Completed {completedTodos} to {totalTodos}
    </h2>
  );
}

// Forced export
export { TodoCounter };
