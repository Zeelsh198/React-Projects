import "./App.css";
import { RegistrationForm } from "./components/RegistrationForm";
import { UserDetails } from "./components/UserDetails";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState(() => {
    const storedUsers = localStorage.getItem("AllUserInformation");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  const [editUser, setEditUser] = useState(null); // State to store the user being edited

  const handleFormSubmit = (data) => {
    if (editUser) {
      // Update existing user
      const updatedUsers = userData.map((user) =>
        user.id === editUser.id ? data : user
      );
      setUserData(updatedUsers);
      localStorage.setItem("AllUserInformation", JSON.stringify(updatedUsers));
      setEditUser(null); // Reset after update
    } else {
      // Add new user
      const updatedUserData = [...userData, data];
      setUserData(updatedUserData);
      localStorage.setItem("AllUserInformation", JSON.stringify(updatedUserData));
    }
  };

  const handleEdit = (id) => {
    const userToEdit = userData.find((user) => user.id === id);
    setEditUser(userToEdit); // Set the user to be edited
  };

  const deleteHandler = (id) => {
    const updatedArray = userData.filter((obj) => obj.id !== id);
    setUserData(updatedArray);
    localStorage.setItem("AllUserInformation", JSON.stringify(updatedArray));
  };

  return (
    <div className="two-comps">
      <RegistrationForm onSubmit={handleFormSubmit} editUser={editUser} />
      <UserDetails
        userData={userData}
        deleteHandler={deleteHandler}
        editHandler={handleEdit}
      />
    </div>
  );
}

export default App;
