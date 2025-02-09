import React from "react";
import "./Register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    username: "",
    email: "",
    pass: "",
  });

  const [formErrors, setFormErrors] = useState({
    username: "",
    email: "",
    pass: "",
  });

  const registersubmit = (e) => {
    e.preventDefault();
    // console.log(register);
    const errors = {
      username: validateFields("username", register.username),
      email: validateFields("email", register.email),
      pass: validateFields("pass", register.pass),
    };

    setFormErrors(errors);
    // localStorage.setItem("RegisterData", JSON.stringify(register));

    const hasErrors = Object.values(errors).some((error) => error);

    if (hasErrors) return;

    const userData = {
      email: register.email,
      password: register.pass,
    };

    localStorage.setItem("RegisterData", JSON.stringify(register));
    localStorage.setItem("LoginData", JSON.stringify(userData));

    console.log(register);
    navigate("/");
  };

  const handleOnChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });

    const errorMsg = validateFields(e.target.name, e.target.value);
    setFormErrors({ ...formErrors, [e.target.name]: errorMsg });
    // console.log({ errorMsg });
    // setFormErrors("");
  };

  //handle on blur
  const handleOnBlur = (e) => {
    const errorMsg = validateFields(e.target.name, e.target.value);
    console.log(errorMsg);

    setFormErrors({ ...formErrors, [e.target.name]: errorMsg });
  };

  console.log({ formErrors });

  const validateFields = (name, value) => {
    let error = "";

    switch (name) {
      case "username":
        if (!value.trim()) {
          error = "Username is required";
        }
        break;

      case "email":
        if (!value) {
          error = "Email is required";
        }
        break;

      case "pass":
        if (!value) {
          error = "Password is required";
        } else if (value.length < 6) {
          error = "Password must be at least 6 characters";
        }
        break;

      default:
        break;
    }

    return error;
  };

  return (
    <>
      <div className="dark">
        <form onSubmit={registersubmit} className="register-form-main">
          <div className="register-letscreate">
            <h2 className="">Register</h2>
            <h6 className="letscreate">Lets's create new account</h6>
          </div>
          <div className="name-email-password">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              className="register-username"
              placeholder="Zeelsh..."
              onChange={handleOnChange}
              onBlur={handleOnBlur}
              name="username"
            />
            {formErrors.username && (
            <span className="error">{formErrors.username}</span>
          )}

            <label htmlFor="Email Address:">Email Address:</label>
            <input
              type="text"
              className="register-email"
              placeholder="zeelsh820@gmail.com"
              onChange={handleOnChange}
              onBlur={handleOnBlur}
              name="email"
            />
            {formErrors.email && (
            <span className="error">{formErrors.email}</span>
          )}

            <label htmlFor="r-password">Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="register-password"
              onChange={handleOnChange}
              onBlur={handleOnBlur}
              name="pass"
            />
            {formErrors.pass && <span className="error">{formErrors.pass}</span>}
          </div>

          <button type="register" className="btn btn-danger register">
            Register
          </button>
        </form>
      </div>
    </>
  );
}
