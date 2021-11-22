import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onCancel = () => {
    setOpenModal(false);
  };
  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    onCancel();
  };
  const onKeyUp = (e) => {
    if (e.charCode === 13) {
      e.preventDefault();
      addTodo(newTodoValue);
      onCancel();
    }
  };

  return (
    <form onSubmit={onSubmit} onKeyPress={onKeyUp}>
      <label>,,,</label>
      <textarea
        placeholder="Make the dinner"
        name=""
        id=""
        cols="30"
        rows="1"
        onChange={onChange}
        value={newTodoValue}
      ></textarea>
      <div>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" onClick={onSubmit}>
          Add
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
