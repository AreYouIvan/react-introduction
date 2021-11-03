import React from "react";
import "./styleComponents/TodoItem.css";

function TodoItem(props) {
  return (
    <div className="TodoItem-container">
      <li className="TodoItem-task">
        <span
          className={`icon-check ${
            props.completed && "icon-check--active"
          }`}
        ></span>
        <p className={`hola ${props.completed && 'TodoItem-completed'}`} >{props.text}</p>
      </li>
    </div>
  );
}

export { TodoItem };
