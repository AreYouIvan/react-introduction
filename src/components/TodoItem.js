import React from "react";
import "./styleComponents/TodoItem.css";

function TodoItem(props) {
  const onComplete = () => {
    alert("You have completed a task!");
  };
  // const onDelete = () => {
  //   alert("You have deleted this task!");
  // };

  return (
    <div className="TodoItem-container">
      <li className="TodoItem-task">
        <span
          onClick={onComplete}
          className={`icon-check ${props.completed && "icon-check--active"}`}
        ></span>
        <p className={`hola ${props.completed && "TodoItem-completed"}`}>
          {props.text}
        </p>
      </li>
    </div>
  );
}

export { TodoItem };
