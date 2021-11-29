import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../components/TodoContext";

// const defaultTodos = [
//   { text: "Ir al super", completed: true },
//   { text: "Llorar con la llorona", completed: false },
//   { text: "Hacer ejercicio", completed: false },
//   { text: "Leer mi libro de Maquiavelo", completed: false },
// ];


function App() {
  return (
    <TodoProvider>
      <AppUI></AppUI>
    </TodoProvider>
  )
}

export default App;
