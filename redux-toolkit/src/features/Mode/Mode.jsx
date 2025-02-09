// mode.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { light , dark } from "./modeSlice";

const Mode = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode.value); // Get the current mode from the Redux store

  const toggleMode = () => {
    if (mode === "light") {
      dispatch(dark()); // Dispatch dark mode
    } else {
      dispatch(light()); // Dispatch light mode
    }
  };

  return (
    <div>
      <button onClick={toggleMode}>
        Switch to {mode === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default Mode;
