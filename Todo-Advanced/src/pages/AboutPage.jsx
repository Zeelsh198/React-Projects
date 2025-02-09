import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import "./AboutPage.css";
import { ModeContext } from "../context/mode-context";

export const AboutPage = () => {
  const { mode} = useContext(ModeContext);

  return (
    <div className={`${mode === "dark" ? "About-dark" : "About-light"}`}>
      <div className="about-container">
        <h1 className="AboutTodo">About Todo</h1>
        <div className="yellowline"></div>
      </div>
      <div className="text-container">
        <p>
          A to-do list is a list of items that <span className="redtext">need to be completed</span>. The items
          on the list can range from simple activities like replying to an
          email, to more complex tasks like creating project briefs.
        </p>
        <p>
          The items on a to-do list are usually <span className="redtext">action-oriented</span>, such as “Schedule a meet with the R&D team” or “Call back customer X.” Some lists include more abstract goals, such as “improve your time management skills” or “learn how to use a new software program.”
        </p>
      </div>
    </div>
  );
};
