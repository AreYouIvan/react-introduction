import React from "react";

import "./styleComponents/TodoSearch.css";

function TodoSearch() {
  return (
    <div className="TodoSearch-content">
      <input className="TodoSearch-input" type="text" placeholder="Search.." />
      <span className="TodoSearch-input-icon"></span>
    </div>
  );
}

export { TodoSearch };
