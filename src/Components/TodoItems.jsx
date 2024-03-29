import Todoitem from "./Todoitem";
import "../App.css";
import { todoItemContext } from "../store/todoItemStore";
import { useContext } from "react";

const TodoItems = () => {
  const { todos, deleteTodo } = useContext(todoItemContext);
  return (
    <>
      {todos.length > 0 ? (
        todos.map((todo, index) => {
          return (
            <Todoitem
              todo={todo}
              key={index}
              onDelete={() => deleteTodo(index)}
            />
          );
        })
      ) : (
        <h3 className="text-center text"> Zero To_do</h3>
      )}
    </>
  );
};

export default TodoItems;
