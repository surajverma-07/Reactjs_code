import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <Link to={'/about'} >About </Link>
    <Link to={'/blog'} >Blog </Link>
    <Link to={'/project'} >Project </Link>
    </>
  )
}

export default Navbar
