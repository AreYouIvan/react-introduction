import React from "react";
import "./styleComponents/TodoCounter.css";

function TodoCounter({ total, completed }) {
  return (
    <h2 className="TodoCounter">
      Completed {completed} to {total}
    </h2>
  );
}

// Forced export
export { TodoCounter };
