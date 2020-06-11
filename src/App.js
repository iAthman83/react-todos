import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="container mt-5">
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
