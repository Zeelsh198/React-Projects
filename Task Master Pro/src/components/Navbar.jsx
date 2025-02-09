import React, { useContext, useState } from "react";
import { MdDoneAll } from "react-icons/md";
import { CiLight, CiDark } from "react-icons/ci"; // CiDark for dark mode icon
import "./Navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { LogOut } from "../pages/LogOut"; 
import { ModeContext } from "../context/mode-context";
import { createPortal } from "react-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { mode, toggleMode } = useContext(ModeContext); // Get mode and toggle function
  const [modalOpen, setModalOpen] = useState(false);

  const handleLogout = () => {
    setModalOpen(true); // Show the logout modal
  };

  return (
    <>
      <div className={`navbar ${mode === "dark" ? "navbar-dark" : "navbar-light"}`}>
        <div className="logo">
          <Link to="/">
            TODO
            <span>
              <MdDoneAll size={20} color={mode === "dark" ? "yellow" : "black"} />
            </span>
          </Link>
        </div>

        <div className="linkss">
          <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/">
            Home
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/about">
            About
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "active-link" : "link")} to="/AllTodos">
            All Todos
          </NavLink>
        </div>

        <div className="actions">
          <span className="theme-toggle-icon" onClick={toggleMode}>
            {mode === "dark" ? <CiLight size={30} /> : <CiDark size={30} />}
          </span>
          <button type="button" className="btn-red nav-logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {modalOpen && createPortal(<LogOut setModalOpen={setModalOpen} />,document.getElementById("model"))}
    </>
  );
};

export default Navbar;
  