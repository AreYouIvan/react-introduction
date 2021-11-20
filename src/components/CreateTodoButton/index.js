import React from "react";
import { TodoContext } from "../TodoContext";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  /*
There are two ways to make a toggle 
functions for active the modal.
*/
  // This is the first one.
  
  // React.useContext(TodoContext);

  const onClickButton = () => {
      // props.setOpenModal(!props.openModal);
      if (!props.openModal) {
        props.setOpenModal(true);
      } else {
        props.setOpenModal(false);
      }
    };

    // This is the second.

  // };

  return (
    <div className="CreateTodoButton-container">
      <button onClick={onClickButton} className="CreateTodoButton-button">
        +
      </button>
    </div>
  );
}

export { CreateTodoButton };
