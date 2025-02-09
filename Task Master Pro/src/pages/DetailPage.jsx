import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./DetailPage.css";

export const DetailPage = () => {
  const { todoId } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];

    const selectedTodo = todos.find((todo) => todo.id === todoId);

    // console.log(selectedTodo);

    if (selectedTodo) {
      setDetails(selectedTodo);
    }
  }, [todoId]);

  return (
    <div className="detail-container">
      <h2>Todo Details</h2>

      {details && (
        <>
          <p><strong>Task: </strong>{details.todo}</p>

          <p><strong>Status: </strong>{details.done ? "Completed" : "Pending"}</p>
          <p>
            <strong>Date:</strong> {new Date().toDateString()}
          </p>
        </>
      )}
    </div>
  );
};
