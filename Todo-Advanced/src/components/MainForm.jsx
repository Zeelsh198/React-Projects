import React, { useContext, useEffect } from "react";
import { MdDoneAll } from "react-icons/md";
import "./MainForm.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
  import { ModeContext } from "../context/mode-context";

const MainForm = (props) => {
  const {mode} = useContext(ModeContext)
  const [todo, setTodo] = useState("");
  // console.log(props.editData[0].todo)

  useEffect(() => {
    // console.log("useeffect running...");
    if (props.isEdit) {
      setTodo(props.editData[0].todo);
    }
  }, [props.isEdit]);

  const id = uuidv4();

  //get edit data
  //set into todo state if isEdit is true

  // console.log(props.editData);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo == "") {
      return;
    }

    let data = { todo, id };
    props.getFormData(data);

    // console.log({ todo,id });

    e.target.reset();
    setTodo("");
  };

  console.log(props.allData);

  const handleEditData = (e) => {
    e.preventDefault();
    
    let index = props.allData.findIndex((item) => {
      return item.id === props.editData[0].id;
      
    });
    
    props.allData[index].todo = todo;
    props.setIsEdit(false);
    setTodo("");
    // console.log(props.allData);


    // console.log(index);
    // console.log(props.allData[index].todo = todo) ;

    // console.log(props.allData);
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setTodo(event.target.value);
  };

  return (
    <form onSubmit={props.isEdit ? handleEditData : handleSubmit} className={mode === "dark" ? "MainForm-dark" : "MainForm-light"}>
      <div className="main-container">
        <div className="title-mytodo">
          My Todos
          <span>
            <MdDoneAll size={40} color="yellow" />
          </span>
        </div>

        <div className="inp-btn">
          <input
            type="text"
            placeholder="Enter your task here...."
            className="enter-work"
            onChange={handleOnChange}
            value={todo}
          />
          <button className="btn btn-warning">
            {props.isEdit ? "Edit" : "Add"}
          </button>
        </div>
        <div className="all-todos"></div>
      </div>
    </form>
  );
};

export default MainForm;

// const arr = [1,2,3,4,6]
// arr[4] = 5
