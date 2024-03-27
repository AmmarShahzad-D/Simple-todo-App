import "../App.css";
import PropTypes from "prop-types";
const AddTodo = ({ handleTodo, todoNameRef, todoDateRef }) => {

  return (
    <div>
      <form action="" onSubmit={handleTodo}>
        <div className="container my-5  todo-inputContianer ">
          <div className="row d-flex justify-content-start align-items-center">
            <div className="col-12 col-sm-4 my-3  ">
              <input
                type="text"
                ref={todoNameRef}
                placeholder="Task"
                className="rounded  border-0 shadow-lg  py-2 "
              />
            </div>
            <div className="col-12 col-sm-4 my-3 ">
              <input
                type="date"
                ref={todoDateRef}
                lang="en-PK"
                className="rounded  border-0 shadow-lg  py-2  font "
              />
            </div>
            <div className="col-12 col-sm-4  my-3  ">
              <button
                type="submit"
                className="btn btn-dark  border-0 shadow px-4 font font-weight-bold ">
                Add New Task
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  todoInput: PropTypes.string,
  todoChange: PropTypes.func,
  dateInput: PropTypes.string,
  dateChange: PropTypes.func,
  handleTodo: PropTypes.func,
  todoNameRef: PropTypes.object,
  todoDateRef: PropTypes.object,
};

export default AddTodo;
