import React from "react";
import "./LogOut.css";
import { useNavigate } from "react-router-dom";

export const LogOut = ({ setModalOpen }) => {
  const navigate = useNavigate();

  const handleCancelLogout = () => {
    setModalOpen(false); // Close the modal
  };

  const handleLogout = () => {
   
    localStorage.removeItem("LoginData");
    navigate("/login"); // Redirect to login page
    setModalOpen(false); // Close the modal
  };

  return (
    <div className="logout-modal" >
      <div className="backdrop" onClick={handleCancelLogout}></div>
      <div className="logout-content">
        <h4>Are you sure you want to logout?</h4>
        <div className="twobtn">
          <button className="btn btn-danger cancel" onClick={handleCancelLogout}>
            Cancel
          </button>
          <button className="btn btn-warning yellow" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
