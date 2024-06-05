import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header.jsx'
function Layout1() {
  return (
    <div>
      <Header/>
      <Outlet />
    </div>
  )
}

export default Layout1
