import React from "react";
import "./styleComponents/TodoItem.css";

function TodoItem(props) {
  return (
    <div className="TodoItem-container">
      <li className="TodoItem-task">
        <span className="check"></span>
        <p>{props.text}</p>
      </li>
    </div>
  );
}

export { TodoItem };
