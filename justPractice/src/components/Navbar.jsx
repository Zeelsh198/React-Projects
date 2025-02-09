import React from "react";
import "./Navbar.css"; // Make sure you have this file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="/homePage">Home</a>
        </li>
        <li className="navbar-item">
          <a href="/about">About</a>
        </li>

        <li className="navbar-item">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
