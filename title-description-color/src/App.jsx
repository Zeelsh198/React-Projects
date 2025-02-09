import Navbar from "./components/Navbar";
import "./App.css";
import Form from "./components/Form";
import Note from "./components/Note";
import { useState } from "react";

function App() {
  const [allData, setAllData] = useState([]);

  const getFormData = (data) => {
    // console.log({data})
    setAllData([...allData, data]);
  };
  // console.log(allData);

  const deleteHandler = (id) => {
    const updatedArray = allData.filter((obj) => obj.id !== id);
    setAllData(updatedArray);
  };

  return (
    <>
      <Navbar />
      <Form getFormData={getFormData} />
      <div className="cardss">
        {allData.length == 0 ? (
          <h4>No Notes Created</h4>
        ) : (
          allData.map((arg) => {
            return (
              <Note
              
                id={arg.id}
                key={arg.id}
                title={arg.title}
                description={arg.description}
                color={arg.color}
                deleteHandler={deleteHandler}
              />
            );
          })
        )}{" "}
      </div>
    </>
  );
}

export default App;
