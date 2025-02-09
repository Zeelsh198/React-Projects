import { useState } from "react";
import MainForm from "./components/MainForm";
import "./App.css";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { AllTodos } from "./pages/AllTodos";
import { RootLayout } from "./pages/RootLayout";
import { Login } from "./pages/Login";
import { LogOut } from "./pages/LogOut";
import { Register } from "./pages/Register";
import { PrivatRoute } from "./pages/PrivatRoute";
import { DetailPage } from "./pages/DetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivatRoute><RootLayout /></PrivatRoute>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/allTodos",
        element: <AllTodos />,
      },
      {
        path: '/todo/:todoId',
        element: <DetailPage />
      },
      {
        path: "/logout",
        element: <LogOut />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login/>,
  },{
    path: "/register",
    element: <Register/>
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;


// const validateFields = (name, value) => {
//   let error = "";
//   switch (name) {
//     case "username": {
//       if (!value) {
//         error = "username is required";
//       }
//     }
//     case "email": {
//       if(!value){
//         error = "Invalid email format";
//       }
//     }
//     case "pass": {
//       if(!value){
//         error = "Password is required!!!";
//       }
//       else if(value.length < 6){
//         error = "Password must be at least 6 characters";
//       }
//     }
//     case "cfmPass": {
//       if (!value) {
//         error = "Confirm password is required";
//       }
//       else if(value !== register.pass){
//         error = "Passwords do not match";
//       }
//     }

//   return error;
// };