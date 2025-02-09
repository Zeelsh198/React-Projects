import React from "react";
import "./UserDetails.css";
import { FaUser } from "react-icons/fa";

export const UserDetails = ({ userData, deleteHandler, editHandler }) => {
  return (
    <form className="user-details-form">
      <h3 id="ud">User Details</h3>
      <div className="table-main">
        <table className="ud-table">
          <thead>
            <tr>
              <th>Profile</th>
              <th>Name</th>
              <th>Birth Date</th>
              <th>Address</th>
              <th>Birth Place</th>
              <th>Mobile Number</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {userData && userData.length > 0 ? (
              userData.map((user) => (
                <tr key={user.id} className="tr-2">
                  <td className="user-pic">
                    {user.pp ? (
                      <img
                        src={user.pp}
                        alt="Profile"
                        style={{ width: 50, height: 50 }}
                      />
                    ) : (
                      <FaUser size={25} />
                    )}
                  </td>
                  <td>{`${user.fn} ${user.ln}`}</td>
                  <td>{user.bd}</td>
                  <td>{`${user.address1}, ${user.address2}`}</td>
                  <td>{user.bp}</td>
                  <td>{user.pn}</td>
                  <td className="edit-delete">
                  <button
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.preventDefault();  // Prevent page refresh
                        editHandler(user.id); // Edit action
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td className="edit-delete">
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteHandler(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" style={{ textAlign: "center" }}>
                  No user data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </form>
  );
};
