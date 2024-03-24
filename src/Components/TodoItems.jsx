import PropTypes from "prop-types";
import Todoitem from "./Todoitem";
import "../App.css";
const TodoItems = ({ todos, onDeleteTodo }) => {
  return (
    <>
      {todos.length > 0 ? (
        todos.map((todo, index) => {
          return (
            <Todoitem
              todo={todo}
              key={index}
              onDelete={() => onDeleteTodo(index)}
            />
          );
        })
      ) : (
        <h3 className="text-center text"> Zero To_do</h3>
      )}
    </>
  );
};

TodoItems.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      date: PropTypes.string,
    })
  ).isRequired,
  onDeleteTodo: PropTypes.func,
};

export default TodoItems;
