import React from "react";
import "./Navbar.css";
import { GiLoveInjection } from "react-icons/gi";

function Navbar() {
  
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <GiLoveInjection size={30} /> Book Your Appointment
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
