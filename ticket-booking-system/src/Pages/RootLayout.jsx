import React from 'react'
import "./RootLayout.css"
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'

export default function RootLayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}
