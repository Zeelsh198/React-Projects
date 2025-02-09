import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import MainForm from '../components/MainForm';
import Todos from '../components/Todos';
import "../App.css";
import { ModeContext } from '../context/mode-context';

export const HomePage = () => {

  const { mode } = useContext(ModeContext)

    const [allData, setAllData] = useState(
        JSON.parse(localStorage.getItem("todos")) || []
      );
      const [editData, setEditData] = useState();
      const [isEdit, setIsEdit] = useState(false);
    
      const getFormData = (data) => {
        // console.log({data})
        setAllData([...allData, data]);
      };
      console.log(allData);
    
      useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(allData));
      }, [allData]);
    
      const deleteHandler = (id) => {
        const updatedArray = allData.filter((obj) => obj.id !== id);
        setAllData(updatedArray);
      };
    
      const doneHandler = (id) => {
        const updatedArray = allData.map((todo) =>
          todo.id === id ? { ...todo, done: !todo.done } : todo
        );
        setAllData(updatedArray);
      };
    
      const editHandler = (id) => {
        setIsEdit(true);
        const editArray = allData.filter((obj) => obj.id === id);
        setEditData(editArray);
        // console.log(editArray);
      };
  return (
    <>
   

    <div className={`form-cards ${mode === "dark" ? "navbar-dark" : "navbar-light"}`}>
      <MainForm
        getFormData={getFormData}
        isEdit={isEdit}
        editData={editData}
        allData={allData}
        setIsEdit={setIsEdit}
      />

      <div className="cardss">
        {allData.length == 0 ? (
          <h4 className="NoNotes">No Task Added</h4>
        ) : (
          allData.map((arg) => {
            return (
              <Todos
                id={arg.id}
                todo={arg.todo}
                key={arg.id}
                done={arg.done || false}
                deleteHandler={deleteHandler}
                doneHandler={doneHandler}
                editHandler={editHandler}
              />
            );
          })
        )}{" "}
      </div>
    </div>
  </>
  )
}
