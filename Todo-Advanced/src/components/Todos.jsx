import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { MdNoteAlt } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { IoArrowForward } from "react-icons/io5";
import { ModeContext } from "../context/mode-context";

import "./Todos.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Todos(props) {
  const { mode } = useContext(ModeContext);
  const navigate = useNavigate();
  const handleDetailPage = (id) => {
    // console.log(id)
    navigate(`/todo/${id}`);
  };

  return (
    <div
      className={`card info ${mode === "dark" ? "todos-dark" : "todos-light"}`}
    >
      <p className={props.done ? "done" : ""}>{props.todo}</p>
      <p>{new Date().toDateString()}</p>
      <div className="allbtns main-div">
        <button
          className=" btn btn-warning done child-div"
          onClick={() => props.doneHandler(props.id)}
        >
          <IoCheckmarkDoneCircleOutline />
        </button>
        <button
          className="btn btn-primary edit child-div"
          onClick={() => props.editHandler(props.id)}
        >
          <MdNoteAlt />
        </button>
        <button
          className="btn btn-danger delete child-div"
          onClick={() => props.deleteHandler(props.id)}
        >
          <MdDeleteForever />
        </button>
        <button
          className="btn btn-dark forward child-div"
          onClick={() => handleDetailPage(props.id)}
        >
          <IoArrowForward />
        </button>
      </div>
    </div>
  );
}

export default Todos;
