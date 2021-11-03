import React from "react";

import "./styleComponents/TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="TodoSearch-content">
      <input
        onChange={onSearchValueChange}
        className="TodoSearch-input"
        placeholder="Search.."
        value={searchValue}
      />
      <span className="TodoSearch-input-icon"></span>
    </div>
  );
}

export { TodoSearch };
