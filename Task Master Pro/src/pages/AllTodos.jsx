import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { ListOfTodos } from "../components/ListOfTodos";
import "./AllTodos.css";
import { ModeContext } from "../context/mode-context";
import { Loader } from "./Loader";

export const AllTodos = () => {
  const { mode } = useContext(ModeContext);
  const [todos, setTodos] = useState([]); // State to hold todos data
  const [loading, setLoading] = useState(false);

  const fetchApiData = async () => {
    setLoading(true);

    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    setTodos(data); // Set the fetched data in state

    setLoading(false);
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <div className="aboutt-container">
      <div
        className={`${
          mode === "dark" ? "about-container-dark" : "about-container-light"
        }`}
      >
        <h1 className="AAboutTodo">List of Todos</h1>
        <div className="yellowline"></div>
      </div>
      <div className="sapretthem">
        {loading ? (
          <div className="loader-main">
            <Loader />
          </div>
        ) : (
          ""
        )}
        {todos.map((todo) => (
          <ListOfTodos key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};
