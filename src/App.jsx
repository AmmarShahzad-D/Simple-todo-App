import AddTodo from "./Components/AddTodo";
import TodoName from "./Components/TodoName";
import TodoItems from "./Components/TodoItems";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleTodoChange = (event) => {
    console.log(event.target.value);
    setTodoInput(event.target.value);
  };

  const handleDateChange = (event) => {
    console.log(event.target.value);
    setDateInput(event.target.value);
  };

  const handleTodo = () => {
    const newTodo = { name: todoInput, date: dateInput };
    setTodos([...todos, newTodo]);
    console.log("Adding todo:", todoInput, "Due date:", dateInput);
    handleTodoChange({ target: { value: "" } });
    handleDateChange({ target: { value: "" } });
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
        todoInput={todoInput}
        todoChange={handleTodoChange}
        dateInput={dateInput}
        dateChange={handleDateChange}
        handleTodo={handleTodo}
      />
      <TodoItems todos={todos} onDeleteTodo={deleteTodo} />
    </>
  );
}

export default App;
