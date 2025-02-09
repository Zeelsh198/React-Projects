import React, { useCallback, useContext } from "react";
import "./Register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModeContext } from "../context/mode-context";
import { CiLight, CiDark } from "react-icons/ci"; // CiDark for dark mode icon

export const Register = () => {
  const { mode, toggleMode } = useContext(ModeContext);
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    username: "",
    email: "",
    pass: "",
    cfmPass: "",
  });

  const [formErrors, setFormErrors] = useState({
    username: "",
    email: "",
    pass: "",
    cfmPass: "",
  });

  const registersubmit = (e) => {
    e.preventDefault();
    // console.log(register);
    const errors = {
      username: validateFields("username", register.username),
      email: validateFields("email", register.email),
      pass: validateFields("pass", register.pass),
      cfmPass: validateFields("cfmPass", register.cfmPass),
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

    //  let isValid = Object.values(errors).forEach(item => {
    //     if(item === ""){
    //      navigate('/login')
    //     }
    //     return item
    //   })

    //   console.log(isValid)

    // navigate("/login");
  };

  // console.log(formErrors)

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

      case "cfmPass":
        if (!value) {
          error = "Confirm! password is required";
        } else if (value !== register.pass) {
          error = "Passwords do not match";
        }
        break;

      default:
        break;
    }

    return error;
  };

  console.log(register);
  return (
    <>
      <div className={mode == "dark" ? "register-dark" : "register-light"}>
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
            {formErrors.pass && (
              <span className="error">{formErrors.pass}</span>
            )}
            <label htmlFor="r-password">Confirm Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              onChange={handleOnChange}
              onBlur={handleOnBlur}
              name="cfmPass"
            />
            {formErrors.cfmPass && (
              <span className="error">{formErrors.cfmPass}</span>
            )}
          </div>

          <button type="register" className="btn btn-danger register">
            Register
          </button>
        </form>
        <span className="theme-toggle-icon-register" onClick={toggleMode}>
          {mode === "dark" ? <CiLight size={30} /> : <CiDark size={30} />}
        </span>
      </div>
    </>
  );
};
