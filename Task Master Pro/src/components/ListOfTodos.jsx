import React, { useContext } from "react";
import "./ListOfTodos.css";
import { ModeContext } from "../context/mode-context";

export const ListOfTodos = ({ todo }) => {
  const { mode } = useContext(ModeContext);

  return (
    <div className={`apiList ${mode === "dark" ? "apilist-dark" : "apilist-light"}`}>
     
      <div className="todotitle">{todo.title}</div>

    
      <button className={`btn ${todo.completed ? "btn-success" : "btn-danger"}`}>
        {todo.completed ? "Completed" : "Pending"}
      </button>
    </div>
  );
};
