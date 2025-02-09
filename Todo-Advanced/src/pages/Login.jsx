import React, { useContext, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { ModeContext } from "../context/mode-context";

export const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {mode} = useContext(ModeContext)

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  // console.log({ emailError, passwordError });
  const Registerhere = () =>{
    navigate("/register")
  }

  const formsubmit = (e) => {
    e.preventDefault();
    setIsTouched(true);

    if (email === "" || password === "") {
      setEmailError("Email is required");
      setPasswordError("Password is required");
      return;
    }

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return;
    }
    const r = JSON.parse(localStorage.getItem("RegisterData"));

    if(r.email === email && r.pass === password){
      navigate("/")
    }else{
      alert("Please register first!!!");
      return;
    }

    
    const LoginData = {
      email: email,
      password: password,
    };
    console.log(email);
    console.log(password);
   
    console.log(r.email);
    console.log(r.pass);


    localStorage.setItem("LoginData", JSON.stringify(LoginData));
    // console.log("Form submitted");
    // navigate("/");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value === "") {
      setEmailError("Email is required");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 6) {
      setPasswordError("Password must be at least 6 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleEmailBlur = () => {
    setIsTouched(true);
    if (email === "") {
      setEmailError("Email is required");
    }
  };

  const handlePasswordBlur = () => {
    setIsTouched(true);
    if (password === "") {
      setPasswordError("Password is required");
    }
  };

  return (
    <div className={ mode == "dark" ? "form-main-container-dark" : "form-main-container-light"}>
    <form onSubmit={formsubmit} className="form-main-container">
      <h1>Login</h1>
      <h5>Welcome back!!</h5>
      <div className="email-password">
        <label htmlFor="email">Email Address :</label>
        <input
          type="text"
          placeholder="john123@gmail.com"
          className="email"
          value={email}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
        />
        {isTouched && emailError && <p className="errors">{emailError}</p>}

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="password"
          value={password}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
        />
        {isTouched && passwordError && (
          <p className="errors">{passwordError}</p>
        )}
      </div>
      <button type="submit" className="btn btn-danger login">
        Login
      </button>
      <div className="register-here">
      <button className="btn btn-light register-here-btn" onClick={Registerhere}>Register Here</button>
      </div>
    </form>
    </div>
  );
};
