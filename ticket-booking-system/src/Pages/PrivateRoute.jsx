import React from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const loginData = JSON.parse(localStorage.getItem("LoginData"));
  const registerData = JSON.parse(localStorage.getItem("RegisterData"));

  console.log(loginData);
  console.log(registerData);

  if (!registerData) {
    return <Navigate to="/register" />; 
  } else if (registerData && !loginData) {
    return <Navigate to="/login" />; 
  } else {
    return children; 
  }
};
