// App.jsx
import React, { useEffect } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import Mode from "./features/Mode/mode";
import { Counter } from "./features/counter/Counter";

function App() {
  const mode = useSelector((state) => state.mode.value); // Get mode from Redux

  useEffect(() => {
    // Apply the class to the body element
    if (mode === "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [mode]); 

  return (
    <div className="App">
      <Counter/>
      <todoList/>
      <h1>Redux Mode Toggle</h1>
      <Mode />
    </div>
  );
}

export default App;
