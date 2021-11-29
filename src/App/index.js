import React from "react";
import "./App.css";

// const defaultTodos = [
  //   { text: "Ir al super", completed: true },
  //   { text: "Llorar con la llorona", completed: false },
  //   { text: "Hacer ejercicio", completed: false },
  //   { text: "Leer mi libro de Maquiavelo", completed: false },
  // ];
  
  import { useTodos } from "./useTodos";
// Components
import { TodoHeader } from "../components/TodoHeader";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";
import { TodoForm } from "../components/TodoForm";
import { Modal } from "../Modal";
import { EmptyTodos } from "../components/EmptyTodos";
import { TodosLoading } from "../components/TodosLoading";
import { TodosError } from "../components/TodosError";
import { TodoSearch } from "../components/TodoSearch";
import { TodoCounter } from "../components/TodoCounter";


function App() {

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    searchValue,
    setSearchValue,
    totalTodos,
    completedTodos,
    addTodo,
  } = useTodos();
  return (
    <>
      <section className="App-body">
        <h2 className="App-title">Your tasks</h2>
        <TodoHeader>
          <TodoCounter
            totalTodos={totalTodos}
            completedTodos={completedTodos}
          />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <TodoList>
            {error && <TodosError />}
            {loading && (
              <TodosLoading>
                <center>
                  <p>Loading...</p>
                </center>
              </TodosLoading>
            )}
            {!loading && !searchedTodos.length && <EmptyTodos />}
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
        </TodoHeader>

        {!!openModal && (
          <Modal className="modal-background">
            <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
          </Modal>
        )}
        <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal} />
      </section>
    </>
  );
}

export default App;
