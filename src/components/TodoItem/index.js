import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <div className="TodoItem-container">
      <li className="TodoItem-task">
        <span
          onClick={props.onComplete}
          className={`icon-check ${props.completed && "icon-check--active"}`}
        ></span>
        <p className={`${props.completed && "TodoItem-completed"}`}>
          {props.text}
        </p>
      </li>
        <span
          onClick={props.onDelete}
          className="TodoItem-button--delete"
        />
    </div>
  );
}

export { TodoItem };
