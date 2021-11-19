import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  const oncClickButton = () => {
    props.setOpenModal(true);
  };


  console.log(oncClickButton);

  return (
    <div className="CreateTodoButton-container">
      <button onClick={oncClickButton} className="CreateTodoButton-button">
        +
      </button>
    </div>
  );
}

export { CreateTodoButton };
