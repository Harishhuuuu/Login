import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import NavBar from './../NavbarContainer/NavBar';
import Login from '../Pages/Login';
import Maybeshownavbar from '../Maybeshownabar/Maybeshownavbar';

const Layout = () => {
  return (
    <div>
      <Toaster/>
      <NavBar/>
        <Outlet/>
    </div>
  )
}

export default Layout