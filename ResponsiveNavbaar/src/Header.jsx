import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
function Header() {
  return (
    <header className='bg-slate-900 text-white sticky top-0  z-20  mx-auto flex w-full items-center justify-between  '>
     <Logo/>
     <Navbar/>
    </header>
  )
}

export default Header
