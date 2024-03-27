import AddTodo from "./Components/AddTodo";
import TodoName from "./Components/TodoName";
import TodoItems from "./Components/TodoItems";
import "./App.css";
import { useState, useRef } from "react";

function App() {
  const todoNameRef = useRef();
  const todoDateRef = useRef();
  const [todos, setTodos] = useState([]);

  const handleTodo = (event) => {
    console.log(event);
    event.preventDefault();
    setTodos((currentValue) => [...currentValue, newTodo]);
    console.log(
      "Adding todo:",
      todoNameRef.current.value,
      "Due date:",
      todoDateRef.current.value
    );
    const newTodo = {
      name: todoNameRef.current.value,
      date: todoDateRef.current.value,
    };
    todoNameRef.current.value = "";
    todoDateRef.current.value = "";
  };

  const deleteTodo = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };

  return (
    <>
      <TodoName />
      <AddTodo
        handleTodo={handleTodo}
        todoNameRef={todoNameRef}
        todoDateRef={todoDateRef}
      />
      <TodoItems todos={todos} onDeleteTodo={deleteTodo} />
    </>
  );
}

export default App;
