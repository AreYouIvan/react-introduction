import React from "react";
// import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// import "./TodosLoading.css"

function TodosLoading({ children }) {
  return (
    <div>
      <p>Loading Todos..</p>
    </div>
  );
}

export { TodosLoading };
