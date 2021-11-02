import React from "react";
import "./styleComponents/TodoList.css";

function TodoList(props) {
  return (
    <section>
      <ul className="TodoList-ul">{props.children}</ul>
    </section>
  );
}

export { TodoList };
