import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { ModeContext } from '../context/mode-context'
import "./RootLayout.css";
export const RootLayout = () => {

  const { mode } = useContext(ModeContext);
  return (
    <div className={`${mode == "dark" ? "root-dark" : "root-light"}`}>
        <Navbar />
        <Outlet />
    </div>
  )
}

{/* <div style={{backgroundColor: "red", minHeight: "100vh"}}></div> */}