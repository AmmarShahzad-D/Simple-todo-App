import AddTodo from "./Components/AddTodo";
import TodoName from "./Components/TodoName";
import TodoItems from "./Components/TodoItems";
import { todoItemContext } from "./store/todoItemStore";
import "./App.css";
import { useState, useRef } from "react";

function App() {
  const todoNameRef = useRef();
  const todoDateRef = useRef();
  const [todos, setTodos] = useState([]);
  // const [state , displatch ] = useReducer([ reducer  , initialState ]);

  const handleTodo = (event) => {
    console.log(event);
    event.preventDefault();
    const newTodo = {
      name: todoNameRef.current.value,
      date: todoDateRef.current.value,
    };
    setTodos((currentValue) => [...currentValue, newTodo]);
    todoNameRef.current.value = "";
    todoDateRef.current.value = "";
  };

  const deleteTodo = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };

  return (
    <todoItemContext.Provider
      value={{
        todos,
        handleTodo,
        todoNameRef,
        todoDateRef,
        deleteTodo,
      }}
    >
      <TodoName />
      <AddTodo />
      <TodoItems />
    </todoItemContext.Provider>
  );
}

export default App;
