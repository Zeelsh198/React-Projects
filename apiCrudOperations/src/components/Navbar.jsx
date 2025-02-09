import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LogOut } from "../Pages/LogOut";
import { createPortal } from "react-dom";
import { FaUser, FaUserShield } from "react-icons/fa"; // Import icons from React Icons
import "./Navbar.css";

export const Navbar = () => {
  const LocalData = JSON.parse(localStorage.getItem("LoginData")) || {}; 
  const userRole = LocalData.role || "User"; 
  const [logOutModel, setLogOutModel] = useState(false);

  const handleLogOut = () => {
    setLogOutModel(true);
  };

  return (
    <nav className="nav-container">
      <div className="home">
        <Link to="/home">Home</Link>
      </div>

      {userRole === "Admin" && (
        <div className="insert">
          <Link to="/insert">Insert</Link>
        </div>
      )}

      <div className="logout">
        <button className="btn btn-danger" onClick={handleLogOut}>
          Sign Out
        </button>
      </div>

      <div className="user-admin">
        {userRole === "Admin" ? (
          <>
            <FaUserShield className="role-icon" />
            <h3>Admin</h3>
          </>
        ) : (
          <>
            <FaUser className="role-icon" />
            <h3>User</h3>
          </>
        )}
      </div>

      {logOutModel &&
        createPortal(
          <LogOut setLogOutModel={setLogOutModel} />,
          document.getElementById("model")
        )}
    </nav>
  );
};
