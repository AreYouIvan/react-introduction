import React from "react";

import "./styleComponents/TodoSearch.css";

function TodoSearch() {
  const onSearchValueChange = (event) => {
    console.log(event.target.value)
  }

  return (
    <div className="TodoSearch-content">
      <input
        onChange={onSearchValueChange}
        className="TodoSearch-input"
        type="text"
        placeholder="Search.."
      />
      <span className="TodoSearch-input-icon"></span>
    </div>
  );
}

export { TodoSearch };
