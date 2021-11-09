import React from "react";
import "./App.css";
// Components
import { TodoCounter } from "../components/TodoCounter";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";
import { TodoSearch } from "../components/TodoSearch";

function AppUI({
  loading,
  error,
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) {
  return (
    <>
      <section className="App-body">
        <h2 className="App-title">Your tasks</h2>
        <TodoCounter total={totalTodos} completed={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        <TodoList>
        {error && <p>Sorry, there's an error</p>}
        {loading && <p>We're loading, thanks for waiting</p>}
        {(!loading && !searchedTodos.length) && <p>Let's create your first todo</p>}
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
        {<CreateTodoButton />}
      </section>
    </>
  );
}

export { AppUI };
