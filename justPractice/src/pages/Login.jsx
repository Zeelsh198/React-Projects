import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  // State to manage form input values
  const [details, setDetails] = useState({
    fullName: "",
    number: "",
    pass: "",
  });

  // State to manage success message
  const [done, setDone] = useState(false);
  const [succMsg, setSuccMsg] = useState("");

  // Handle input changes
  const handleOnChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
    const userDetails = { ...details };

    // Save user details to local storage
    localStorage.setItem("UserDetails", JSON.stringify(userDetails));

    // Set success message and reset form
    setDone(true);
    setSuccMsg("Login successfully!");

    // Reset form after a delay
    setTimeout(() => {
      setDetails({
        fullName: "",
        number: "",
        pass: "",
      });
      setDone(false);
      setSuccMsg("");
      navigate("/homePage")
    }, 2000);
  };

  return (
    <div className="login-main">
      <div className="picture-main"></div>
      <div className="info-main">
        <form onSubmit={handleSubmit}>
          <h2>Welcome! Please login</h2>

          <div className="input-fields">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={details.fullName}
              onChange={handleOnChange}
              className="fullname"
              placeholder="Zeelsh..."
              required
            />

            <label htmlFor="number">Number</label>
            <input
              type="tel"
              name="number"
              value={details.number}
              onChange={handleOnChange}
              className="number"
              placeholder="1234567890"
              required
            />

            <label htmlFor="pass">Password</label>
            <input
              type="text"
              name="pass"
              value={details.pass}
              onChange={handleOnChange}
              className="pass"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="btn ">
            Submit
          </button>
          {done && <p className="success-message">{succMsg}</p>}
        </form>
      </div>
    </div>
  );
};
