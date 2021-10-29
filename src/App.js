import React from "react";
import "./App.css";

const todos = [
  { text: "Ir al super", completed: false },
  { text: "Llorar con la llorona", completed: false },
  { text: "Hacer ejercicio", completed: false },
  { text: "Leer mi libro de Maquiavelo", completed: false },
];

function App() {
  return (
    <>
     {/* { <TodoCounter />} */}
      <h2>Hola como andamos?</h2>
      {/* <TodoSearch /> */}
      <input placeholder="Onions" />
      {/* {<TodoList>
        {todos.map((e) => (
          <TodoItem />
        ))}} */}
      {/* {</TodoList>} */}
      {/* {<CreateTodoButton />} */}
      <button>+</button>
    </>
  );
}

export default App;
