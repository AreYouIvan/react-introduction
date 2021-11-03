import React from "react";

import "./styleComponents/TodoSearch.css";

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState();


  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return [
    <div className="TodoSearch-content">
      <input
        onChange={onSearchValueChange}
        className="TodoSearch-input"
        type="text"
        placeholder="Search.."
        value={searchValue}
      />
      <span className="TodoSearch-input-icon"></span>
    </div>,
    <p>{searchValue}</p>,
  ];

}

export { TodoSearch };
