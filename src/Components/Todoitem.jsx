import PropTypes from "prop-types";
const Todoitem = ({ todo, onDelete }) => {
  const { name, date } = todo;
  return (
    <div className="todoContainer">
      <div className="container shadow todo-width ">
        <div className="row row d-flex justify-content-start align-items-center">
          <div className="col-sm-4 my-2  p-2">{name} </div>
          <div className="ccol-sm-4 my-2  p-2">{date}</div>
          <div className="col-sm-4 my-2 p-2">
            <button
              type="button"
              className="btn shadow text-danger fw-semibold"
              onClick={onDelete}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Todoitem.propTypes = {
  todo: PropTypes.object,
  onDelete: PropTypes.func,
};

export default Todoitem;
