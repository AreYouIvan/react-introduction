import React from "react";
import "./App.css";
  
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
        <TodoHeader loading={loading}>
          <TodoCounter
            totalTodos={totalTodos}
            completedTodos={completedTodos}
          />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            // loading={loading}
          />
        </TodoHeader>
          <TodoList
            // loading={loading}
            error={error}
            searchedTodos={searchedTodos}
            searchText={searchValue}
            totalTodos={totalTodos}
            onError={() => <TodosError />}
            onLoading={() => <TodosLoading />}
            onEmpty={() => <EmptyTodos />}
            onEmptySearchResults={(searchText) => (
              <p>
                <center>There is no results to {searchText}</center>
              </p>
            )}
            render={(todo) => (
              <TodoItem
                text={todo.text}
                key={todo.text}
                completed={todo.completed}
                onComplete={() => {
                  completeTodo(todo.text);
                }}
                onDelete={() => {
                  deleteTodo(todo.text);
                }}
              />
            )}
          >
            {/* {(todo) => (
            <TodoItem
              text={todo.text}
              key={todo.text}
              completed={todo.completed}
              onComplete={() => { completeTodo(todo.text); } }
              onDelete={() => {deleteTodo(todo.text);} } />
            )} */}
          </TodoList>

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
