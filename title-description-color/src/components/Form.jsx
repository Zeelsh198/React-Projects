/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Form.css";
import { v4 as uuidv4 } from "uuid";

const Form = (props) => {
  const [description, setdescription] = useState("");
  const [title, settitle] = useState("");
  const [color, setcolor] = useState("#28c8ad");
  const id = uuidv4();

  const handleSubmit = (e) => {
    e.preventDefault();
    // let newtitle = title;
    // // settitle(newtitle);
    // console.log("Note Title:" +title);

    if (title === "" || description === "") {
      return;
    }

    let data = { title, description, color, id };
    props.getFormData(data);

    console.log({ title, description, color, id });
    e.target.reset();
    setdescription("");
    settitle("");
    setcolor("");
  };

  const handleColor = (e) => {
    setcolor(e.target.value);
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    settitle(event.target.value);
  };

  const handleChange = (event) => {
    // console.log("On change");
    setdescription(event.target.value);
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="form-container space">
        <h1>Create Notes</h1>

        <div className="first space">
          <label htmlFor="Note Title">Note Title</label>
          <input
            type="text"
            placeholder="Enter Title..."
            onChange={handleOnChange}
            id="name"
            value={title}
            className="note-title space"
            name="title "
          />
        </div>

        <div className="discription space">
          <label htmlFor="discription">Note Discription</label>
          <textarea
            id="description"
            placeholder="Enter Title..."
            rows="10"
            onChange={handleChange}
            className="note-discription space"
            name="desc"
          ></textarea>
        </div>

        <div className="color space">
          <label htmlFor="Notes color">Notes color</label>
          <input
            type="color"
            name="color"
            onChange={handleColor}
            value={color}
          />
        </div>

        <button className="submit-button">Submit</button>

        <h2 className="notes">Notes</h2>
      </div>
    </form>
  );
};

export default Form;
