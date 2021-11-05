import React from "react";
import "./App.css";
// Components
import { TodoCounter } from "../components/TodoCounter";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";
import { TodoSearch } from "../components/TodoSearch";

function AppUI({
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
