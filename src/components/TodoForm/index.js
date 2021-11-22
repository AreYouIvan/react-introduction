import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css"

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
    <form
      className="containers box-props"
      onSubmit={onSubmit}
      onKeyPress={onKeyUp}
    >
      <label>Add your Todo</label>
      <textarea
        placeholder="Make the dinner"
        name=""
        id=""
        cols="30"
        rows="1"
        onChange={onChange}
        value={newTodoValue}
        className="input-custom box-props"
      ></textarea>
      <div>
        <button className="buttons-props" type="button" onClick={onCancel}>
          Cancel
        </button>
        <button className="buttons-props" type="submit" onClick={onSubmit}>
          Add
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
