import React from "react";
// import { TodoContext } from "../TodoContext";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  /*
There are two ways to make a toggle 
functions for active the modal.
*/
  // This is the first one.

  // React.useContext(TodoContext);
  // const onClickButton = () => {
  // props.setOpenModal(!props.openModal);
  // };

  // const onClickButton = () => {
  //   if (!props.openModal) {
  //     props.setOpenModal(true);
  //   } else {
  //     props.setOpenModal(false);
  //   }
  // };

// 3rd:
  const onClickButton = () => {
    props.setOpenModal((prevState) => !prevState);
  };

  // This is the second.

  // };

  return (
      <button onClick={onClickButton} className="CreateTodoButton-button">
        +
      </button>
  );
}

export { CreateTodoButton };
