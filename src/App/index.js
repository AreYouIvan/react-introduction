import React from "react";
import { AppUI } from "./AppUI";

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
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
