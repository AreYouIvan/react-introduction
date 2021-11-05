import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton() {
  const oncClickButton = (msg) => {
    alert(msg);
  };

  return (
    <div className="butCreateTodoButton-container">
      <button
        onClick={() => oncClickButton("This will be a modal")}
        className="CreateTodoButton-button"
      >
        +
      </button>
    </div>
  );
}

export { CreateTodoButton };
