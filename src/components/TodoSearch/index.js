import React from "react";
import { TodoContext } from "../TodoContext";

import "./TodoSearch.css";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

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
