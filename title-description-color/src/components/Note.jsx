/* eslint-disable react/prop-types */
import "./Note.css";

function Note(props) {
  return (
    <div
      className="card"
      style={{ width: "18rem", backgroundColor: `${props.color}` }}
    >
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
       
        <h6 className="card-text">{props.description}</h6>
        <h6 className="card-text">{new Date().toLocaleDateString()}</h6>
        <button
          href="#"
          className="btn btn-danger"
          onClick={() => props.deleteHandler(props.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Note;
