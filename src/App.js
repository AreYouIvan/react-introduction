import React from "react";
import "./App.css";

// Components
import { TodoCounter } from "./components/TodoCounter";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";

const todos = [
  { text: "Ir al super", completed: true },
  { text: "Llorar con la llorona", completed: true },
  { text: "Hacer ejercicio", completed: false },
  { text: "Leer mi libro de Maquiavelo", completed: false },
];

function App() {
  return (
    <>
      <section className="App-body">
        <h2 className="App-title">Your tasks</h2>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {todos.map((e) => (
            <TodoItem 
            text={e.text}
            key={e.text}
            completed={e.completed}
             />
          ))}
        </TodoList>
        {<CreateTodoButton />}
      </section>
    </>
  );
}

export default App;
