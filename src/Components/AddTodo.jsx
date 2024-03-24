import "../App.css";
import PropTypes from "prop-types";
const AddTodo = ({
  todoInput,
  todoChange,
  dateInput,
  dateChange,
  handleTodo,
}) => {
  return (
    <div>
      <div className="container my-5  todo-inputContianer ">
        <div className="row d-flex justify-content-start align-items-center">
          <div className="col-12 col-sm-4 my-3  ">
            <input
              type="text"
              value={todoInput}
              onChange={todoChange}
              placeholder="Task"
              className="rounded  border-0 shadow-lg  py-2 "
            />
          </div>
          <div className="col-12 col-sm-4 my-3 ">
            <input
              type="date"
              lang="en-PK"
              value={dateInput}
              onChange={dateChange}
              className="rounded  border-0 shadow-lg  py-2  font "
            />
          </div>
          <div className="col-12 col-sm-4  my-3  ">
            <button
              type="button"
              className="btn btn-dark  border-0 shadow px-4 font font-weight-bold "
              onClick={handleTodo}
            >
              Add New Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

AddTodo.propTypes = {
  todoInput: PropTypes.string,
  todoChange: PropTypes.func,
  dateInput: PropTypes.string,
  dateChange: PropTypes.func,
  handleTodo: PropTypes.func,
};

export default AddTodo;
