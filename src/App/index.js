import React from "react";
import "./App.css";

// Components
import { TodoCounter } from "../components/TodoCounter";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";
import { TodoSearch } from "../components/TodoSearch";

const defaultTodos = [
  { text: "Ir al super", completed: true },
  { text: "Llorar con la llorona", completed: false },
  { text: "Hacer ejercicio", completed: false },
  { text: "Leer mi libro de Maquiavelo", completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((e) => {
      const todoText = e.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  // Completing and deleting TODOs
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((e) => e.text === text);

    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((e) => e.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  // This is another way to looking for the index of the todos array.
  // todos[todoIndex] = {
  //   text: todos[todoIndex].text,
  //   completed: true,
  // };

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

export default App;
