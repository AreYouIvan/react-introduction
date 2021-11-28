import React from "react";
import "./App.css";

// Components
import { TodoCounter } from "../components/TodoCounter";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";
import { TodoSearch } from "../components/TodoSearch";
import { TodoContext } from "../components/TodoContext";
import { TodoForm } from "../components/TodoForm";
import { Modal } from "../Modal";
import { EmptyTodos } from "../components/EmptyTodos";
import { TodosLoading } from "../components/TodosLoading";
import { TodosError } from "../components/TodosError";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <>
      <section className="App-body">
        <h2 className="App-title">Your tasks</h2>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {error && <TodosError/>}
          {loading && <TodosLoading/>}
          {!loading && !searchedTodos.length && <EmptyTodos/>}
          {searchedTodos.map((e) => (
            <TodoItem
              text={e.text}
              key={e.text}
              completed={e.completed}
              onComplete={() => {
                completeTodo(e.text);
              }}
              onDelete={() => {
                deleteTodo(e.text);
              }}
            />
          ))}
        </TodoList>

        {!!openModal && (
          <Modal className="modal-background">
            <TodoForm />
          </Modal>
        )}
        <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
      </section>
    </>
  );
}

export { AppUI };
